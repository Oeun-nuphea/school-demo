import { getDictionary } from "@/dictionaries/getDictionary";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProgramDetail({ params }: { params: Promise<{ locale: 'en' | 'km', programId: string }> }) {
  const { locale, programId } = await params;
  const dict = await getDictionary(locale);

  // Validate if programId exists in our dictionary
  const programData = dict.programs.items[programId as keyof typeof dict.programs.items];
  if (!programData || !('curriculum' in programData)) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col bg-slate-50 font-sans">
      {/* Sleek Dark Header */}
      <section className="relative bg-slate-950 pt-36 pb-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <Link href={`/${locale}/programs`} className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold mb-8 transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            {dict.programs.backToPrograms}
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            {programData.title}
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            {programData.desc}
          </p>
        </div>
      </section>

      {/* Curriculum Timeline/Grid */}
      <section className="py-24 bg-white w-full border-t border-slate-100">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-8 lg:px-16">
          <div className="mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900">Program Curriculum</h2>
          </div>
          <div className="space-y-16">
            {(programData.curriculum as any[]).map((year, yIdx) => {
              const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];
              const sem1Label = locale === 'km' ? `ឆមាសទី ${yIdx * 2 + 1}` : `Semester ${romanNumerals[yIdx * 2]}`;
              const sem2Label = locale === 'km' ? `ឆមាសទី ${yIdx * 2 + 2}` : `Semester ${romanNumerals[yIdx * 2 + 1]}`;
              const programPrefix = programId.toUpperCase().slice(0, 3);
              
              return (
                <div key={yIdx} className="grid md:grid-cols-2 gap-x-20 gap-y-12">
                  
                  {/* Semester 1 Column */}
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-4">{sem1Label}</h4>
                    <ul className="space-y-0 border-t border-slate-100">
                      {year.sem1.split(', ').map((course: string, cIdx: number) => (
                        <li key={cIdx} className="flex items-center justify-between py-4 border-b border-slate-100 group cursor-pointer hover:bg-slate-50 transition-colors">
                          <div className="flex items-center gap-6">
                            <span className="font-bold text-amber-500 w-20 shrink-0">{programPrefix} {yIdx + 1}0{cIdx + 1}</span>
                            <span className="text-slate-600 font-medium">{course}</span>
                          </div>
                          <svg className="w-5 h-5 text-amber-500 opacity-50 group-hover:opacity-100 transition-opacity shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Semester 2 Column */}
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-4">{sem2Label}</h4>
                    <ul className="space-y-0 border-t border-slate-100">
                      {year.sem2.split(', ').map((course: string, cIdx: number) => (
                        <li key={cIdx} className="flex items-center justify-between py-4 border-b border-slate-100 group cursor-pointer hover:bg-slate-50 transition-colors">
                          <div className="flex items-center gap-6">
                            <span className="font-bold text-amber-500 w-20 shrink-0">{programPrefix} {yIdx + 1}1{cIdx + 1}</span>
                            <span className="text-slate-600 font-medium">{course}</span>
                          </div>
                          <svg className="w-5 h-5 text-amber-500 opacity-50 group-hover:opacity-100 transition-opacity shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
