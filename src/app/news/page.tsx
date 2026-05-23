import Image from "next/image";
import Link from "next/link";

export default function News() {
  const articles = [
    {
      title: "Global Tech Partners with Microsoft for AI Research Lab",
      category: "Partnership",
      date: "May 20, 2026",
      desc: "A new state-of-the-art AI lab is opening this fall, giving students hands-on access to enterprise computing."
    },
    {
      title: "Annual Hackathon 2026 Announced",
      category: "Event",
      date: "May 18, 2026",
      desc: "Get ready for 48 hours of coding, pizza, and innovation. Over $10k in prizes available!"
    },
    {
      title: "New Student Orientation Schedule Released",
      category: "Announcement",
      date: "May 15, 2026",
      desc: "Welcome Class of 2030! Find all the information you need for your first week on campus."
    }
  ];

  return (
    <main className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-950 font-sans mt-20">
      <section className="bg-blue-600 dark:bg-slate-900 py-20 px-4 sm:px-6 lg:px-8 text-center border-b border-blue-700 dark:border-slate-800">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">News & Announcements</h1>
        <p className="text-blue-100 text-lg max-w-2xl mx-auto">
          Stay up to date with the latest stories, events, and breakthroughs at Global Tech.
        </p>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-48 bg-slate-200 dark:bg-slate-800 relative">
                {/* Mock image placeholder */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                  <svg className="w-12 h-12 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-md">{article.category}</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{article.date}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 leading-tight hover:text-blue-600 transition-colors cursor-pointer">{article.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">{article.desc}</p>
                <Link href="#" className="text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline">
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
