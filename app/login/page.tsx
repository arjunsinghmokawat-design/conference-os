"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";

import {
  Mail,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid email or password.");
        return;
      }

      router.push("/dashboard");
      router.refresh();
    } catch (err) {
      console.error(err);
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">

        <h1 className="text-4xl font-bold text-white">
          Welcome Back 👋
        </h1>

        <p className="mt-3 text-slate-400">
          Sign in to your ConferenceOS account.
        </p>

        <form
          onSubmit={handleLogin}
          className="mt-8 space-y-5"
        >
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                type={showPassword ? "text" : "password"}
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-800 py-3 pl-10 pr-10 text-white outline-none transition-all focus:border-blue-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5"
              >
                {showPassword ? (
                  <EyeOff
                    size={20}
                    className="text-slate-400 hover:text-white"
                  />
                ) : (
                  <Eye
                    size={20}
                    className="text-slate-400 hover:text-white"
                  />
                )}
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <Link
              href="#"
              className="text-sm text-blue-400 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {error && (
            <div className="rounded-lg bg-red-500/20 p-3 text-sm text-red-400">
              {error}
            </div>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="w-full py-6 text-base transition-all duration-300 hover:scale-[1.02]"
          >
            {loading ? "Signing In..." : "Login"}
          </Button>
        </form>

        <div className="my-6 flex items-center">
          <div className="h-px flex-1 bg-slate-700"></div>
          <span className="px-4 text-sm text-slate-400">
            OR
          </span>
          <div className="h-px flex-1 bg-slate-700"></div>
        </div>

        <Button
          type="button"
          variant="outline"
          className="flex w-full items-center justify-center gap-3 border-slate-700 bg-slate-800 py-6 text-white transition hover:bg-slate-700"
        >
          <FcGoogle size={22} />
          Continue with Google
        </Button>

        <Button
          type="button"
          variant="outline"
          className="mt-3 flex w-full items-center justify-center gap-3 border-slate-700 bg-slate-800 py-6 text-white transition hover:bg-slate-700"
        >
          <FaGithub size={20} />
          Continue with GitHub
        </Button>

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