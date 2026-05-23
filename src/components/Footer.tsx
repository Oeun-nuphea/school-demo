import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image src="/logo.png" alt="Asian Institute of Cambodia Logo" width={64} height={64} className="object-contain" />
              <span className="font-bold text-xl text-slate-900">A.I.C</span>
            </div>
            <p className="text-slate-500 mb-6 text-sm">
              Asian Institute of Cambodia. Empowering minds, shaping the future. A premier institute for technology, business, and innovation.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Academics</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link href="/programs" className="hover:text-blue-600">Undergraduate</Link></li>
              <li><Link href="/programs" className="hover:text-blue-600">Graduate Programs</Link></li>
              <li><Link href="/programs" className="hover:text-blue-600">Short Courses</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Institute</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link href="/about" className="hover:text-blue-600">About Us</Link></li>
              <li><Link href="/admissions" className="hover:text-blue-600">Admissions</Link></li>
              <li><Link href="/scholarships" className="hover:text-blue-600">Scholarships</Link></li>
              <li><Link href="/news" className="hover:text-blue-600">News & Events</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="flex gap-3">
                <svg className="w-5 h-5 shrink-0 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                Phnom Penh, Cambodia
              </li>
              <li className="flex gap-3">
                <svg className="w-5 h-5 shrink-0 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                +855 (0) 12 345 678
              </li>
              <li className="flex gap-3">
                <svg className="w-5 h-5 shrink-0 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                info@aic.edu.kh
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Asian Institute of Cambodia. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="#" className="hover:text-slate-900">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-900">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
