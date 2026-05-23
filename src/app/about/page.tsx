import Image from "next/image";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-950 font-sans mt-20">
      {/* Page Header */}
      <section className="bg-blue-600 dark:bg-slate-900 py-20 px-4 sm:px-6 lg:px-8 text-center border-b border-blue-700 dark:border-slate-800">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Global Tech</h1>
        <p className="text-blue-100 text-lg max-w-2xl mx-auto">
          Founded with a vision to lead the future of education, Global Tech is dedicated to academic excellence, innovation, and global impact.
        </p>
      </section>

      {/* History & Vision */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">Our History</h2>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">A Legacy of Excellence</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Established in 1995, Global Tech University began as a small institute for computer sciences. Today, we are a multidisciplinary powerhouse recognized globally for our rigorous curriculum and groundbreaking research.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Our vision is to empower individuals to become creative problem solvers and leaders who can navigate and shape the complexities of the modern world.
            </p>
          </div>
          <div className="relative h-96 rounded-3xl overflow-hidden shadow-xl">
            <Image 
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Campus History" 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Institutional Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Innovation", desc: "Pushing the boundaries of knowledge through research." },
              { title: "Integrity", desc: "Upholding the highest ethical standards in academia." },
              { title: "Inclusivity", desc: "Fostering a diverse and welcoming community." }
            ].map((val, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{val.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
