import Link from "next/link";

export default function ChangePassword() {
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
                  lock_reset
                </span>
              </div>
              <h2 className="text-5xl font-bold text-white mb-4 leading-tight">
                Account Security
              </h2>
              <p className="text-gray-300 text-lg max-w-md">
                Update your credentials to maintain secure access to the enterprise portal.
              </p>
            </div>

            {/* Users */}
            <div className="flex items-center gap-4 mt-10 pt-6 border-t border-white/20">
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=1" alt="" />
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=2" alt="" />
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=3" alt="" />
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
              Change Password
            </h1>
            <p className="text-gray-500 text-lg">
              Update your Admin Portal access credentials
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

            {/* Old Password */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Current Password
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  lock
                </span>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full border border-gray-300 rounded-xl py-4 pl-12 pr-12 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* New Password */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                New Password
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  key
                </span>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full border border-gray-300 rounded-xl py-4 pl-12 pr-12 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Change Password Button */}
            <button
              type="submit"
              className="w-full bg-black hover:bg-gray-800 text-white py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
            >
              <span>Update Password</span>
              <span className="material-symbols-outlined">
                update
              </span>
            </button>
            
            <div className="text-center mt-4">
              <Link href="/admin/login" className="text-sm text-blue-600 hover:underline">
                Back to Login
              </Link>
            </div>
          </form>

          {/* Footer */}
          <div className="mt-12 text-center text-sm text-gray-400">
            <p>
              © 2024 SalesCore AI. All rights reserved.
            </p>
            <div className="mt-2 flex justify-center gap-3">
              <Link href="#" className="hover:text-blue-600">Privacy Policy</Link>
              <span>•</span>
              <Link href="#" className="hover:text-blue-600">Terms of Service</Link>
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
