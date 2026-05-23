export default function LearnerDashboard() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Learner Dashboard</h1>
          <p className="text-slate-500">Welcome back, Alice!</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* GPA & Progress */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-6 rounded-xl shadow-lg text-white">
            <h3 className="font-bold text-blue-100 mb-2">Cumulative GPA</h3>
            <div className="text-5xl font-extrabold mb-1">3.84</div>
            <div className="text-sm text-blue-200">Top 5% in Computer Science</div>
            
            <div className="mt-8">
              <div className="flex justify-between text-sm mb-1">
                <span>Degree Progress</span>
                <span className="font-bold">64 / 120 Credits</span>
              </div>
              <div className="w-full bg-blue-900/50 rounded-full h-2">
                <div className="bg-white h-2 rounded-full" style={{ width: '53%' }}></div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <h3 className="font-bold text-slate-900 mb-4">Upcoming Deadlines</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex flex-col items-center justify-center w-12 h-12 bg-rose-50 text-rose-600 rounded-lg">
                  <span className="text-xs font-bold uppercase">Oct</span>
                  <span className="text-lg font-bold leading-none">12</span>
                </div>
                <div>
                  <div className="font-bold text-slate-900">CS305 Project Proposal</div>
                  <div className="text-sm text-slate-500">Due at 11:59 PM</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center justify-center w-12 h-12 bg-amber-50 text-amber-600 rounded-lg">
                  <span className="text-xs font-bold uppercase">Oct</span>
                  <span className="text-lg font-bold leading-none">15</span>
                </div>
                <div>
                  <div className="font-bold text-slate-900">MATH201 Midterm</div>
                  <div className="text-sm text-slate-500">In-class examination</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Current Classes */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-bold text-slate-900">Current Semester Classes</h2>
              <button className="text-sm font-medium text-blue-600">View Schedule</button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { code: "CS305", name: "Artificial Intelligence", instructor: "Dr. Turing", time: "Mon/Wed 11:00 AM", grade: "A" },
                { code: "MATH201", name: "Linear Algebra", instructor: "Prof. Lovelace", time: "Tue/Thu 09:00 AM", grade: "A-" },
                { code: "SE305", name: "Software Design", instructor: "Dr. Hopper", time: "Mon/Wed 02:00 PM", grade: "B+" },
                { code: "ENG102", name: "Technical Writing", instructor: "Dr. Smith", time: "Fri 10:00 AM", grade: "A" },
              ].map((cls, idx) => (
                <div key={idx} className="border border-slate-200 rounded-xl p-4 hover:shadow-md transition-shadow bg-slate-50">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold bg-blue-100 text-blue-700 px-2 py-1 rounded">{cls.code}</span>
                    <span className="font-bold text-slate-700">Grade: {cls.grade}</span>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-1">{cls.name}</h4>
                  <div className="text-sm text-slate-500">{cls.instructor}</div>
                  <div className="text-sm text-slate-500 mt-2 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {cls.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
