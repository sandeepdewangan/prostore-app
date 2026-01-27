"use server";

import { signIn, signOut } from "@/auth";
import { loginSchema } from "../validators/auth_validator";
import { isRedirectError } from "next/dist/client/components/redirect-error";

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