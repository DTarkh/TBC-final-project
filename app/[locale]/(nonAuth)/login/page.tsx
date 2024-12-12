"use client";

import { useRouter } from "@/i18n/routing";
import { FormEvent, useState } from "react";
import { FaEye } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";

const LoginPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    const response = await fetch('http://127.0.0.1:8000/api/user/login/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({"username": username, "password": password}),
    });

    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("token", data.access);
      router.push('/home');
    } else {
      alert(data.error || 'Login failed');
    }



    
  };

  return (
    <>
      <form
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {/* Username Input */}
        <div className="mb-4 relative">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
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
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-indigo-600"
          />
          <FaEye className="absolute right-3 top-9 text-gray-500" />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-orange-500 text-white py-2 px-4 rounded-full transition duration-300"
        >
          Log in
        </button>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <a
            href="/auth/register"
            className="text-indigo-600 hover:underline"
          >
            Register here
          </a>
        </p>
      </form>
    </>
  );
};

export default LoginPage;