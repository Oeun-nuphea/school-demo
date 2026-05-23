export default function AttendanceGrading() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Attendance & Grading</h1>
          <p className="text-slate-500">Manage student records and performance evaluations.</p>
        </div>
        <select className="px-4 py-2 bg-white border border-slate-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium">
          <option>CS305: Artificial Intelligence</option>
          <option>CS101: Intro to Programming</option>
        </select>
      </div>

      {/* Tabs */}
      <div className="border-b border-slate-200 mb-6">
        <nav className="-mb-px flex gap-8">
          <a href="#" className="border-b-2 border-blue-600 py-4 px-1 text-sm font-bold text-blue-600">
            Attendance
          </a>
          <a href="#" className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-slate-500 hover:text-slate-700 hover:border-slate-300">
            Grades
          </a>
          <a href="#" className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-slate-500 hover:text-slate-700 hover:border-slate-300">
            Assignments
          </a>
        </nav>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 mb-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-bold text-slate-900">Today's Session: Lecture 12</h2>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-slate-100 text-slate-600 font-medium rounded-lg hover:bg-slate-200 transition text-sm">
              Mark All Present
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition text-sm">
              Save Attendance
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 text-slate-500 font-medium">
              <tr>
                <th className="px-6 py-3">Student Name</th>
                <th className="px-6 py-3">ID</th>
                <th className="px-6 py-3">Attendance</th>
                <th className="px-6 py-3">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {[
                { name: "Alice Johnson", id: "STU-2026-001", status: "Present" },
                { name: "Robert Smith", id: "STU-2026-002", status: "Absent" },
                { name: "Maria Garcia", id: "STU-2026-003", status: "Late" },
                { name: "James Lee", id: "STU-2026-004", status: "Present" },
              ].map((student, idx) => (
                <tr key={idx} className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-slate-900">{student.name}</td>
                  <td className="px-6 py-4">{student.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className={`px-3 py-1 rounded border text-xs font-bold ${student.status === 'Present' ? 'bg-emerald-50 border-emerald-200 text-emerald-700' : 'bg-white border-slate-200 text-slate-500'}`}>Present</button>
                      <button className={`px-3 py-1 rounded border text-xs font-bold ${student.status === 'Absent' ? 'bg-rose-50 border-rose-200 text-rose-700' : 'bg-white border-slate-200 text-slate-500'}`}>Absent</button>
                      <button className={`px-3 py-1 rounded border text-xs font-bold ${student.status === 'Late' ? 'bg-amber-50 border-amber-200 text-amber-700' : 'bg-white border-slate-200 text-slate-500'}`}>Late</button>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <input type="text" placeholder="Add note..." className="bg-transparent border-b border-slate-200 focus:outline-none focus:border-blue-500 px-2 py-1 w-full text-sm" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
