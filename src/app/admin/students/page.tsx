export default function UserDirectory() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">User Directory</h1>
          <p className="text-slate-500">Manage students, lecturers, and staff.</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition">
          + Add User
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm mb-6 flex gap-4">
        <input 
          type="text" 
          placeholder="Search users..." 
          className="flex-1 bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus:outline-none">
          <option>All Roles</option>
          <option>Students</option>
          <option>Lecturers</option>
          <option>Staff</option>
        </select>
        <select className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus:outline-none">
          <option>Active</option>
          <option>Suspended</option>
          <option>Alumni</option>
        </select>
      </div>

      {/* Directory Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-200">
              <tr>
                <th className="px-6 py-4">User</th>
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">Department</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {[
                { name: "Alice Johnson", email: "alice.j@student.edu", id: "STU-2026-001", role: "Student", dept: "Computer Science", status: "Active" },
                { name: "Dr. Alan Turing", email: "aturing@faculty.edu", id: "FAC-1950-001", role: "Lecturer", dept: "Artificial Intelligence", status: "Active" },
                { name: "Robert Smith", email: "r.smith@student.edu", id: "STU-2026-002", role: "Student", dept: "Cybersecurity", status: "Suspended" },
                { name: "Maria Garcia", email: "mgarcia@admin.edu", id: "ADM-2020-012", role: "Staff", dept: "Admissions", status: "Active" },
              ].map((user, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">{user.name}</div>
                        <div className="text-xs text-slate-500">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium">{user.id}</td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700">
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">{user.dept}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                      user.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-slate-400 hover:text-blue-600 font-medium text-sm">Edit</button>
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
