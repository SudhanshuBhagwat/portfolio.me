"use client";

import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined") return;

      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Blog", path: "/blog" },
  ];

  const activeClass = "text-primary-600 dark:text-primary-400 font-medium";
  const inactiveClass =
    "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-400";

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-zinc-950/70 backdrop-blur-md shadow-sm transition-all duration-200 bg-[radial-gradient(circle_at_0%_100%,_rgba(0,0,0,0.1)_4px,_transparent_0)] bg-[length:20px_20px] dark:bg-[radial-gradient(circle_at_0%_100%,_rgba(255,255,255,0.1)_4px,_transparent_0)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-3xl font-bold text-primary-600 dark:text-primary-400">
              🧑🏻
            </span>
          </Link>

          <nav className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.path}
                className={`${
                  pathname === link.path ? activeClass : inactiveClass
                }`}
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
