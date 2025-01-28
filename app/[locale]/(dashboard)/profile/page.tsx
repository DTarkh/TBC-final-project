


"use client";

import Image from "next/image";
import useUsersS from "../../Components/Hooks/useUserS";
import { User } from "../../Components/Hooks/useUserS";
import useUser from "../../Components/Hooks/useUser";

const ProfilePage = () => {
  const { users, loading, error } = useUsersS();
  const loggedInUser = useUser()
  const currentUser = users?.filter(user => user.user_id === loggedInUser.user?.id)

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        Error loading user
      </div>
    );
  }

  if (!currentUser  || currentUser .length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        No user found
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, userId: string) => {
    e.preventDefault();
    console.log(`Form submitted for user: ${userId}`);
    // Handle form submission logic
  };

  return (
    <div className="w-full mt-10 p-5 px-[10%]">
      <h1 className="text-3xl font-bold text-center mb-6">User Profiles</h1>
      <div className="space-y-6">
        {currentUser?.map((user: User) => (
          <form
            key={user.user_id}
            onSubmit={(e) => handleSubmit(e, user.user_id)}
            className="w-full p-5 bg-white shadow-md rounded-lg flex gap-6"
          >
            <div className="w-[50%] flex flex-col items-center">
              <div>
                {user.image ? (
                  <Image
                    src={user.image}
                    alt={`${user.nickname}'s avatar`}
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                ) : (
                  <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                    No Image
                  </div>
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1 form-control">
                  Nickname:
                </label>
                <input
                  type="text"
                  defaultValue={user.nickname}
                  className="w-full p-2 border rounded input input-bordered"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1 form-control">
                Email verified:
                </label>
                <input
                  type="text"
                  defaultValue={user.email_verified ? "YES" : "NO" }
                  className="w-full p-2 border rounded input input-bordered"
                />
              </div>
            </div>

            <div className="w-[50%] flex flex-col gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-1 form-control">
                  Email:
                </label>
                <input
                  type="email"
                  value={user.email}
                  readOnly
                  className="w-full p-2 border rounded input input-bordered"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1 form-control">
                  First Name:
                </label>
                <input
                  type="text"
                  defaultValue={user.first_name}
                  className="w-full p-2 border rounded input input-bordered"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1 form-control">
                  Last Name:
                </label>
                <input
                  type="text"
                  defaultValue={user.last_name}
                  className="w-full p-2 border rounded input input-bordered"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1 form-control">
                  Shipping Address:
                </label>
                <input
                  type="text"
                  defaultValue={user.shipping_address}
                  className="w-full p-2 border rounded input input-bordered"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1 form-control">
                  user id:
                </label>
                <input
                  type="text"
                  defaultValue={user.user_id}
                  className="w-full p-2 border rounded input input-bordered"
                />
              </div>
              <button
                type="submit"
                className="mt-4 btn btn-primary py-2 px-4 rounded"
              >
                Save Changes
              </button>
            </div>
          </form>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;