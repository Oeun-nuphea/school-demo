import { getDictionary } from "@/dictionaries/getDictionary";
import LecturerProfile from "@/modules/lecture/components/LecturerProfile";

import { getLecturers } from "@/modules/lecture/services/lecture.service";

export async function LecturePage({ locale }: { locale: 'en' | 'km' }) {
  
  const dict = await getDictionary(locale);

  // We are enriching the existing faculty data with more detailed information for this dedicated profile page
  const lecturersInfo = await getLecturers(locale);

  return (
    <main className="flex min-h-screen flex-col bg-slate-50 font-sans">
      {/* Sleek Dark Header */}
      <section className="relative bg-slate-950 pt-36 pb-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold tracking-wider mb-6 uppercase">
            {dict.navbar.lecture} Directory
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Academic Leaders & Innovators
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Discover the profound expertise and academic background of the visionaries shaping the minds of tomorrow at the Asian Institute of Cambodia.
          </p>
        </div>
      </section>

      {/* Detailed Lecturer Profiles */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="space-y-16">
          {lecturersInfo.map((lecturer: any) => (
            <LecturerProfile key={lecturer.id} lecturer={lecturer} />
          ))}
        </div>
      </section>
    </main>
  );
}