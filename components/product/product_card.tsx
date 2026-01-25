import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div>
      <Image src={product.images[0]} alt="Product" width={150} height={150} />
      <Link href={`/product/${product.slug}`}>{product.name}</Link>
      <h1>{product.description}</h1>
      <h1>💲{product.price}</h1>
    </div>
  );
};

export default ProductCard;
