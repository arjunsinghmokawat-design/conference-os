export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24 text-center text-white">
      <h1 className="text-6xl font-extrabold leading-tight">
        AI Powered
        <br />
        Conference Management Platform
      </h1>

      <p className="mt-8 text-xl text-gray-300 max-w-3xl mx-auto">
        Create conference websites, accept paper submissions,
        manage registrations, collect payments and generate
        certificates — all from one platform.
      </p>

      <div className="mt-10 flex justify-center gap-4">
        <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700">
          Get Started
        </button>

        <button className="rounded-lg border border-gray-600 px-6 py-3 hover:bg-slate-800">
          Book Demo
        </button>
      </div>
    </section>
  );
}