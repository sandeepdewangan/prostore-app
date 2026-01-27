export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="w-4xl mx-auto bg-gray-200">{children}</div>;
}
