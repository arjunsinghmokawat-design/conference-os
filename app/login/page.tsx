import Link from "next/link";
import { Button } from "@/components/ui/button";

import { Mail, Lock, Eye } from "lucide-react";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6">

      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">

        {/* Heading */}

        <h1 className="text-4xl font-bold text-white">
          Welcome Back 👋
        </h1>

        <p className="mt-3 text-slate-400">
          Sign in to your ConferenceOS account.
        </p>

        {/* Login Form */}

        <form className="mt-8 space-y-5">

          {/* Email */}

          <div>

            <label className="mb-2 block text-sm font-medium text-slate-300">
              Email
            </label>

            <div className="relative">

              <Mail
                className="absolute left-3 top-3.5 text-slate-400"
                size={20}
              />

              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-slate-700 bg-slate-800 py-3 pl-10 pr-4 text-white outline-none transition-all focus:border-blue-500"
              />

            </div>

          </div>

          {/* Password */}

          <div>

            <label className="mb-2 block text-sm font-medium text-slate-300">
              Password
            </label>

            <div className="relative">

              <Lock
                className="absolute left-3 top-3.5 text-slate-400"
                size={20}
              />

              <input
                type="password"
                placeholder="********"
                className="w-full rounded-lg border border-slate-700 bg-slate-800 py-3 pl-10 pr-10 text-white outline-none transition-all focus:border-blue-500"
              />

              <Eye
                className="absolute right-3 top-3.5 cursor-pointer text-slate-400 hover:text-white"
                size={20}
              />

            </div>

          </div>

          {/* Forgot Password */}

          <div className="flex justify-end">

            <Link
              href="#"
              className="text-sm text-blue-400 hover:underline"
            >
              Forgot Password?
            </Link>

          </div>

          {/* Login */}

          <Button
            className="w-full py-6 text-base transition-all duration-300 hover:scale-[1.02]"
          >
            Login
          </Button>

        </form>

        {/* Divider */}

        <div className="my-6 flex items-center">

          <div className="h-px flex-1 bg-slate-700"></div>

          <span className="px-4 text-sm text-slate-400">
            OR
          </span>

          <div className="h-px flex-1 bg-slate-700"></div>

        </div>

        {/* Google */}

        <Button
          variant="outline"
          className="flex w-full items-center justify-center gap-3 border-slate-700 bg-slate-800 py-6 text-white transition hover:bg-slate-700"
        >
          <FcGoogle size={22} />

          Continue with Google
        </Button>

        {/* GitHub */}

        <Button
          variant="outline"
          className="mt-3 flex w-full items-center justify-center gap-3 border-slate-700 bg-slate-800 py-6 text-white transition hover:bg-slate-700"
        >
          <FaGithub size={20} />

          Continue with GitHub
        </Button>

        {/* Signup */}

        <p className="mt-8 text-center text-sm text-slate-400">

          Don't have an account?{" "}

          <Link
            href="/signup"
            className="font-semibold text-blue-400 hover:underline"
          >
            Create Account
          </Link>

        </p>

      </div>

    </main>
  );
}