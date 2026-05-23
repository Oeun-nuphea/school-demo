"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import en from "@/dictionaries/en.json";
import km from "@/dictionaries/km.json";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  // Extract locale from pathname, default to 'en'
  const locale = pathname.startsWith("/km") ? "km" : "en";
  const dict = locale === "km" ? km : en;

  const navLinks = [
    { name: dict.navbar.about, href: `/${locale}/about` },
    { name: dict.navbar.programs, href: `/${locale}/programs` },
    { name: dict.navbar.scholarships, href: `/${locale}/scholarships` },
    { name: dict.navbar.faculty, href: `/${locale}/faculty` },
    { name: dict.navbar.alumni, href: `/${locale}/alumni` },
  ];

  const toggleLanguage = () => {
    const newLocale = locale === "en" ? "km" : "en";
    const currentPathWithoutLocale = pathname.replace(`/${locale}`, "");
    const newPath = `/${newLocale}${currentPathWithoutLocale || ""}`;
    router.push(newPath);
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 bg-white/80 backdrop-blur-2xl border border-slate-200 shadow-lg shadow-slate-900/5 rounded-full transition-all duration-300">
      <div className="px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href={`/${locale}`} className="flex-shrink-0 flex items-center gap-2.5 group">
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
          <div className="hidden md:flex items-center">
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
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center justify-center w-8 h-8 rounded-full border border-slate-200 text-xs font-bold text-slate-600 hover:text-blue-600 hover:border-blue-600 transition-colors"
              title="Switch Language"
            >
              {locale === "en" ? "KH" : "EN"}
            </button>
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
              className="px-5 py-2 bg-slate-900 text-white text-sm font-medium rounded-full shadow-sm hover:bg-slate-800 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              {dict.navbar.apply}
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}