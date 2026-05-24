import { getDictionary } from "@/dictionaries/getDictionary";
import { getScholarships } from "@/modules/scholarships/services/scholarships.service";
import ScholarshipCard from "@/modules/scholarships/components/ScholarshipCard";
import Link from "next/link";

export async function ScholarshipsPage({ locale }: { locale: 'en' | 'km' }) {
  
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
          {scholarshipsList.map((item: any, idx: number) => (
            <ScholarshipCard key={idx} item={item} />
          ))}
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
