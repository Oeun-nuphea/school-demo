"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import en from "@/dictionaries/en.json";
import km from "@/dictionaries/km.json";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const locale = pathname?.startsWith("/km") ? "km" : "en";
  const dict = locale === "km" ? km : en;

  if (pathname?.startsWith("/admin") || pathname?.startsWith("/lecturer") || pathname?.startsWith("/student")) {
    return null;
  }

  const navLinks = [
    { name: dict.navbar.about, href: `/${locale}/about` },
    { name: dict.navbar.programs, href: `/${locale}/programs` },
    { name: dict.navbar.scholarships, href: `/${locale}/scholarships` },
    { name: dict.navbar.faculty, href: `/${locale}/faculty` },
    { name: dict.navbar.alumni, href: `/${locale}/alumni` },
    { name: dict.navbar.achievements, href: `/${locale}/achievements` },
    { name: dict.navbar.lecture, href: `/${locale}/lecture` },
  ];

  const toggleLanguage = () => {
    const newLocale = locale === "en" ? "km" : "en";
    const currentPathWithoutLocale = pathname.replace(`/${locale}`, "");
    const newPath = `/${newLocale}${currentPathWithoutLocale || ""}`;
    router.push(newPath);
  };

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 bg-white/90 backdrop-blur-2xl border border-slate-200 shadow-lg shadow-slate-900/5 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "rounded-3xl" : "rounded-full"}`}>
      <div className="px-5 md:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">

          {/* Logo */}
          <Link href={`/${locale}`} onClick={() => setIsMobileMenuOpen(false)} className="flex-shrink-0 flex items-center gap-2.5 group">
            <Image
              src="/logo-transparent.png"
              alt="Academic Excellence Logo"
              width={36}
              height={36}
              priority
              className="w-auto h-auto object-contain drop-shadow-sm"
            />
            <span className="font-extrabold text-lg tracking-tight hidden sm:block bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-600">
              A.E.I
            </span>
          </Link>

          {/* Nav Links */}
          <div className="hidden lg:flex items-center">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href || pathname?.startsWith(link.href + "/");
              return (
                <Link
                  key={i}
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
          <div className="flex items-center gap-2 md:gap-3">
            {/* Language Switch */}
            <div className="flex items-center border-l border-slate-200 pl-2.5 ml-1 gap-0.5">
              <button
                onClick={() => locale !== "en" && toggleLanguage()}
                className={`px-2.5 py-1 text-xs font-medium tracking-wide rounded-full transition-colors ${
                  locale === "en"
                    ? "text-slate-900 bg-black/[0.06]"
                    : "text-slate-400 hover:text-slate-600"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => locale !== "km" && toggleLanguage()}
                className={`px-2.5 py-1 text-xs font-medium rounded-full transition-colors ${
                  locale === "km"
                    ? "text-slate-900 bg-black/[0.06]"
                    : "text-slate-400 hover:text-slate-600"
                }`}
              >
                ខ្មែរ
              </button>
            </div>
            
            <Link
              href={`/${locale}/contact`}
              className={`hidden lg:block px-4 py-1.5 text-sm font-medium rounded-full transition-colors ${
                pathname.includes("/contact")
                  ? "text-slate-900 bg-slate-100"
                  : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              {dict.navbar.contact}
            </Link>
            
            <Link
              href={`/${locale}/admissions`}
              className="hidden sm:flex px-5 py-2 bg-slate-900 text-white text-sm font-medium rounded-full shadow-sm hover:bg-slate-800 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              {dict.navbar.apply}
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button 
              className="lg:hidden p-2 ml-1 text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Expandable Container */}
      <div className={`lg:hidden transition-[max-height] duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-96" : "max-h-0"} overflow-y-auto border-t border-slate-100`}>
        <div className="px-6 py-4 flex flex-col gap-2">
          {navLinks.map((link, i) => {
            const isActive = pathname === link.href || pathname?.startsWith(link.href + "/");
            return (
              <Link
                key={i}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive
                    ? "text-blue-700 bg-blue-50"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href={`/${locale}/contact`}
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-4 py-3 rounded-xl text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
          >
            {dict.navbar.contact}
          </Link>
          <Link
            href={`/${locale}/admissions`}
            onClick={() => setIsMobileMenuOpen(false)}
            className="block sm:hidden px-4 py-3 mt-2 text-center bg-slate-900 text-white rounded-xl text-base font-medium hover:bg-slate-800 transition-colors"
          >
            {dict.navbar.apply}
          </Link>
        </div>
      </div>
    </nav>
  );
}