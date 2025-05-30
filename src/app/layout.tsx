import type { Viewport } from "next";
import { Inter } from "next/font/google";
import "./index.css";
import Layout from "../components/Layout";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  return {
    title: "Sudhanshu Bhagwat",
    description: "A software developer, here for the fun of it",
    other: {
      "apple-mobile-web-app-status-bar-style": "default",
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f9fafb" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  width: "device-width",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
