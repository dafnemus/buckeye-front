import type { Metadata } from "next";
import "@styles/globals.css";

export const metadata: Metadata = {
  title: "Buckeye International",
  description: "Bring your hygiene and cleaning operations up to the highest standards with products from Buckeye International. Contact us today to find out more!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className="text-gray"
      >
        {children}
      </body>
    </html>
  );
}
