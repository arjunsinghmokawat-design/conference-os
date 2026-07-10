export default function DashboardPreview() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">

          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">
              Conference Dashboard
            </h2>

            <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-medium text-white">
              ● Live
            </span>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">

            <div className="rounded-xl bg-slate-800 p-5">
              <p className="text-slate-400">Registrations</p>
              <h3 className="mt-2 text-3xl font-bold text-white">1248</h3>
            </div>

            <div className="rounded-xl bg-slate-800 p-5">
              <p className="text-slate-400">Papers</p>
              <h3 className="mt-2 text-3xl font-bold text-white">532</h3>
            </div>

            <div className="rounded-xl bg-slate-800 p-5">
              <p className="text-slate-400">Reviewers</p>
              <h3 className="mt-2 text-3xl font-bold text-white">42</h3>
            </div>

            <div className="rounded-xl bg-slate-800 p-5">
              <p className="text-slate-400">Revenue</p>
              <h3 className="mt-2 text-3xl font-bold text-white">₹2.4L</h3>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}