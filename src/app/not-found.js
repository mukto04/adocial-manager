import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-md">
        <span className="text-6xl font-black text-blue-600">404</span>
        <h1 className="text-2xl font-bold text-slate-900 mt-4">Page Not Found</h1>
        <p className="text-slate-500 text-sm mt-2 mb-6">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-blue-600 text-white font-semibold text-xs transition-colors shadow-soft-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Homepage
        </Link>
      </div>
    </div>
  );
}

