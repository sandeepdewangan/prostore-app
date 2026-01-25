'use server';

import { prisma } from "@/db/prisma";
import { convertToPlainObject } from "../utils";

// Get latest products
export async function getLatestProducts(limit:number) {
    const data = await prisma.product.findMany({
        take:limit,
        orderBy:{createdAt:'desc'}
    });    
    return convertToPlainObject(data);
}

// Get single product
export async function getProductBySlug(slug:string) {
    return await prisma.product.findFirst({where: {slug:slug}});
}