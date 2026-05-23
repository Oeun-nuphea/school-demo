export default function Faculty() {
  const faculty = [
    { name: "Dr. Alan Turing", role: "Head of AI Research", dept: "Faculty of IT" },
    { name: "Prof. Ada Lovelace", role: "Lead Data Scientist", dept: "Faculty of IT" },
    { name: "Dr. John von Neumann", role: "Professor of Computing", dept: "Faculty of IT" },
    { name: "Dr. Grace Hopper", role: "Software Eng. Director", dept: "Faculty of IT" },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-950 font-sans mt-20">
      <section className="bg-blue-600 dark:bg-slate-900 py-20 px-4 sm:px-6 lg:px-8 text-center border-b border-blue-700 dark:border-slate-800">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Faculty</h1>
        <p className="text-blue-100 text-lg max-w-2xl mx-auto">
          Learn from industry experts, pioneering researchers, and passionate educators.
        </p>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-4 gap-8">
          {faculty.map((member, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-24 h-24 bg-slate-200 dark:bg-slate-800 rounded-full mx-auto mb-4 flex items-center justify-center text-slate-400">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{member.name}</h3>
              <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-1">{member.role}</p>
              <p className="text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider">{member.dept}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
