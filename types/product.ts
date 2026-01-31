import {  cartItemSchema, insertCartSchema, insertProductSchema } from '@/lib/validators/product_validators';
import {z} from 'zod';

export type Product = z.infer<typeof insertProductSchema> &  {
    id: string;
    rating: string;
    createdAt:Date;    
}

export type Cart = z.infer<typeof cartItemSchema>;
export type CartItem = z.infer<typeof insertCartSchema>;