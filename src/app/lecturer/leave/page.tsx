export default function LeaveManagement() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Leave Management</h1>
          <p className="text-slate-500">Request time off and track your leave balances.</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition">
          + Request Leave
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-sm font-medium text-slate-500 mb-2">Annual Leave Balance</h3>
          <div className="text-3xl font-bold text-slate-900">14 Days</div>
          <div className="text-sm text-slate-400 font-medium mt-2">Out of 20 Days</div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-sm font-medium text-slate-500 mb-2">Sick Leave Balance</h3>
          <div className="text-3xl font-bold text-slate-900">8 Days</div>
          <div className="text-sm text-slate-400 font-medium mt-2">Out of 10 Days</div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-sm font-medium text-slate-500 mb-2">Pending Requests</h3>
          <div className="text-3xl font-bold text-amber-500">1</div>
          <div className="text-sm text-slate-400 font-medium mt-2">Awaiting Approval</div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200">
          <h2 className="font-bold text-slate-900">Leave History</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 text-slate-500 font-medium">
              <tr>
                <th className="px-6 py-3">Type</th>
                <th className="px-6 py-3">Duration</th>
                <th className="px-6 py-3">Reason</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {[
                { type: "Annual Leave", duration: "Oct 12 - Oct 14, 2026", reason: "Family Vacation", status: "Pending" },
                { type: "Sick Leave", duration: "Sep 02 - Sep 03, 2026", reason: "Fever", status: "Approved" },
                { type: "Annual Leave", duration: "Jul 15 - Jul 20, 2026", reason: "Summer Break", status: "Approved" },
              ].map((leave, idx) => (
                <tr key={idx} className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold text-slate-900">{leave.type}</td>
                  <td className="px-6 py-4">{leave.duration}</td>
                  <td className="px-6 py-4">{leave.reason}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                      leave.status === 'Approved' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {leave.status}
                    </span>
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
