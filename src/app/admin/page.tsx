export default function AdminDashboard() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Dashboard Overview</h1>
          <p className="text-slate-500 dark:text-slate-400">Welcome back, Super Admin.</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition">
          Generate Report
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { title: "Total Students", value: "15,243", trend: "+4.5%", up: true },
          { title: "Total Revenue", value: "$4.2M", trend: "+12.1%", up: true },
          { title: "Pending Admissions", value: "342", trend: "-2.4%", up: false },
          { title: "Active Classes", value: "1,204", trend: "0%", up: true }
        ].map((kpi, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">{kpi.title}</h3>
            <div className="flex items-end justify-between">
              <span className="text-2xl font-bold text-slate-900 dark:text-white">{kpi.value}</span>
              <span className={`text-sm font-bold ${kpi.up ? 'text-emerald-500' : 'text-rose-500'}`}>
                {kpi.trend}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Admissions Table */}
      <div className="bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
          <h2 className="font-bold text-slate-900 dark:text-white">Recent Admission Applications</h2>
          <a href="#" className="text-sm font-medium text-blue-600 dark:text-blue-400">View All</a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600 dark:text-slate-400">
            <thead className="bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 font-medium">
              <tr>
                <th className="px-6 py-3">Applicant Name</th>
                <th className="px-6 py-3">Applied Program</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {[
                { name: "Alice Johnson", program: "Software Engineering", date: "May 20, 2026", status: "Pending" },
                { name: "Robert Smith", program: "Cybersecurity", date: "May 19, 2026", status: "Approved" },
                { name: "Maria Garcia", program: "Artificial Intelligence", date: "May 19, 2026", status: "Reviewing" },
                { name: "James Lee", program: "Digital Marketing", date: "May 18, 2026", status: "Rejected" },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-900/50">
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{row.name}</td>
                  <td className="px-6 py-4">{row.program}</td>
                  <td className="px-6 py-4">{row.date}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                      row.status === 'Approved' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' :
                      row.status === 'Pending' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' :
                      row.status === 'Reviewing' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                      'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-slate-400 hover:text-blue-600">Edit</button>
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
