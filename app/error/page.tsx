import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <form className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Error</h2>

        <p className="text-center">Incorrect Password or Email</p>
        <div className="flex items-center gap-1 mt-3 justify-center">
          <p className="text-center text-sm text-gray-600">Try again to</p>

          <Link href="en/sign-in" className="text-indigo-600 hover:underline">
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
}
