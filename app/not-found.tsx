"use client";

import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  return (
    <div className="w-lg mx-auto ">
      <div className="text-xl">Page not found!</div>
      <div>
        <Button onClick={() => (window.location.href = "/")} variant="outline">
          Go to Home!
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
