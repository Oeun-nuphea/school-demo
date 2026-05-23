import { getDictionary } from "@/dictionaries/getDictionary";
import Link from "next/link";

export default async function Scholarships({ params }: { params: Promise<{ locale: 'en' | 'km' }> }) {
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
            {dict.scholarships.headerTitle}
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            {dict.scholarships.headerSubtitle}
          </p>
        </div>
      </section>

      {/* Scholarship Listings */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {[
            { data: dict.scholarships.items.merit, icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
            { data: dict.scholarships.items.women, icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
            { data: dict.scholarships.items.innovator, icon: "M13 10V3L4 14h7v7l9-11h-7z" },
            { data: dict.scholarships.items.need, icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-200 p-8 rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8 hover:shadow-xl transition-shadow">
              <div className="flex gap-6 items-start">
                <div className="w-16 h-16 shrink-0 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{item.data.title}</h3>
                  <div className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm font-bold rounded-full mb-4">
                    {item.data.amount}
                  </div>
                  <p className="text-slate-600">{item.data.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-blue-600 rounded-3xl p-12 text-white shadow-xl shadow-blue-600/20">
          <h3 className="text-3xl font-bold mb-4">{dict.scholarships.applyNow}</h3>
          <p className="text-blue-100 mb-8">{dict.scholarships.deadline}</p>
          <Link href={`/${locale}/admissions`} className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-full hover:bg-slate-50 transition-colors">
            {dict.scholarships.applyNow}
          </Link>
        </div>
      </section>
      
    </main>
  );
}
