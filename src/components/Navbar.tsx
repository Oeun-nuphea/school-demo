"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Scholarships", href: "/scholarships" },
    { name: "Faculty", href: "/faculty" },
    { name: "Alumni", href: "/alumni" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 bg-white/80 backdrop-blur-2xl border border-slate-200 shadow-lg shadow-slate-900/5 rounded-full transition-all duration-300">
      <div className="px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2.5 group">
            <Image
              src="/logo-transparent.png"
              alt="Academic Excellence Logo"
              width={36}
              height={36}
              className="w-auto h-auto object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
            />
            <span className="font-extrabold text-lg tracking-tight hidden sm:block bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-600">
              A.E.I
            </span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href || pathname?.startsWith(link.href + "/");
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-sm font-medium transition-colors rounded-full ${
                    isActive
                      ? "text-slate-900 bg-slate-100"
                      : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className={`hidden lg:block px-4 py-1.5 text-sm font-medium rounded-full transition-colors ${
                pathname === "/contact"
                  ? "text-slate-900 bg-slate-100"
                  : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              Contact
            </Link>
            <Link
              href="/admissions"
              className="px-5 py-2 bg-slate-900 text-white text-sm font-medium rounded-full shadow-sm hover:bg-slate-800 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              Apply Now
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}