import type { Viewport } from "next";
import { Inter } from "next/font/google";
import "./index.css";
import Layout from "../components/Layout";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  return {
    title: "Minimal Portfolio",
    description: "A minimal portfolio website",
    other: {
      "apple-mobile-web-app-status-bar-style": "default",
      "theme-color": [
        { media: "(prefers-color-scheme: light)", color: "#f9fafb" },
        { media: "(prefers-color-scheme: dark)", color: "#09090b" },
      ],
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f9fafb" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
