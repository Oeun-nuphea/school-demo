import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/dictionaries/getDictionary";

export default async function Home({ params }: { params: Promise<{ locale: 'en' | 'km' }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main className="flex min-h-screen flex-col bg-slate-50 font-sans selection:bg-blue-500/30">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.png"
            alt="University Campus"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-transparent "></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
              {dict.home.hero.badge}
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              {dict.home.hero.title}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                {dict.home.hero.titleHighlight}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              {dict.home.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/${locale}/programs`}
                className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-center hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30 hover:-translate-y-1"
              >
                {dict.home.hero.btnExplore}
              </Link>
              <Link
                href={`/${locale}/about`}
                className="px-8 py-4 bg-white/10 text-white backdrop-blur-md border border-white/20 rounded-full font-semibold text-center hover:bg-white/20 transition-all hover:-translate-y-1"
              >
                {dict.home.hero.btnDiscover}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="relative -mt-16 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl shadow-blue-900/5 border border-slate-100 p-10 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 divide-x divide-slate-100">
            {[
              { label: dict.home.stats.students, value: "15,000+" },
              { label: dict.home.stats.faculty, value: "800+" },
              { label: dict.home.stats.programs, value: "120+" },
              { label: dict.home.stats.partners, value: "50+" },
            ].map((stat, i) => (
              <div
                key={i}
                className={`flex flex-col items-center justify-center ${i === 0 ? "pl-0" : ""} ${i === 3 ? "pr-0" : ""}`}
              >
                <span className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">
                  {stat.value}
                </span>
                <span className="text-sm md:text-base text-slate-500 font-bold uppercase tracking-wider text-center">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section
        id="programs"
        className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">
            {dict.home.programs.badge}
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            {dict.home.programs.title}
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            {dict.home.programs.subtitle}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: dict.home.programs.items.software.title,
              faculty: dict.home.programs.items.software.faculty,
              desc: dict.home.programs.items.software.desc,
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              ),
              color: "from-blue-500 to-cyan-400",
            },
            {
              title: dict.home.programs.items.ai.title,
              faculty: dict.home.programs.items.ai.faculty,
              desc: dict.home.programs.items.ai.desc,
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
              color: "from-indigo-500 to-purple-500",
            },
            {
              title: dict.home.programs.items.cyber.title,
              faculty: dict.home.programs.items.cyber.faculty,
              desc: dict.home.programs.items.cyber.desc,
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              ),
              color: "from-rose-500 to-orange-400",
            },
          ].map((program, idx) => (
            <div
              key={idx}
              className="group relative bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${program.color} rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity`}
              ></div>
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${program.color} text-white flex items-center justify-center mb-6 shadow-lg`}
              >
                {program.icon}
              </div>
              <div className="text-sm font-semibold text-slate-500 mb-2">
                {program.faculty}
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">
                {program.title}
              </h4>
              <p className="text-slate-600 mb-8">{program.desc}</p>
              <Link
                href={`/${locale}/programs`}
                className="inline-flex items-center text-sm font-semibold text-blue-600 group-hover:gap-2 transition-all"
              >
                {dict.home.programs.viewCurriculum}
                <svg
                  className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href={`/${locale}/programs`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 text-slate-900 font-medium hover:bg-slate-200 transition-colors"
          >
            {dict.home.programs.viewAll}
          </Link>
        </div>
      </section>

      {/* Scholarships Section */}
      <section
        id="scholarships"
        className="py-24 bg-slate-900 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-2">
                {dict.home.scholarships.badge}
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                {dict.home.scholarships.title}
              </h3>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                {dict.home.scholarships.subtitle}
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: dict.home.scholarships.items.merit,
                    amount: "Up to 100% Tuition",
                  },
                  {
                    title: dict.home.scholarships.items.women,
                    amount: "50% Tuition + Stipend",
                  },
                  { title: dict.home.scholarships.items.global, amount: "$5,000 / Year" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm"
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{item.title}</h4>
                      <p className="text-blue-300 text-sm">{item.amount}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link
                  href={`/${locale}/scholarships`}
                  className="inline-flex px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-100 transition-colors"
                >
                  {dict.home.scholarships.apply}
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20 border border-slate-800">
                <Image
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Students collaborating"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[240px]">
                <div className="flex gap-1 text-amber-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-900 font-bold mb-1">{dict.home.scholarships.quote}</p>
                <p className="text-slate-500 text-sm">{dict.home.scholarships.author}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
