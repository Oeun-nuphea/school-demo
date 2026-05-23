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
    <nav className="fixed top-4 inset-x-0 w-[96%] max-w-7xl mx-auto z-50 bg-white/75 backdrop-blur-xl border border-white/50 shadow-xl shadow-blue-900/5 rounded-2xl transition-all duration-300">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex-shrink-0 flex items-center gap-3 group">
            <Image src="/logo.png" alt="Academic Excellence Logo" width={44} height={44} className="object-contain h-11 w-auto drop-shadow-sm group-hover:scale-105 transition-transform duration-300" />
            <span className="font-extrabold text-xl tracking-tight hidden sm:block bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-600">A.E.I</span>
          </Link>
          
          <div className="hidden md:flex items-center bg-slate-100/80 p-1.5 rounded-xl border border-slate-200/60 shadow-inner gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname?.startsWith(link.href + '/');
              return (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className={`px-4 py-1.5 text-sm font-bold rounded-lg transition-all duration-200 ${
                    isActive 
                      ? "text-blue-700 bg-white shadow ring-1 ring-slate-900/5" 
                      : "text-slate-500 hover:text-slate-900 hover:bg-white/50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <Link 
              href="/contact" 
              className={`hidden lg:block text-sm font-bold transition-colors ${
                pathname === '/contact' ? 'text-blue-700' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Contact
            </Link>
            <Link href="/admissions" className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-bold rounded-xl shadow-md hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-300">
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
