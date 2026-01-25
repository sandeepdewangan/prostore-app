import React from "react";
import ProductCard from "./product_card";
import { Product } from "@/types/product";

const ProductList = ({ title, data }: { title: string; data: Product[] }) => {
  return (
    <div>
      <div className="text-lg">{title}</div>
      {data.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
