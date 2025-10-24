import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold text-gray-900">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700">Page Not Found</h2>
        <p className="text-gray-600">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/dashboard"
          className="inline-block mt-4 px-6 py-3 bg-[#06888C] text-white rounded-lg hover:bg-[#06888C]/90 transition-colors"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
