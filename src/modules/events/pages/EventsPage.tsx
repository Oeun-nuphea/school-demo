import Link from "next/link";
import { getDictionary } from "@/dictionaries/getDictionary";

  import { getEvents } from "@/modules/events/services/events.service";

export async function EventsPage({ locale }: { locale: 'en' | 'km' }) {
  
  const dict = await getDictionary(locale);

  const upcomingEvents = await getEvents(locale);

  return (
    <main className="flex min-h-screen flex-col bg-slate-50 font-sans">
      <section className="relative bg-slate-950 pt-36 pb-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold tracking-wider mb-6 uppercase">
            Campus Life
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Upcoming Events
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Join us for exciting hackathons, career fairs, and seminars. There's always something happening at AIC.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="space-y-8">
          {upcomingEvents.map((event: any, idx: number) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-[2rem] p-8 sm:p-10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3 flex-shrink-0 bg-slate-50 rounded-2xl p-6 text-center border border-slate-100 flex flex-col justify-center">
                <span className="text-blue-600 font-bold text-lg mb-2">{event.date}</span>
                <span className="text-slate-500 text-sm flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  {event.location}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-full">{event.type}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{event.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{event.desc}</p>
                <Link href="#" className="px-6 py-2.5 bg-slate-900 text-white font-medium rounded-full hover:bg-blue-600 transition-colors shadow-sm text-sm inline-block">
                  Register Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
