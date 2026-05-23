export default function AcademicSetup() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Academic Setup</h1>
          <p className="text-slate-500">Manage Faculties, Departments, and Class Scheduling.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 font-medium rounded-lg shadow-sm hover:bg-slate-50 transition">
            Manage Faculties
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition">
            + New Class
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Active Departments */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <h2 className="font-bold text-slate-900 mb-4">Departments</h2>
            <div className="space-y-3">
              {[
                { name: "Computer Science", courses: 24 },
                { name: "Data Science", courses: 18 },
                { name: "Cybersecurity", courses: 15 },
                { name: "Software Engineering", courses: 22 },
              ].map((dept, idx) => (
                <div key={idx} className="flex justify-between items-center p-3 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-100 transition cursor-pointer">
                  <span className="font-medium text-slate-700">{dept.name}</span>
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">{dept.courses} courses</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Schedule & Conflicts */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-bold text-slate-900">Class Scheduling</h2>
              <span className="flex items-center gap-2 text-rose-600 bg-rose-50 px-3 py-1 rounded-full text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-rose-600"></span> 2 Conflicts Detected
              </span>
            </div>
            
            <div className="space-y-4">
              {[
                { time: "Mon 09:00 AM", course: "CS101: Intro to Programming", room: "Lab A", instructor: "Dr. Turing", conflict: false },
                { time: "Mon 11:00 AM", course: "DS201: Data Structures", room: "Room 302", instructor: "Prof. Lovelace", conflict: true },
                { time: "Mon 11:00 AM", course: "SE305: Software Design", room: "Room 302", instructor: "Dr. Hopper", conflict: true },
                { time: "Tue 10:00 AM", course: "CYB102: Network Security", room: "Lab B", instructor: "Dr. Neumann", conflict: false },
              ].map((cls, idx) => (
                <div key={idx} className={`p-4 rounded-lg border ${cls.conflict ? 'border-rose-200 bg-rose-50' : 'border-slate-200 bg-white'} flex justify-between items-center`}>
                  <div className="flex gap-6">
                    <div className="w-24 text-sm font-bold text-slate-500">{cls.time}</div>
                    <div>
                      <div className={`font-bold ${cls.conflict ? 'text-rose-900' : 'text-slate-900'}`}>{cls.course}</div>
                      <div className="text-sm text-slate-500">{cls.instructor} • {cls.room}</div>
                    </div>
                  </div>
                  {cls.conflict ? (
                    <button className="text-xs font-bold text-rose-600 bg-rose-100 px-3 py-1.5 rounded-lg hover:bg-rose-200">Resolve</button>
                  ) : (
                    <button className="text-xs font-bold text-slate-400 hover:text-blue-600">Edit</button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
