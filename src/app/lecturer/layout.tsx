export default function LecturerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-slate-100 flex pt-28">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white border-r border-slate-200 hidden md:block fixed h-[calc(100vh-80px)] overflow-y-auto z-40">
        <div className="p-6">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Lecturer Portal</h3>
          <nav className="space-y-2">
            <a href="/lecturer" className="flex items-center gap-3 px-4 py-2 hover:bg-slate-50 text-slate-600 rounded-lg font-medium transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              Dashboard
            </a>
            <a href="/lecturer/attendance" className="flex items-center gap-3 px-4 py-2 text-slate-600 hover:bg-slate-50 rounded-lg font-medium transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Attendance & Grading
            </a>
            <a href="/lecturer/leave" className="flex items-center gap-3 px-4 py-2 text-slate-600 hover:bg-slate-50 rounded-lg font-medium transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              Leave Management
            </a>
          </nav>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 md:ml-64 p-8">
        {children}
      </main>
    </div>
  )
}
