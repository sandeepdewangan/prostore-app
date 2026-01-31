import {z} from 'zod';

const currency = z.string().refine((val) => /^\d+(\.\d{2})$/.test(val.toString()),{ message: "Must have exactly 2 decimal places" });

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
    price:  currency,
});

export const cartItemSchema = z.object({
    productId: z.string().min(1, 'Product is required'),
    name: z.string().min(1,'Name is required'),
    slug: z.string().min(1, 'Slug is required'),
    qty: z.number().int().nonnegative('Qty must be positive'),
    image: z.string().min(1,'Image is required'),
    price: currency,
});

export const insertCartSchema = z.object({
    items:z.array(cartItemSchema),
    itemsPrice:currency,
    totalPrice:currency,
    shippingPrice:currency,
    taxPrice:currency,
    sessionCartId:z.string().min(1, "Session cart is required"),
    userId: z.string().optional().nullable(),
});