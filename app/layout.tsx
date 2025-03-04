import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dev Test",
  description: "I Hope this scales my application through!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="   font-inter  p-8 flex  flex-col  items-center  ">
        {children}
      </body>
    </html>
  );
}
