import AddToCartButton from "@/components/product/add_to_cart_button";

import { getProductBySlug } from "@/lib/actions/products";
import { notFound } from "next/navigation";
import React from "react";

const ProductDetail = async (props: { params: Promise<{ slug: string }> }) => {
  const { slug } = await props.params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();
  return (
    <div>
      <div className="text-lg text-blue-500">{product.name}</div>
      <div>ℹ️{product.description}</div>
      <div>💲{product.price}</div>
      <div>⭐{product.rating}</div>
      <AddToCartButton
        product={{ id: product.id, price: product.price, name: product.name }}
      />
    </div>
  );
};

export default ProductDetail;
