import {z} from 'zod';

const emailRegex =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const loginSchema = z.object({
    email: z.string().regex(emailRegex, "Invalid email format"),
    password: z.string().min(6, 'Password must be min 6 chars'),
});
export const registerSchema = z.object({
    name: z.string().min(3, "Name must be atleast 3 characters"),
    email: z.string().regex(emailRegex, "Invalid email format"),
    password: z.string().min(6, 'Password must be min 6 chars'),
    confirmPassword: z.string().min(1, "Confirm password field required"),
}).refine((data)=> data.password === data.confirmPassword, {
  message: "Password don't match",
  path:['confirmPassword']
});
