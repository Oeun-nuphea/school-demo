import { getDictionary } from "@/dictionaries/getDictionary";
import { getAlumni } from "@/modules/alumni/services/alumni.service";
import AlumniCard from "@/modules/alumni/components/AlumniCard";

export async function AlumniPage({ locale }: { locale: 'en' | 'km' }) {
  
  const dict = await getDictionary(locale);
  const alumniList = await getAlumni(locale);

  return (
    <main className="flex min-h-screen flex-col bg-slate-50 font-sans">
      {/* Sleek Dark Header */}
      <section className="relative bg-slate-950 pt-36 pb-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            {dict.alumni.headerTitle}
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            {dict.alumni.headerSubtitle}
          </p>
        </div>
      </section>

      {/* Success Stories Marquee */}
      <section className="py-24 bg-white overflow-hidden">
        <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center">
          {dict.alumni.listTitle}
        </h2>
        
        <div className="flex flex-col gap-8 w-full relative">
          {/* Left fading edge */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          {/* Right fading edge */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Row 1: Scrolling Left */}
          <div className="flex animate-marquee">
            {[...alumniList.slice(0, 4), ...alumniList.slice(0, 4)].map((data: any, idx: number) => (
              <AlumniCard key={idx} data={data} />
            ))}
          </div>

          {/* Row 2: Scrolling Right */}
          <div className="flex animate-marquee-reverse">
            {[...alumniList.slice(4, 8), ...alumniList.slice(4, 8)].map((data: any, idx: number) => (
              <AlumniCard key={idx} data={data} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
