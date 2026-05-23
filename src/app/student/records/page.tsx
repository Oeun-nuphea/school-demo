export default function AcademicRecords() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Academic Records</h1>
          <p className="text-slate-500">View your transcript, course registration, and financial history.</p>
        </div>
        <button className="px-4 py-2 bg-slate-800 text-white font-medium rounded-lg shadow hover:bg-slate-900 transition flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
          Download Unofficial Transcript
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-slate-200 mb-6">
        <nav className="-mb-px flex gap-8">
          <a href="#" className="border-b-2 border-blue-600 py-4 px-1 text-sm font-bold text-blue-600">
            Course Registration
          </a>
          <a href="#" className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-slate-500 hover:text-slate-700 hover:border-slate-300">
            Transcript
          </a>
          <a href="#" className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-slate-500 hover:text-slate-700 hover:border-slate-300">
            Financial History
          </a>
        </nav>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 mb-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-bold text-slate-900">Spring 2027 Registration (Upcoming)</h2>
          <span className="px-3 py-1 bg-amber-100 text-amber-700 font-bold text-xs rounded-full">Opens in 14 days</span>
        </div>
        
        <div className="p-8 text-center border-2 border-dashed border-slate-200 rounded-xl bg-slate-50">
          <svg className="w-12 h-12 text-slate-400 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          <h3 className="font-bold text-slate-900 mb-1">Registration is currently closed</h3>
          <p className="text-sm text-slate-500 max-w-md mx-auto">You will be notified via email when your registration window opens. Please prepare your course cart beforehand.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200">
          <h2 className="font-bold text-slate-900">Completed Courses (Recent)</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 text-slate-500 font-medium">
              <tr>
                <th className="px-6 py-3">Term</th>
                <th className="px-6 py-3">Course Code</th>
                <th className="px-6 py-3">Course Name</th>
                <th className="px-6 py-3">Credits</th>
                <th className="px-6 py-3">Grade</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {[
                { term: "Spring 2026", code: "CS201", name: "Data Structures", credits: "3", grade: "A" },
                { term: "Spring 2026", code: "MATH102", name: "Calculus II", credits: "4", grade: "B+" },
                { term: "Spring 2026", code: "PHY101", name: "Physics I", credits: "4", grade: "A-" },
                { term: "Fall 2025", code: "CS101", name: "Intro to Programming", credits: "3", grade: "A" },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50">
                  <td className="px-6 py-4">{row.term}</td>
                  <td className="px-6 py-4 font-bold text-slate-900">{row.code}</td>
                  <td className="px-6 py-4">{row.name}</td>
                  <td className="px-6 py-4">{row.credits}</td>
                  <td className="px-6 py-4 font-bold">{row.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
