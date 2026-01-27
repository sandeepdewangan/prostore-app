import {z} from 'zod';

const emailRegex =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Schema for inserting products
export const loginSchema = z.object({
    email: z.string().regex(emailRegex, "Invalid email format"),
    password: z.string().min(6, 'Password must be min 6 chars'),
});

