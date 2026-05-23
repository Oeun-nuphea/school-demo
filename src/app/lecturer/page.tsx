export default function FacultyDashboard() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Faculty Dashboard</h1>
          <p className="text-slate-500">Welcome, Dr. Alan Turing.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900">3</div>
            <div className="text-sm font-medium text-slate-500">Classes Today</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900">145</div>
            <div className="text-sm font-medium text-slate-500">Total Students</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900">12</div>
            <div className="text-sm font-medium text-slate-500">Assignments to Grade</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <h2 className="font-bold text-slate-900 mb-6">Today's Schedule</h2>
          <div className="relative border-l-2 border-slate-200 ml-4 space-y-8">
            <div className="relative">
              <span className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow"></span>
              <div className="pl-6">
                <div className="font-bold text-slate-900">CS101: Intro to Programming</div>
                <div className="text-sm text-slate-500 mt-1">09:00 AM - 10:30 AM • Room 302</div>
              </div>
            </div>
            <div className="relative">
              <span className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow"></span>
              <div className="pl-6">
                <div className="font-bold text-slate-900">CS305: Artificial Intelligence</div>
                <div className="text-sm text-slate-500 mt-1">11:00 AM - 12:30 PM • Lab A</div>
              </div>
            </div>
            <div className="relative">
              <span className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-slate-300 border-4 border-white shadow"></span>
              <div className="pl-6 opacity-50">
                <div className="font-bold text-slate-900">Office Hours</div>
                <div className="text-sm text-slate-500 mt-1">02:00 PM - 04:00 PM • Faculty Office 12</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-bold text-slate-900">Recent Announcements</h2>
            <button className="text-sm text-blue-600 font-medium">+ New</button>
          </div>
          <div className="space-y-4">
            <div className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition cursor-pointer">
              <div className="font-bold text-slate-900 mb-1">Midterm Exam Schedule Posted</div>
              <p className="text-sm text-slate-600 line-clamp-2">Please review the midterm schedule and ensure your rubrics are uploaded by Friday.</p>
              <div className="text-xs text-slate-400 mt-3">2 hours ago</div>
            </div>
            <div className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition cursor-pointer">
              <div className="font-bold text-slate-900 mb-1">Faculty Meeting Reminder</div>
              <p className="text-sm text-slate-600 line-clamp-2">Monthly faculty meeting will be held in the Main Hall tomorrow at 10 AM.</p>
              <div className="text-xs text-slate-400 mt-3">Yesterday</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
