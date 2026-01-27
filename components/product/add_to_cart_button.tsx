"use client";

import { Button } from "../ui/button";
import { toast } from "sonner";
import { addItemToCart } from "@/lib/actions/products";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

const AddToCartButton = ({ product }: any) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleAddToCart = async () => {
    startTransition(async () => {
      const res = await addItemToCart(product);
      if (!res.success) {
        toast("Failure", {
          description: "Unable to add to cart!",
        });
        return;
      }
      // On success
      toast("Successfully Added to Cart", {
        description: `${product.name} added to cart`,
        action: {
          label: "Go to Cart",
          onClick: () => router.push("/cart"),
        },
      });
    });
  };

  return (
    <div>
      <Button variant="outline" onClick={handleAddToCart}>
        {isPending ? "Loading..." : "Show Toast"}
      </Button>
    </div>
  );
};

export default AddToCartButton;
