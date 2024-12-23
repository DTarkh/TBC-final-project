// import { login, signup } from './actions'

// export default function LoginPage() {
//   return (
//     <form>
//       <label htmlFor="email">Email:</label>
//       <input id="email" name="email" type="email" required />
//       <label htmlFor="password">Password:</label>
//       <input id="password" name="password" type="password" required />
//       <button formAction={login}>Log in</button>
//       <button formAction={signup}>Sign up</button>
//     </form>
//   )
// }


import { FaEye } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { login, signup } from "./actions";
import Link from "next/link";

const LoginPage = () => {
 
    
  

  return (
    <>
      <form
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {/* Username Input */}
        <div className="mb-4 relative">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            id="email" name="email" type="email" 
            autoFocus
            className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-indigo-600"
          />
          <IoMdPerson className="absolute right-3 top-9 text-gray-500" />
        </div>

        {/* Password Input */}
        <div className="mb-6 relative">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            id="password" name="password" type="password" 
            className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-indigo-600"
          />
          <FaEye className="absolute right-3 top-9 text-gray-500" />
        </div>

        {/* Submit Button */}
        <button
          className="w-full bg-indigo-600 hover:bg-orange-500 text-white py-2 px-4 rounded-full transition duration-300"
          formAction={login}
        >
          Log in
        </button>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="text-indigo-600 hover:underline"
          >
            Register here
          </Link>
        </p>
      </form>
    </>
  );
}

export default LoginPage;