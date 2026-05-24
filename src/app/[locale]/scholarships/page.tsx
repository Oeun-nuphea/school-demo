import { getDictionary } from "@/dictionaries/getDictionary";
import { getScholarships } from "@/services/api";
import Link from "next/link";

export default async function Scholarships({ params }: { params: Promise<{ locale: 'en' | 'km' }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const scholarshipsList = await getScholarships(locale);

  return (
    <main className="flex min-h-screen flex-col bg-slate-50 font-sans">
      
      {/* Sleek Dark Header */}
      <section className="relative bg-slate-950 pt-36 pb-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold tracking-wider mb-6 uppercase">
            Financial Aid
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            {dict.scholarships.headerTitle}
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            {dict.scholarships.headerSubtitle}
          </p>
        </div>
      </section>

      {/* Scholarship Listings */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {scholarshipsList.map((item: any, idx: number) => {
            const iconMap: any = {
              merit: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
              women: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
              innovator: "M13 10V3L4 14h7v7l9-11h-7z",
              need: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            };
            return (
              <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col gap-6 hover:shadow-xl hover:shadow-slate-200/50 transition-all">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconMap[item.id] || iconMap.merit} />
                  </svg>
                </div>
                <div className="flex-1 w-full">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-bold tracking-wide mb-4">
                    {item.amount}
                  </div>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-blue-600 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">{dict.scholarships.applyNow}</h3>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">{dict.scholarships.deadline}</p>
          <Link href={`/${locale}/admissions`} className="inline-block bg-white text-blue-600 font-bold px-8 py-3.5 rounded-full hover:bg-slate-50 transition-colors shadow-sm hover:shadow-md">
            {dict.scholarships.applyNow}
          </Link>
        </div>
      </section>
      
    </main>
  );
}
