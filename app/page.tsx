export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-slate-800">
        <h1 className="text-2xl font-bold text-blue-400">
          ConferenceOS
        </h1>

        <div className="flex gap-6">
          <a href="#" className="hover:text-blue-400">Features</a>
          <a href="#" className="hover:text-blue-400">Pricing</a>
          <a href="#" className="hover:text-blue-400">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 py-24 text-center">
        <h2 className="text-6xl font-bold leading-tight">
          AI Powered
          <br />
          Conference Management Platform
        </h2>

        <p className="mt-8 text-xl text-gray-300 max-w-3xl mx-auto">
          Create conference websites, accept paper submissions, manage
          registrations, collect payments and generate certificates —
          all from one platform.
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
    </main>
  );
}
