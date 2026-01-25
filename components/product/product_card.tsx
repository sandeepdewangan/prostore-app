import Image from "next/image";
import React from "react";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <div>
      <Image src={product.images[0]} alt="Product" width={150} height={150} />
      <h1>{product.title}</h1>
      <h1>{product.description}</h1>
      <h1>💲{product.price}</h1>
    </div>
  );
};

export default ProductCard;
