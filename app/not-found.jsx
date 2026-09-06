import Link from "next/link";

export const metadata = {
  title: "404 – Page Not Found | Manasvi Cabs",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-bold text-accent mb-4">404</h1>

      <h2 className="text-2xl font-semibold text-primary mb-2">
        Page Not Found
      </h2>

      <p className="text-muted max-w-md mb-6">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        href="/"
        className="px-6 py-3 bg-linear-to-r from-red-500 to-indigo-600 text-white font-semibold hover:opacity-90 transition"
      >
        Go Back Home
      </Link>
    </main>
  );
}