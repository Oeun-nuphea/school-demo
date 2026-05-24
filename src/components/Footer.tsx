"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import en from "@/dictionaries/en.json";
import km from "@/dictionaries/km.json";

export default function Footer() {
  const pathname = usePathname();
  const locale = pathname?.startsWith("/km") ? "km" : "en";
  const dict = locale === "km" ? km : en;

  if (pathname?.startsWith("/admin") || pathname?.startsWith("/lecturer") || pathname?.startsWith("/student")) {
    return null;
  }

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image src="/logo-transparent.png" alt="Asian Institute of Cambodia Logo" width={64} height={64} className="w-auto h-auto object-contain" />
              <span className="font-bold text-xl text-slate-900">A.I.C</span>
            </div>
            <p className="text-slate-500 mb-6 text-sm">
              {dict.footer.desc}
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6">{dict.footer.academics}</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link href={`/${locale}/programs`} className="hover:text-blue-600">{dict.footer.undergrad}</Link></li>
              <li><Link href={`/${locale}/programs`} className="hover:text-blue-600">{dict.footer.grad}</Link></li>
              <li><Link href={`/${locale}/programs`} className="hover:text-blue-600">{dict.footer.short}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">{dict.footer.institute}</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link href={`/${locale}/about`} className="hover:text-blue-600">{dict.footer.about}</Link></li>
              <li><Link href={`/${locale}/admissions`} className="hover:text-blue-600">{dict.footer.admissions}</Link></li>
              <li><Link href={`/${locale}/scholarships`} className="hover:text-blue-600">{dict.footer.scholarships}</Link></li>
              <li><Link href={`/${locale}/lecture`} className="hover:text-blue-600">{dict.navbar.lecture}</Link></li>
              <li><Link href={`/${locale}/blog`} className="hover:text-blue-600">{dict.navbar.blog}</Link></li>
              <li><Link href={`/${locale}/events`} className="hover:text-blue-600">{dict.navbar.events}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">{dict.footer.contact}</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="flex gap-3">
                <svg className="w-5 h-5 shrink-0 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                {dict.footer.address}
              </li>
              <li className="flex gap-3">
                <svg className="w-5 h-5 shrink-0 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                071 21 000 06 / 098 322 872
              </li>
              <li className="flex gap-3">
                <svg className="w-5 h-5 shrink-0 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                sopheap4anha@gmail.com
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {dict.footer.rights}
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="#" className="hover:text-slate-900">{dict.footer.privacy}</Link>
            <Link href="#" className="hover:text-slate-900">{dict.footer.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
