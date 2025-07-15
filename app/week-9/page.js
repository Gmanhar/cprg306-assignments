"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-6">
        Welcome to the Shopping List App
      </h1>

      {!user ? (
        <button
          onClick={handleLogin}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md font-semibold"
        >
          Login with GitHub
        </button>
      ) : (
        <div className="text-center space-y-4">
          <p className="text-xl">
            Welcome, {user.displayName} ({user.email})
          </p>

          <div className="space-x-4">
            <button
              onClick={handleLogout}
              className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md"
            >
              Logout
            </button>

            <Link
              href="/week-9/shopping-list"
              className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md"
            >
              Go to Shopping List
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
