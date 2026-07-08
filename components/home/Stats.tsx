export default function Stats() {
  const stats = [
    {
      number: "100+",
      title: "Conferences",
    },
    {
      number: "10K+",
      title: "Participants",
    },
    {
      number: "500+",
      title: "Research Papers",
    },
    {
      number: "99.9%",
      title: "Uptime",
    },
  ];

  return (
    <section className="bg-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-slate-700 bg-slate-800 p-8 text-center"
          >
            <h2 className="text-4xl font-bold text-blue-400">
              {item.number}
            </h2>

            <p className="mt-2 text-gray-300">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}