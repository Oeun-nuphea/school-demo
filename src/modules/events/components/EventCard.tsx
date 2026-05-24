export default function EventCard({ event }: { event: any }) {
  return (
    <div className="bg-white border border-slate-200 rounded-[2rem] p-8 sm:p-10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row gap-8 items-center">
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
        <h3 className="text-2xl font-bold text-slate-900 mb-3">{event.title}</h3>
        <p className="text-slate-600 mb-6">{event.desc}</p>
        <button className="text-blue-600 font-semibold text-sm hover:underline flex items-center gap-1">
          Learn More <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  );
}
