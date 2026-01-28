"use server";

import { signIn, signOut } from "@/auth";
import { loginSchema, registerSchema } from "../validators/auth_validator";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { hashSync } from "bcryptjs";
import { prisma } from "@/db/prisma";
import { format } from "path";
import { formatError } from "../utils";

export async function loginWithCredentials(prevState:unknown, formData:FormData){
    try {
        const user = loginSchema.parse({
            email: formData.get('email'),
            password: formData.get('password')
        });
        await signIn('credentials', user);
        return {success: true, message:'logged in successfully!'}
    } catch (error) {
        if(isRedirectError(error)){
            throw error;
        }
        return {success: false, message:'Invalid username or password!'}
    }
}

export async function logout(){
    await signOut();
}

export async function register(prevState:unknown, formData:FormData){
    try {
        const user = registerSchema.parse({
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password'),
            confirmPassword: formData.get('confirmPassword'),
        });

        const plainPassword = user.password;
        user.password = hashSync(user.password, 10);
        await prisma.user.create({
            data:{
                name:user.name,
                password: user.password,
                email: user.email,
                address: {},
            },
        });
        await signIn('credentials', {
            email: user.email,
            password: plainPassword,
        });

        return {success: true, message:'Registered successfully!'}
    } catch (error) {
        console.log(error, Object.getOwnPropertyNames(error));
        if(isRedirectError(error)){
            throw error;
        }
        return {success: false, message: formatError(error)}
    }
}