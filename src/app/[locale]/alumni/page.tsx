import { getDictionary } from "@/dictionaries/getDictionary";
import { getAlumni } from "@/services/api";
import Image from "next/image";

export default async function Alumni({ params }: { params: Promise<{ locale: 'en' | 'km' }> }) {
  const { locale } = await params;
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
            {[...alumniList.slice(0, 4), ...alumniList.slice(0, 4)].map((data: any, idx) => (
              <div key={idx} className="bg-slate-50 rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col w-[450px] shrink-0 mx-4">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 ring-4 ring-white">
                    <Image src={`https://i.pravatar.cc/150?u=${data.id}`} alt={data.name} fill sizes="64px" className="object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{data.name}</h3>
                    <p className="text-blue-600 font-semibold text-sm">{data.role}</p>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed italic">"{data.desc}"</p>
              </div>
            ))}
          </div>

          {/* Row 2: Scrolling Right */}
          <div className="flex animate-marquee-reverse">
            {[...alumniList.slice(4, 8), ...alumniList.slice(4, 8)].map((data: any, idx) => (
              <div key={idx} className="bg-slate-50 rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col w-[450px] shrink-0 mx-4">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 ring-4 ring-white">
                    <Image src={`https://i.pravatar.cc/150?u=${data.id}`} alt={data.name} fill sizes="64px" className="object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{data.name}</h3>
                    <p className="text-indigo-600 font-semibold text-sm">{data.role}</p>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed italic">"{data.desc}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
