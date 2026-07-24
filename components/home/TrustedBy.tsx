export default function TrustedBy() {
  const organizations = [
    "IEEE",
    "BITS Pilani",
    "Springer",
    "Elsevier",
    "ACM",
    "Scopus",
  ];

  return (
    <section className="border-y bg-muted/30 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Trusted by Conferences Worldwide
          </p>

          <h2 className="mt-4 text-3xl font-bold text-foreground">
            Built for Modern Research Conferences
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {organizations.map((item) => (
            <div
              key={item}
              className="flex h-20 items-center justify-center rounded-xl border bg-card font-semibold shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-xl"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}