export default function ScholarshipCard({ item }: { item: any }) {
  const iconMap: any = {
    merit: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
    women: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    innovator: "M13 10V3L4 14h7v7l9-11h-7z",
    need: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
  };
  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col gap-6 hover:shadow-xl hover:shadow-slate-200/50 transition-all">
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
}
