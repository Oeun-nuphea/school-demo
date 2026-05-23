export default function FinancialOversight() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Financial Oversight</h1>
          <p className="text-slate-500">Track tuition cycles, scholarships, and student invoices.</p>
        </div>
        <button className="px-4 py-2 bg-emerald-600 text-white font-medium rounded-lg shadow hover:bg-emerald-700 transition">
          Generate Invoices
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-sm font-medium text-slate-500 mb-2">Total Expected Revenue</h3>
          <div className="text-3xl font-bold text-slate-900">$12,450,000</div>
          <div className="text-sm text-emerald-500 font-medium mt-2">Fall 2026 Semester</div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-sm font-medium text-slate-500 mb-2">Collected Tuition</h3>
          <div className="text-3xl font-bold text-emerald-600">$8,240,500</div>
          <div className="text-sm text-slate-400 font-medium mt-2">66.1% Collected</div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-sm font-medium text-slate-500 mb-2">Outstanding Invoices</h3>
          <div className="text-3xl font-bold text-rose-600">$4,209,500</div>
          <div className="text-sm text-slate-400 font-medium mt-2">1,245 Students Pending</div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center">
          <h2 className="font-bold text-slate-900">Recent Transactions</h2>
          <div className="flex gap-2">
            <button className="text-sm font-medium text-slate-500 hover:text-slate-900 bg-slate-100 px-3 py-1 rounded-lg">All</button>
            <button className="text-sm font-medium text-slate-500 hover:text-slate-900 px-3 py-1 rounded-lg">Paid</button>
            <button className="text-sm font-medium text-slate-500 hover:text-slate-900 px-3 py-1 rounded-lg">Pending</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 text-slate-500 font-medium">
              <tr>
                <th className="px-6 py-3">Invoice ID</th>
                <th className="px-6 py-3">Student Name</th>
                <th className="px-6 py-3">Amount</th>
                <th className="px-6 py-3">Date Issued</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {[
                { id: "INV-2026-001", student: "Alice Johnson", amount: "$4,500.00", date: "Aug 01, 2026", status: "Paid" },
                { id: "INV-2026-002", student: "Robert Smith", amount: "$4,500.00", date: "Aug 01, 2026", status: "Pending" },
                { id: "INV-2026-003", student: "Maria Garcia", amount: "$2,250.00", date: "Aug 01, 2026", status: "Partial" },
                { id: "INV-2026-004", student: "James Lee", amount: "$4,500.00", date: "Aug 01, 2026", status: "Overdue" },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-mono text-xs">{row.id}</td>
                  <td className="px-6 py-4 font-medium text-slate-900">{row.student}</td>
                  <td className="px-6 py-4 font-medium">{row.amount}</td>
                  <td className="px-6 py-4">{row.date}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                      row.status === 'Paid' ? 'bg-emerald-100 text-emerald-700' :
                      row.status === 'Pending' ? 'bg-amber-100 text-amber-700' :
                      row.status === 'Partial' ? 'bg-blue-100 text-blue-700' :
                      'bg-rose-100 text-rose-700'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-slate-400 hover:text-blue-600">View</button>
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
