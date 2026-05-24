import { getDictionary } from "@/dictionaries/getDictionary";
import { getLecturers } from "@/modules/lecture/services/lecture.service";
import Image from "next/image";

export async function FacultyPage({ locale }: { locale: 'en' | 'km' }) {
  
  const dict = await getDictionary(locale);
  const lecturersList = await getLecturers(locale);

  return (
    <main className="flex min-h-screen flex-col bg-slate-50 font-sans">
      {/* Sleek Dark Header */}
      <section className="relative bg-slate-950 pt-36 pb-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            {dict.faculty.headerTitle}
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            {dict.faculty.headerSubtitle}
          </p>
        </div>
      </section>

      {/* Faculty Roster */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
          {dict.faculty.listTitle}
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {lecturersList.map((lecturer: any, idx: number) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-slate-200/50 border border-slate-100 group">
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={lecturer.img}
                  alt={lecturer.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-1">{lecturer.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{lecturer.role}</p>
                <p className="text-slate-600 leading-relaxed">{lecturer.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
