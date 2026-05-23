import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-4 inset-x-0 w-[96%] max-w-7xl mx-auto z-50 bg-white/75 backdrop-blur-xl border border-white/50 shadow-xl shadow-blue-900/5 rounded-2xl transition-all duration-300">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex-shrink-0 flex items-center gap-3 group">
            <Image src="/logo.png" alt="Academic Excellence Logo" width={44} height={44} className="object-contain h-11 w-auto drop-shadow-sm group-hover:scale-105 transition-transform duration-300" />
            <span className="font-extrabold text-xl tracking-tight hidden sm:block bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-600">A.E.I</span>
          </Link>
          
          <div className="hidden md:flex items-center bg-slate-100/60 p-1 rounded-xl border border-white/60 shadow-inner">
            <Link href="/about" className="px-4 py-1.5 text-sm font-bold text-slate-600 hover:text-blue-700 hover:bg-white hover:shadow-sm rounded-lg transition-all duration-200">About</Link>
            <Link href="/programs" className="px-4 py-1.5 text-sm font-bold text-slate-600 hover:text-blue-700 hover:bg-white hover:shadow-sm rounded-lg transition-all duration-200">Programs</Link>
            <Link href="/scholarships" className="px-4 py-1.5 text-sm font-bold text-slate-600 hover:text-blue-700 hover:bg-white hover:shadow-sm rounded-lg transition-all duration-200">Scholarships</Link>
            <Link href="/faculty" className="px-4 py-1.5 text-sm font-bold text-slate-600 hover:text-blue-700 hover:bg-white hover:shadow-sm rounded-lg transition-all duration-200">Faculty</Link>
            <Link href="/alumni" className="px-4 py-1.5 text-sm font-bold text-slate-600 hover:text-blue-700 hover:bg-white hover:shadow-sm rounded-lg transition-all duration-200">Alumni</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden lg:block text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors">Contact</Link>
            <Link href="/admissions" className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-bold rounded-xl shadow-md hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-300">
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
