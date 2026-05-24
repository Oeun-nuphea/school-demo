import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/dictionaries/getDictionary";

export async function BlogPage({ locale }: { locale: 'en' | 'km' }) {
  
  const dict = await getDictionary(locale);

  const posts = [
    {
      title: "The Future of AI in Education",
      category: "Technology",
      date: "May 22, 2026",
      desc: "How artificial intelligence is reshaping the way we learn, research, and collaborate on campus.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Building a Sustainable Campus",
      category: "Campus Life",
      date: "May 15, 2026",
      desc: "Our new initiative to achieve carbon neutrality by 2030 through green tech and student-led projects.",
      image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Alumni Spotlight: Journey to Silicon Valley",
      category: "Success Stories",
      date: "May 10, 2026",
      desc: "An exclusive interview with class of 2020 graduate who recently founded a successful fintech startup.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <main className="flex min-h-screen flex-col bg-slate-50 font-sans">
      <section className="relative bg-slate-950 pt-36 pb-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold tracking-wider mb-6 uppercase">
            Insights & Stories
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Our Blog
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Discover the latest stories, research breakthroughs, and campus life updates from the Asian Institute of Cambodia.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="h-56 relative w-full overflow-hidden">
                <Image src={post.image} alt={post.title} fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">{post.category}</span>
                  <span className="text-sm font-medium text-slate-500">{post.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-snug">{post.title}</h3>
                <p className="text-slate-600 mb-6 flex-1">{post.desc}</p>
                <Link href="#" className="inline-flex items-center font-bold text-slate-900 hover:text-blue-600 transition-colors group">
                  Read Article
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
