import Image from "next/image";
import { getDictionary } from "@/dictionaries/getDictionary";

export default async function About({ params }: { params: Promise<{ locale: 'en' | 'km' }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main className="flex min-h-screen flex-col bg-slate-50 font-sans">
      
      {/* Page Header */}
      <section className="relative bg-slate-950 pt-36 pb-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            {dict.about.headerTitle}
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            {dict.about.headerSubtitle}
          </p>
        </div>
      </section>
      
      {/* History & Vision */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">
              {dict.about.historyBadge}
            </h2>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              {dict.about.historyTitle}
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              {dict.about.historyP1}
            </p>
            <p className="text-slate-600 leading-relaxed">
              {dict.about.historyP2}
            </p>
          </div>
          <div className="relative h-96 rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Campus History"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-24 bg-white border-y border-slate-100 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              {dict.about.valuesTitle}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: dict.about.values.innovation.title,
                desc: dict.about.values.innovation.desc,
              },
              {
                title: dict.about.values.integrity.title,
                desc: dict.about.values.integrity.desc,
              },
              {
                title: dict.about.values.inclusivity.title,
                desc: dict.about.values.inclusivity.desc,
              },
            ].map((val, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100 text-center"
              >
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {val.title}
                </h3>
                <p className="text-slate-600">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
