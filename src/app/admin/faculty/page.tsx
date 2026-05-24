export default function FacultyManagement() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Faculty Management</h1>
          <p className="text-slate-500">Manage lecturers, academic staff, and teaching assignments.</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition">
          + Add Faculty Member
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-sm font-medium text-slate-500 mb-2">Total Faculty</h3>
          <div className="text-3xl font-bold text-slate-900">342</div>
          <div className="text-sm text-emerald-500 font-medium mt-2">+12 this semester</div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-sm font-medium text-slate-500 mb-2">Active Classes</h3>
          <div className="text-3xl font-bold text-slate-900">845</div>
          <div className="text-sm text-slate-400 font-medium mt-2">Currently being taught</div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-sm font-medium text-slate-500 mb-2">On Leave</h3>
          <div className="text-3xl font-bold text-amber-600">14</div>
          <div className="text-sm text-slate-400 font-medium mt-2">Sabbatical or sick leave</div>
        </div>
      </div>

      {/* Faculty Roster */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center">
          <h2 className="font-bold text-slate-900">Faculty Roster</h2>
          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none">
              <option>All Departments</option>
              <option>Computer Science</option>
              <option>Business</option>
              <option>Engineering</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 text-slate-500 font-medium">
              <tr>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Department</th>
                <th className="px-6 py-3">Title</th>
                <th className="px-6 py-3">Course Load</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {[
                { name: "Dr. Alan Turing", dept: "Computer Science", title: "Professor", load: "3 Classes", status: "Active" },
                { name: "Prof. Ada Lovelace", dept: "Mathematics", title: "Associate Prof.", load: "2 Classes", status: "Active" },
                { name: "Dr. Grace Hopper", dept: "Software Engineering", title: "Professor", load: "0 Classes", status: "On Leave" },
                { name: "Dr. John von Neumann", dept: "Physics", title: "Assistant Prof.", load: "4 Classes", status: "Active" },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-slate-900">{row.name}</td>
                  <td className="px-6 py-4">{row.dept}</td>
                  <td className="px-6 py-4">{row.title}</td>
                  <td className="px-6 py-4">{row.load}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                      row.status === 'Active' ? 'bg-emerald-100 text-emerald-700' :
                      row.status === 'On Leave' ? 'bg-amber-100 text-amber-700' :
                      'bg-slate-100 text-slate-700'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-slate-400 hover:text-blue-600">Manage</button>
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
