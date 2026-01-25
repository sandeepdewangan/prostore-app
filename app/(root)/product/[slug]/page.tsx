import { Button } from "@/components/ui/button";
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
      <Button variant="outline">Add to Cart</Button>
    </div>
  );
};

export default ProductDetail;
