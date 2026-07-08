export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 border-b border-slate-800 bg-slate-950 text-white">
      <h1 className="text-2xl font-bold text-blue-400">
        ConferenceOS
      </h1>

      <div className="hidden md:flex gap-8">
        <a href="#" className="hover:text-blue-400 transition">
          Features
        </a>

        <a href="#" className="hover:text-blue-400 transition">
          Pricing
        </a>

        <a href="#" className="hover:text-blue-400 transition">
          Contact
        </a>
      </div>
    </nav>
  );
}