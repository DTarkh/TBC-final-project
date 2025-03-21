import { FaEye } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { login, signinWithGithub } from "@/app/SupabaseActions/actions";
import { Link } from "@/i18n/routing";
import { VscGithubInverted } from "react-icons/vsc";

const LoginPage = () => {
  return (
    <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>

      {/* Email/Password Login Form */}
      <form action={login} className="mb-4">
        <div className="mb-4 relative">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoFocus
            className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-indigo-600"
          />
          <IoMdPerson className="absolute right-3 top-9 text-gray-500" />
        </div>

        <div className="mb-6 relative">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-indigo-600"
          />
          <FaEye className="absolute right-3 top-9 text-gray-500" />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-orange-500 text-white py-2 px-4 rounded-full transition duration-300"
        >
          Submit
        </button>
      </form>

      {/* GitHub Login Form */}
      <form action={signinWithGithub} className="mb-4">
        <button
          type="submit"
          className="w-full bg-black hover:bg-orange-500 text-white py-2 px-4 rounded-full transition duration-300 flex items-center justify-center gap-2"
        >
          <VscGithubInverted />
          Sign in with GitHub
        </button>
      </form>
      <div className="flex justify-center">

        <Link href="/home" className="hover:underline text-xl">Continue without sign-in</Link>
      </div>
      

      {/* Sign Up Link */}
      <div className="flex items-center gap-1 mt-3 justify-center">
        <p className="text-center text-sm text-gray-600">
          Don&apos;t have an account?
        </p>
        <Link href="/sign-up" className="text-indigo-600 hover:underline">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
