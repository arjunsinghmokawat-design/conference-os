export default function Analytics() {
  const months = [
    35, 55, 42, 70, 48, 85,
    62, 78, 58, 96, 72, 88,
  ];

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-xl font-bold text-white">
            Registration Analytics
          </h2>

          <p className="text-sm text-slate-400">
            Last 12 Months
          </p>
        </div>

        <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
          +18%
        </span>

      </div>

      <div className="mt-8 flex h-64 items-end justify-between gap-2">

        {months.map((value, index) => (
          <div
            key={index}
            className="flex-1 rounded-t-xl bg-gradient-to-t from-blue-600 to-cyan-400 transition-all duration-300 hover:opacity-80"
            style={{
              height: `${value}%`,
            }}
          />
        ))}

      </div>

    </div>
  );
}