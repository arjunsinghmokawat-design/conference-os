import { Bell, Search } from "lucide-react";

export default function Topbar() {
  return (
    <header className="mb-8 flex items-center justify-between">

      {/* Search */}

      <div className="relative w-full max-w-md">

        <Search
          className="absolute left-3 top-3 text-slate-400"
          size={20}
        />

        <input
          type="text"
          placeholder="Search conferences..."
          className="w-full rounded-xl border border-slate-700 bg-slate-900 py-3 pl-10 pr-4 text-white outline-none focus:border-blue-500"
        />

      </div>

      {/* Right Side */}

      <div className="ml-6 flex items-center gap-5">

        <button className="rounded-xl bg-slate-900 p-3 hover:bg-slate-800">
          <Bell size={20} />
        </button>

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 font-bold">
            A
          </div>

          <div>

            <p className="font-semibold">
              Arjun Singh
            </p>

            <p className="text-sm text-slate-400">
              Administrator
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}