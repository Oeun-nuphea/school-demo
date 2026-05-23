export default function Alumni() {
  const alumni = [
    { name: "Sarah Jenkins", year: "2022", role: "Software Engineer at Google", quote: "Global Tech gave me the hands-on experience I needed to succeed at a FAANG company." },
    { name: "Michael Chang", year: "2020", role: "Cybersecurity Analyst at IBM", quote: "The rigorous curriculum and supportive faculty shaped my career." },
    { name: "Elena Rodriguez", year: "2023", role: "AI Researcher at OpenAI", quote: "The undergraduate research opportunities here are unparalleled." }
  ];

  return (
    <main className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-950 font-sans mt-20">
      <section className="bg-blue-600 dark:bg-slate-900 py-20 px-4 sm:px-6 lg:px-8 text-center border-b border-blue-700 dark:border-slate-800">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Alumni & Success Stories</h1>
        <p className="text-blue-100 text-lg max-w-2xl mx-auto">
          Discover where a degree from Global Tech can take you.
        </p>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-3 gap-8">
          {alumni.map((alum, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 hover:shadow-xl transition-shadow relative">
              <div className="absolute top-6 right-6 text-blue-100 dark:text-slate-800">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
              </div>
              <p className="text-slate-700 dark:text-slate-300 italic mb-8 relative z-10">"{alum.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-400">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{alum.name}</h4>
                  <p className="text-xs text-blue-600 dark:text-blue-400">{alum.role}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Class of {alum.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
