import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <main className="w-full max-w-md px-6">
        <div className="mb-8 text-center">
          <h1 className="mb-4 font-bold text-4xl text-gray-900 dark:text-white">
            Better Auth Sample
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Secure authentication with Better Auth
          </p>
        </div>

        <div className="space-y-4 rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
          <Link
            href="/auth/login"
            className="block w-full rounded-md bg-blue-600 px-4 py-3 text-center font-medium text-white transition-colors hover:bg-blue-700"
          >
            Login
          </Link>
          <Link
            href="/auth/signup"
            className="block w-full rounded-md bg-gray-100 px-4 py-3 text-center font-medium text-gray-900 transition-colors hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
          >
            Sign Up
          </Link>
          <Link
            href="/dashboard"
            className="block w-full rounded-md border-2 border-gray-300 px-4 py-3 text-center font-medium text-gray-700 transition-colors hover:border-gray-400 dark:border-gray-600 dark:text-gray-300 dark:hover:border-gray-500"
          >
            Go to Dashboard
          </Link>
        </div>

        <div className="mt-8 text-center text-gray-600 text-sm dark:text-gray-400">
          <p>Features:</p>
          <ul className="mt-2 space-y-1">
            <li>✓ Email/Password Authentication</li>
            <li>✓ GitHub OAuth</li>
            <li>✓ Two-Factor Authentication</li>
            <li>✓ Passkey Support</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
