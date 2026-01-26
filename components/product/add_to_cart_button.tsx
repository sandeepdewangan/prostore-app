"use client";

import { Button } from "../ui/button";
import { toast } from "sonner";
import { addItemToCart } from "@/lib/actions/products";
import { useRouter } from "next/navigation";

const AddToCartButton = ({ product }) => {
  const router = useRouter();

  const handleAddToCart = async () => {
    console.log("HIII");
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
  };

  return (
    <div>
      <Button variant="outline" onClick={handleAddToCart}>
        Show Toast
      </Button>
    </div>
  );
};

export default AddToCartButton;
