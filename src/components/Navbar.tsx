import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex-shrink-0 flex items-center gap-3">
            <Image src="/logo.png" alt="Asian Institute of Cambodia Logo" width={48} height={48} className="object-contain h-12 w-auto" />
            <span className="font-bold text-xl tracking-tight text-slate-900 hidden sm:block">A.I.C</span>
          </Link>
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/about" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">About</Link>
            <Link href="/programs" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Programs</Link>
            <Link href="/admissions" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Admissions</Link>
            <Link href="/scholarships" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Scholarships</Link>
            <Link href="/news" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">News</Link>
            <Link href="/faculty" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Faculty</Link>
            <Link href="/alumni" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Alumni</Link>
            <Link href="/contact" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Contact</Link>
            <Link href="/admissions" className="px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
