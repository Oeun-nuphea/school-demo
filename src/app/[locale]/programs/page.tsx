import { getDictionary } from "@/dictionaries/getDictionary";

export default async function Programs({ params }: { params: Promise<{ locale: 'en' | 'km' }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main className="flex min-h-screen flex-col bg-slate-50 font-sans">
      
      {/* Sleek Dark Header */}
      <section className="relative bg-slate-950 pt-36 pb-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            {dict.programs.headerTitle}
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            {dict.programs.headerSubtitle}
          </p>
        </div>
      </section>

      {/* Bachelor's Degrees */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
          {dict.programs.bachelorsTitle}
        </h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {[
            { key: 'cs', data: dict.programs.items.cs },
            { key: 'se', data: dict.programs.items.se },
            { key: 'cyber', data: dict.programs.items.cyber },
            { key: 'ds', data: dict.programs.items.ds },
          ].map((program, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl hover:shadow-blue-500/5 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{program.data.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-8">{program.data.desc}</p>
              
              {/* Curriculum Accordion */}
              {'curriculum' in program.data && (
                <details className="group border border-slate-100 rounded-2xl bg-slate-50 overflow-hidden">
                  <summary className="flex justify-between items-center font-semibold cursor-pointer p-5 select-none hover:bg-slate-100 transition-colors text-slate-800 outline-none">
                    {dict.home.programs.viewCurriculum}
                    <svg className="w-5 h-5 transition-transform group-open:rotate-180 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </summary>
                  <div className="p-6 border-t border-slate-100 bg-white">
                    <div className="space-y-8">
                      {(program.data.curriculum as any[]).map((year, yIdx) => (
                        <div key={yIdx}>
                          <h4 className="font-bold text-blue-600 mb-4">{year.year}</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">{dict.programs.semester1}</span>
                              <p className="text-sm text-slate-700 leading-relaxed">{year.sem1}</p>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">{dict.programs.semester2}</span>
                              <p className="text-sm text-slate-700 leading-relaxed">{year.sem2}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </details>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Master's Degrees */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            {dict.programs.mastersTitle}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { key: 'mba', data: dict.programs.items.mba },
              { key: 'mit', data: dict.programs.items.mit },
            ].map((program, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-3xl p-8 hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{program.data.title}</h3>
                <p className="text-slate-600 leading-relaxed">{program.data.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </main>
  );
}
