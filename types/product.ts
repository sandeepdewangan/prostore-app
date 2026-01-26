import { cartItemInsertSchema, cartItemSchema, insertProductSchema } from '@/lib/validators/product_validators';
import {z} from 'zod';

export type Product = z.infer<typeof insertProductSchema> &  {
    id: string;
    rating: string;
    createdAt:Date;    
}
