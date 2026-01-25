import Header from "@/components/shared/header/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-4xl mx-auto bg-gray-200">
      <Header />
      {children}
    </div>
  );
}
