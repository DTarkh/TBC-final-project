"use client";

import useUser from "../../Components/Hooks/useUser";
import Image from "next/image";

const ProfilePage = () => {
  const { user, loading } = useUser();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        No user found
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col items-center">
        {user.user_metadata.avatar_url && (
          <Image
            src={user.user_metadata.avatar_url}
            alt={`${user.user_metadata.full_name}'s avatar`}
            width={150}
            height={150}
            className="rounded-full"
          />
        )}
        <h1 className="text-2xl font-bold mt-4">
          {user.user_metadata.full_name}
        </h1>
        {user.user_metadata.user_name && (
          <p className="text-gray-600">@{user.user_metadata.user_name}</p>
        )}
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Account Details</h2>
        <ul className="space-y-2">
          <li>
            <strong>Email:</strong> {user.email}
          </li>
          <li>
            <strong>Email Verified:</strong>{" "}
            {user.user_metadata.email_verified ? "Yes" : "No"}
          </li>
          <li>
            <strong>User ID:</strong> {user.id}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;
