"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { FaEye } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";

const RegisterPage = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/user/register/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Registration successful');
      } else {
        alert(data.error || 'Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <form
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

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
           
            onChange={handleInputChange}
            autoFocus
            className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-indigo-600"
          />
          <IoMdPerson className="absolute right-3 top-9 text-gray-500" />
        </div>

        {/* Email Input */}
        <div className="mb-6 relative">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
        
            onChange={handleInputChange}
            className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-indigo-600"
          />
          <FaEye className="absolute right-3 top-9 text-gray-500" />
        </div>

        <div className="mb-6 relative">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Repeat Password
          </label>
          <input
            type="password"
            id="password"
       
            onChange={handleInputChange}
            className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-indigo-600"
          />
          <FaEye className="absolute right-3 top-9 text-gray-500" />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-orange-500 text-white py-2 px-4 rounded-full transition duration-300"
        >
          Register
        </button>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a
            href="/auth/register"
            className="text-indigo-600 hover:underline"
          >
            Login here
          </a>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;