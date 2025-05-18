import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ThemeProvider from "@/context/ThemeContext";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col antialiased bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-zinc-200 transition-all duration-300 ">
        <Navbar />
        <main className="flex-1 pb-12 pt-20">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
