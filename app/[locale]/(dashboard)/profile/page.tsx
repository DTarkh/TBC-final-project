"use client";

import Image from "next/image";
import useUsersS from "../../Components/Hooks/useUserS";
import { User } from "../../Components/Hooks/useUserS";
import useUser from "../../Components/Hooks/useUser";
import { createClient } from "@/utils/supabase/client";
import { useState } from "react";

const ProfilePage = () => {
  const supabase = createClient();
  const { users, loading, error } = useUsersS();
  const loggedInUser = useUser();
  const currentUser = users?.filter(
    (user) => user.user_id === loggedInUser.user?.id
  );
  
  const [newNickname, setNewNickname] = useState("");
  const [newFirstname, setNewFirstname] = useState("");
  const [newLastname, setNewLastname] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [newPhone, setNewPhone] = useState<number | undefined>();

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

  if (!currentUser || currentUser.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        No user found
      </div>
    );
  }

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    userId: string
  ) => {
    e.preventDefault();

    type UserUpdate = {
      nickname?: string,
      first_name?: string,
      last_name?: string,
      shipping_address?: string,
      phone?: number,
    };
    const updates: UserUpdate = {};
    if (newNickname) updates.nickname = newNickname;
    if (newFirstname) updates.first_name = newFirstname;
    if (newLastname) updates.last_name = newLastname;
    if (newAddress) updates.shipping_address = newAddress;
    if (newPhone) updates.phone = newPhone;

  

    const { error } = await supabase
      .from("user")
      .update(updates)
      .eq("user_id", userId);

    if (error) {
      console.error("Error updating user information:", error.message);
      alert("Error updating user information");
      return;
    } else {
      alert("User information updated successfully!");
    }
  };

  return (
    <div className="w-full mt-10 p-5 px-[10%] max-lg:px-[2%]">
      {currentUser?.map((user: User) => (
        <form
          key={user.user_id}
          onSubmit={(e) => handleSubmit(e, user.user_id)}
          className="p-5 bg-white shadow-md rounded-lg flex flex-col md:flex-row gap-6"
        >
          <div className="md:w-1/2 flex flex-col items-center gap-4">
            <div className="form-control w-full items-center">
              {user.image ? (
                <Image
                  src={user.image}
                  alt={`${user.nickname}'s avatar`}
                  width={100}
                  height={100}
                  className="rounded-md"
                />
              ) : (
                <div className="w-24 h-24 bg-gray-200 rounded-md flex items-center justify-center">
                  No Image
                </div>
              )}
            </div>
            <div className="form-control w-full mb-1">
              <label className="block text-gray-700 font-semibold mb-1">
                Nickname:
              </label>
              <input
                type="text"
                placeholder={user.nickname}
                className="w-full p-2 border rounded input input-bordered"
                onChange={(e) => setNewNickname(e.target.value)}
              />
            </div>
            <div className="form-control w-full mb-1">
              <label className="block text-gray-700 font-semibold mb-1">
                Email verified:
              </label>
              <input
                type="text"
                defaultValue={user.email_verified ? "YES" : "NO"}
                className="w-full p-2 border rounded input input-bordered"
                readOnly
              />
              
            </div>
            <div className="form-control w-full mb-1">
              <label className="block text-gray-700 font-semibold mb-1">
                Subscription:
              </label>
              <input
                type="text"
                defaultValue={user.issubscribed? "YES" : "NO"}
                className="w-full p-2 border rounded input input-bordered"
                readOnly
              />
              
            </div>
            <div className="form-control w-full mb-1">
              <label className="block text-gray-700 font-semibold mb-1">
                Phone:
              </label>
              <input
                type="text"
                defaultValue={user.phone}
                className="w-full p-2 border rounded input input-bordered"
                onChange={(e) => setNewPhone(Number(e.target.value))}
              />
            </div>
          </div>

          <div className="md:w-1/2 flex flex-col gap-4">
            <div className="form-control w-full">
              <label className="block text-gray-700 font-semibold mb-1">
                Email:
              </label>
              <input
                type="email"
                value={user.email}
                readOnly
                className="w-full p-2 border rounded input input-bordered"
              />
            </div>
            <div className="form-control w-full">
              <label className="block text-gray-700 font-semibold mb-1">
                First Name:
              </label>
              <input
                type="text"
                defaultValue={user.first_name}
                className="w-full p-2 border rounded input input-bordered"
                onChange={(e) => setNewFirstname(e.target.value)}
              />
            </div>
            <div className="form-control w-full">
              <label className="block text-gray-700 font-semibold mb-1">
                Last Name:
              </label>
              <input
                type="text"
                defaultValue={user.last_name}
                className="w-full p-2 border rounded input input-bordered"
                onChange={(e) => setNewLastname(e.target.value)}
              />
            </div>
            <div className="form-control w-full">
              <label className="block text-gray-700 font-semibold mb-1">
                Shipping Address:
              </label>
              <input
                type="text"
                defaultValue={user.shipping_address}
                className="w-full p-2 border rounded input input-bordered"
                onChange={(e) => setNewAddress(e.target.value)}
              />
            </div>
            <div className="form-control w-full">
              <label className="block text-gray-700 font-semibold mb-1">
                User ID:
              </label>
              <input
                type="text"
                defaultValue={user.user_id}
                className="w-full p-2 border rounded input input-bordered"
                readOnly
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
  );
};

export default ProfilePage;