import Header from "@/components/shared/header/Header";
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-4xl mx-auto bg-gray-200">
      <Header />
      {children}
      <Toaster />
    </div>
  );
}
