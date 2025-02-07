import "./globals.css";
import type { Metadata } from "next";
import { SUSE } from "next/font/google";


const suse = SUSE({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SPHERE - Shop Electronics, Furniture & More",
  description: "Discover a wide range of products on SPHERE! Shop electronics, furniture, cell phones, and more with confidence. Great deals & fast delivery.",
  icons: {
    icon: '/favicon.png', // Path to your favicon
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={suse.className}>
        {children}
      </body>
    </html>
  );
}
