import Link from "next/link";

export default function AdminLogin() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0f172a] p-6">

      {/* Main Card */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-6xl bg-white rounded-2xl overflow-hidden shadow-2xl">

        {/* Left Side */}
        <div className="hidden lg:block relative min-h-[700px]">

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 z-10 flex flex-col justify-end p-10">

            <div>
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-white text-3xl">
                  shield_person
                </span>
              </div>

              <h2 className="text-5xl font-bold text-white mb-4 leading-tight">
                Secure Enterprise Access
              </h2>

              <p className="text-gray-300 text-lg max-w-md">
                Advanced sales intelligence and workspace
                management for the modern enterprise
                professional.
              </p>
            </div>

            {/* Users */}
            <div className="flex items-center gap-4 mt-10 pt-6 border-t border-white/20">

              <div className="flex -space-x-3">
                <img
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src="https://i.pravatar.cc/100?img=1"
                  alt=""
                />

                <img
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src="https://i.pravatar.cc/100?img=2"
                  alt=""
                />

                <img
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src="https://i.pravatar.cc/100?img=3"
                  alt=""
                />
              </div>

              <p className="text-gray-300 text-sm">
                Trusted by 500+ global enterprises
              </p>
            </div>
          </div>

          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop"
            alt="building"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Right Side */}
        <div className="p-10 flex flex-col justify-center">

          {/* Logo */}
          <div className="mb-10">

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-white">
                  trending_up
                </span>
              </div>

              <span className="text-3xl font-bold text-gray-900">
                SalesCore
              </span>
            </div>

            <h1 className="text-5xl font-bold text-gray-900 mb-2">
              Welcome Back
            </h1>

            <p className="text-gray-500 text-lg">
              Admin Portal Access
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6">

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Email Address
              </label>

              <div className="relative">

                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  mail
                </span>

                <input
                  type="email"
                  placeholder="admin@salescore.ai"
                  className="w-full border border-gray-300 rounded-xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Password */}
            <div>

              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-gray-700">
                  Password
                </label>

                <Link
                  href="#"
                  className="text-sm text-blue-600 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              <div className="relative">

                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  lock
                </span>

                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full border border-gray-300 rounded-xl py-4 pl-12 pr-12 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer">
                  visibility
                </span>
              </div>
            </div>

            {/* Remember */}
            <div className="flex items-center gap-2">
              <input type="checkbox" />

              <label className="text-sm text-gray-600">
                Remember Me
              </label>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-black hover:bg-gray-800 text-white py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
            >
              <span>Sign In</span>

              <span className="material-symbols-outlined">
                login
              </span>
            </button>
          </form>

          {/* Divider */}
          <div className="mt-8">

            <div className="relative flex items-center justify-center mb-6">

              <div className="absolute w-full border-t border-gray-200"></div>

              <span className="relative bg-white px-4 text-sm text-gray-400">
                OR CONTINUE WITH
              </span>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-4">

              <button className="border border-gray-300 rounded-xl py-3 flex items-center justify-center gap-2 hover:bg-gray-50 transition-all">

                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>

                <span className="text-sm font-medium">
                  Google
                </span>
              </button>

              <button className="border border-gray-300 rounded-xl py-3 flex items-center justify-center gap-2 hover:bg-gray-50 transition-all">

                <span className="material-symbols-outlined text-blue-600">
                  key
                </span>

                <span className="text-sm font-medium">
                  SSO
                </span>
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 text-center text-sm text-gray-400">
            <p>
              © 2024 SalesCore AI. All rights reserved.
            </p>

            <div className="mt-2 flex justify-center gap-3">
              <Link href="#" className="hover:text-blue-600">
                Privacy Policy
              </Link>

              <span>•</span>

              <Link href="#" className="hover:text-blue-600">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Security Badge */}
      <div className="fixed bottom-6 right-6 bg-white shadow-xl rounded-2xl px-5 py-4 flex items-center gap-4 border border-gray-200">

        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">

          <span className="material-symbols-outlined text-blue-600">
            verified_user
          </span>
        </div>

        <div>
          <p className="font-semibold text-gray-800">
            End-to-End Encrypted
          </p>

          <p className="text-xs text-gray-500 uppercase tracking-wide">
            AES-256 Bit Security
          </p>
        </div>
      </div>
    </main>
  );
}