import { getDictionary } from "@/dictionaries/getDictionary";
import { getAchievements } from "@/modules/achievements/services/achievements.service";

const TrophyIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
    <path d="M4 22h16"/>
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
    <path d="M18 2H6v7c0 6 6 8 6 8s6-2 6-8V2z"/>
  </svg>
)

const AwardIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="8" r="7"/>
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
  </svg>
)

const StarIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)

const TrendingUpIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
    <polyline points="16 7 22 7 22 13"/>
  </svg>
)

export async function AchievementsPage({ locale }: { locale: 'en' | 'km' }) {
  
  const dict = await getDictionary(locale);
  const achievementsList = await getAchievements(locale);

  const icons = [TrophyIcon, AwardIcon, StarIcon, TrendingUpIcon];

  return (
    <main className="flex min-h-screen flex-col bg-slate-50 font-sans">
      {/* Sleek Dark Header */}
      <section className="relative bg-slate-950 pt-36 pb-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold tracking-wider mb-6 uppercase">
            Milestones
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            {dict.achievements.headerTitle}
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            {dict.achievements.headerSubtitle}
          </p>
        </div>
      </section>

      {/* Timeline / Grid Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center">
            {dict.achievements.listTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {achievementsList.map((data: any, idx: number) => {
              const Icon = icons[idx % icons.length];
              return (
                <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col gap-6 hover:shadow-xl hover:shadow-slate-200/50 transition-all">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1 w-full">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{data.title}</h3>
                    <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-bold tracking-wide mb-4">
                      {data.date}
                    </div>
                    <p className="text-slate-600 leading-relaxed">{data.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
