import {z} from 'zod';

// Schema for inserting products
export const insertProductSchema = z.object({
    name: z.string().min(3, 'Name must be of atleast 3 characters'),
    slug: z.string().min(3, 'Slug must be of atleast 3 characters'),
    category: z.string().min(3, 'Category must be of atleast 3 characters'),
    brand: z.string().min(3, 'Brand must be of atleast 3 characters'),
    description: z.string().min(3, 'Description must be of atleast 3 characters'),
    stock:z.coerce.number(),
    images: z.array(z.string()).min(1, 'Product must have atleast 1 image'),
    isFeatured: z.boolean(),
    banner:z.string().nullable(),
    price:  z.string().refine((val) => /^\d+(\.\d{2})$/.test(val.toString()),{ message: "Must have exactly 2 decimal places" }
  ),
});