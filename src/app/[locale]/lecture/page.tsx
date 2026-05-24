import { getDictionary } from "@/dictionaries/getDictionary";
import Image from "next/image";

export default async function LecturerInfo({ params }: { params: Promise<{ locale: 'en' | 'km' }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  // We are enriching the existing faculty data with more detailed information for this dedicated profile page
  const lecturersInfo = [
    {
      id: "drChen",
      ...dict.faculty.items.drChen,
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      expertise: ["Artificial Intelligence", "Neural Networks", "AI Ethics", "Machine Learning"],
      education: "Ph.D. in Computer Science, MIT",
      publications: 42,
      courses: ["CS-401 Deep Learning", "CS-505 AI Ethics & Policy"]
    },
    {
      id: "profSok",
      ...dict.faculty.items.profSok,
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      expertise: ["Software Architecture", "Cloud Computing", "DevOps", "Microservices"],
      education: "M.Sc. in Software Engineering, Stanford University",
      publications: 18,
      courses: ["SE-302 Advanced Web Dev", "SE-410 Cloud Architecture"]
    },
    {
      id: "drPatel",
      ...dict.faculty.items.drPatel,
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      expertise: ["Cybersecurity", "Network Defense", "Ethical Hacking", "Cryptography"],
      education: "Ph.D. in Information Security, Carnegie Mellon University",
      publications: 35,
      courses: ["CYB-200 Intro to Security", "CYB-450 Penetration Testing"]
    }
  ];

  return (
    <main className="flex min-h-screen flex-col bg-slate-50 font-sans">
      {/* Sleek Dark Header */}
      <section className="relative bg-slate-950 pt-36 pb-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold tracking-wider mb-6 uppercase">
            {dict.navbar.lecture} Directory
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Academic Leaders & Innovators
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Discover the profound expertise and academic background of the visionaries shaping the minds of tomorrow at the Asian Institute of Cambodia.
          </p>
        </div>
      </section>

      {/* Detailed Lecturer Profiles */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="space-y-16">
          {lecturersInfo.map((lecturer) => (
            <div key={lecturer.id} className="bg-white rounded-[2rem] p-8 sm:p-12 shadow-xl shadow-slate-200/40 border border-slate-100 flex flex-col md:flex-row gap-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50 to-transparent rounded-tr-[2rem] -z-0"></div>
              
              {/* Profile Image & Quick Stats */}
              <div className="w-full md:w-1/3 flex-shrink-0 relative z-10">
                <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-md mb-6">
                  <Image
                    src={lecturer.img}
                    alt={lecturer.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-medium flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" /></svg>
                      {lecturer.education}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm font-medium text-slate-500 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div className="flex-1 text-center">
                    <p className="text-2xl font-bold text-slate-900">{lecturer.publications}</p>
                    <p className="text-xs uppercase tracking-wider mt-1">Publications</p>
                  </div>
                  <div className="w-px h-10 bg-slate-200"></div>
                  <div className="flex-1 text-center">
                    <p className="text-2xl font-bold text-slate-900">{lecturer.courses.length}</p>
                    <p className="text-xs uppercase tracking-wider mt-1">Courses</p>
                  </div>
                </div>
              </div>

              {/* Detailed Info */}
              <div className="flex-1 relative z-10 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest rounded-full mb-4 w-fit">
                  {lecturer.role}
                </span>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">{lecturer.name}</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  {lecturer.desc}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                      Areas of Expertise
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {lecturer.expertise.map((item, idx) => (
                        <span key={idx} className="px-3 py-1.5 bg-slate-100 text-slate-600 text-sm font-medium rounded-lg">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                      Courses Taught
                    </h3>
                    <ul className="space-y-2">
                      {lecturer.courses.map((course, idx) => (
                        <li key={idx} className="text-slate-600 text-sm flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-blue-500 before:rounded-full">
                          {course}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-auto">
                  <button className="px-6 py-3 bg-slate-900 text-white font-medium rounded-full hover:bg-blue-600 transition-colors shadow-md text-sm">
                    View Full Publication History
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}