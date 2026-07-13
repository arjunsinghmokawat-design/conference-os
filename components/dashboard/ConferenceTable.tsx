import { Eye, Pencil } from "lucide-react";

const conferences = [
  {
    name: "IEEE DELCON 2027",
    status: "Active",
    papers: 320,
    participants: 1248,
    revenue: "₹4.2L",
  },
  {
    name: "AI Summit India",
    status: "Review",
    papers: 210,
    participants: 850,
    revenue: "₹2.1L",
  },
  {
    name: "Smart Cities Conf.",
    status: "Closed",
    papers: 480,
    participants: 1520,
    revenue: "₹7.8L",
  },
  {
    name: "ICML Workshop",
    status: "Draft",
    papers: 95,
    participants: 340,
    revenue: "₹0.9L",
  },
];

const badge = (status: string) => {
  switch (status) {
    case "Active":
      return "bg-green-500/20 text-green-400";
    case "Review":
      return "bg-yellow-500/20 text-yellow-400";
    case "Closed":
      return "bg-red-500/20 text-red-400";
    default:
      return "bg-blue-500/20 text-blue-400";
  }
};

export default function ConferenceTable() {
  return (
    <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">
          Recent Conferences
        </h2>

        <button className="rounded-lg bg-blue-600 px-4 py-2 hover:bg-blue-700">
          + New Conference
        </button>
      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="border-b border-slate-700">

            <tr className="text-left text-slate-400">

              <th className="pb-4">Conference</th>
              <th className="pb-4">Status</th>
              <th className="pb-4">Papers</th>
              <th className="pb-4">Participants</th>
              <th className="pb-4">Revenue</th>
              <th className="pb-4 text-center">Actions</th>

            </tr>

          </thead>

          <tbody>

            {conferences.map((conf) => (

              <tr
                key={conf.name}
                className="border-b border-slate-800 hover:bg-slate-800"
              >

                <td className="py-5 font-semibold">
                  {conf.name}
                </td>

                <td>

                  <span
                    className={`rounded-full px-3 py-1 text-sm ${badge(
                      conf.status
                    )}`}
                  >
                    {conf.status}
                  </span>

                </td>

                <td>{conf.papers}</td>

                <td>{conf.participants}</td>

                <td>{conf.revenue}</td>

                <td>

                  <div className="flex justify-center gap-3">

                    <button className="rounded-lg bg-slate-800 p-2 hover:bg-blue-600">
                      <Eye size={18} />
                    </button>

                    <button className="rounded-lg bg-slate-800 p-2 hover:bg-green-600">
                      <Pencil size={18} />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}