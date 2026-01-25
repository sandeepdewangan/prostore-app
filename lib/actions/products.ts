'use server';

import { prisma } from "@/db/prisma";
import { convertToPlainObject } from "../utils";


export async function getLatestProducts(limit:number) {
    const data = await prisma.product.findMany({
        take:limit,
        orderBy:{createdAt:'desc'}
    });    
    return convertToPlainObject(data);
}