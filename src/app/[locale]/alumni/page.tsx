import { getDictionary } from "@/dictionaries/getDictionary";
import Image from "next/image";

export default async function Alumni({ params }: { params: Promise<{ locale: 'en' | 'km' }> }) {
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
            {dict.alumni.headerTitle}
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            {dict.alumni.headerSubtitle}
          </p>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
          {dict.alumni.listTitle}
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { data: dict.alumni.items.chheng, img: "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
            { data: dict.alumni.items.sophea, img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
            { data: dict.alumni.items.virak, img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
          ].map((alum, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 ring-4 ring-slate-50">
                  <Image
                    src={alum.img}
                    alt={alum.data.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{alum.data.name}</h3>
                  <p className="text-blue-600 font-semibold text-sm">{alum.data.role}</p>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed flex-grow italic">
                "{alum.data.desc}"
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
