export default function TrustedBy() {
  const universities = [
    "BITS Pilani",
    "IIT Delhi",
    "IIT Bombay",
    "NIT Trichy",
    "IEEE",
  ];

  return (
    <section className="bg-slate-950 py-16 text-white">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <p className="text-gray-400 uppercase tracking-widest">
          Trusted By Leading Universities
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {universities.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-slate-800 bg-slate-900 px-8 py-4 text-lg font-semibold"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}