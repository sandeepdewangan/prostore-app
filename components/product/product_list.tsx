import React from "react";
import ProductCard from "./product_card";

const ProductList = ({ title, data }: { title: string; data: any }) => {
  return (
    <div>
      <div className="text-lg">{title}</div>
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
