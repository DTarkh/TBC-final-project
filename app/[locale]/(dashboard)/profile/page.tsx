"use client";

import Image from "next/image";
import useUsersS from "../../Components/Hooks/useUserS";
import { User } from "../../Components/Hooks/useUserS";
import useUser from "../../Components/Hooks/useUser";
import { createClient } from "@/utils/supabase/client";
import { useState } from "react";
import { GoPerson } from "react-icons/go";
import Alert from "../../Components/Alert";
import Header from "../../Components/Header";
const ProfilePage = () => {
  const supabase = createClient();
  const { users, loading, error } = useUsersS();
  const loggedInUser = useUser();
  const currentUser = users?.filter(
    (user) => user.user_id === loggedInUser.user?.id
  );

  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [newNickname, setNewNickname] = useState<string | null>(null);
  const [newFirstname, setNewFirstname] = useState<string | null>(null);
  const [newLastname, setNewLastname] = useState<string | null>(null);
  const [newAddress, setNewAddress] = useState<string | null>(null);
  const [newPhone, setNewPhone] = useState<number | null>(null);
  const [dateOfBirth, setDateOfBirth] = useState<string | null>(null);

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
      nickname?: string;
      first_name?: string;
      last_name?: string;
      shipping_address?: string;
      phone?: number;
      date_of_birth?: Date;
    };
    const updates: UserUpdate = {};
    if (newNickname !== null) updates.nickname = newNickname;
    if (newFirstname !== null) updates.first_name = newFirstname;
    if (newLastname !== null) updates.last_name = newLastname;
    if (newAddress !== null) updates.shipping_address = newAddress;
    if (newPhone !== null) updates.phone = newPhone;
    if (dateOfBirth !== null) updates.date_of_birth = new Date(dateOfBirth);

    // Perform the update operation only if there are fields to update
    if (Object.keys(updates).length === 0) {
      setErrorMessage("No fields were updated.");

      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
      return;
    }

    const { error } = await supabase
      .from("user")
      .update(updates)
      .eq("user_id", userId);

    if (error) {
      console.error("Error updating user information:", error.message);
      setErrorMessage("Error updating user information");

      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
      return;
    } else {
      setMessage("User information updated successfully!");

      setTimeout(() => {
        setMessage("");
      }, 2000);
    }
  };

  return (
    <>
      <Header subHeader={"Profile Page"}>My Profile</Header>
      <div className="w-full mt-10 p-5">
        {currentUser?.map((user: User) => (
          <form
            key={user.user_id}
            onSubmit={(e) => handleSubmit(e, user.user_id)}
            className="p-5 bg-white shadow-md rounded-lg flex flex-col md:flex-row gap-6"
          >
            <div className="md:w-1/2 flex flex-col items-center gap-4">
              <div className="form-control w-full items-center my-[36px] h-[100px]">
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
                    <GoPerson className="text-4xl mx-2 text-[#14213D]  outline-none hover:scale-110 transition-transform" />
                  </div>
                )}
              </div>
              <div className="form-control w-full">
                <label
                  className="block text-gray-700 font-semibold mb-1"
                  htmlFor="nickname"
                >
                  Nickname:
                </label>
                <input
                  id="nickname"
                  type="text"
                  defaultValue={user.nickname}
                  minLength={3}
                  maxLength={20}
                  className="w-full p-2 border rounded input input-bordered border-[#14213D] text-[#14213D]"
                  onChange={(e) => setNewNickname(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between bg-gray-50 py-[10px] px-3 rounded-md shadow-sm w-full my-[28px] max-md:my-[5px] ">
                <span className="font-medium text-gray-600">
                  ✉️ Email Verification
                </span>
                <span
                  className={`px-4 py-1 rounded-full text-sm font-semibold text-white ${
                    user.email_verified ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {user.email_verified ? "Verified" : "Unverified"}
                </span>
              </div>
              <div className="flex items-center justify-between bg-gray-50 py-[10px] px-3 rounded-md shadow-sm w-full">
                <span className="font-medium text-gray-600">
                  🎟 Subscription Status
                </span>
                <span
                  className={`px-4 py-1 rounded-full text-sm font-semibold text-white ${
                    user.issubscribed ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {user.issubscribed ? "Active" : "Inactive"}
                </span>
              </div>
              <div className="form-control w-full mb-1">
                <label
                  className="block text-gray-700 font-semibold mb-1"
                  htmlFor="date"
                >
                  Date of Birth:
                </label>
                <input
                  type="date"
                  id="date"
                  defaultValue={user.date_of_birth}
                  className="w-full p-2 border rounded input input-bordered border-[#14213D] text-[#14213D]"
                  onChange={(e) => setDateOfBirth(e.target.value)}
                />
              </div>
              {errorMessage && (
                <div className="alert alert-error">
                  <span>{errorMessage}</span>
                </div>
              )}
              {message && <Alert className="alert-success">{message}</Alert>}
            </div>

            <div className="md:w-1/2 flex flex-col gap-4">
              <div className="form-control w-full">
                <label
                  className="block text-gray-700 font-semibold mb-1"
                  htmlFor="email"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  value={user.email}
                  readOnly
                  className="w-full p-2 border rounded input input-bordered border-[#14213D] text-[#14213D]"
                />
              </div>
              <div className="form-control w-full mb-1">
                <label
                  className="block text-gray-700 font-semibold mb-1"
                  htmlFor="number"
                >
                  Phone:
                </label>
                <input
                  type="text"
                  id="number"
                  defaultValue={user.phone}
                  className="w-full p-2 border rounded input input-bordered border-[#14213D] text-[#14213D]"
                  onChange={(e) => setNewPhone(Number(e.target.value))}
                />
              </div>
              <div className="form-control w-full">
                <label
                  className="block text-gray-700 font-semibold mb-1"
                  htmlFor="firstName"
                >
                  First Name:
                </label>
                <input
                  type="text"
                  id="firstName"
                  defaultValue={user.first_name}
                  minLength={3}
                  maxLength={20}
                  className="w-full p-2 border rounded input input-bordered border-[#14213D] text-[#14213D]"
                  onChange={(e) => setNewFirstname(e.target.value)}
                />
              </div>
              <div className="form-control w-full">
                <label
                  className="block text-gray-700 font-semibold mb-1"
                  htmlFor="lastName"
                >
                  Last Name:
                </label>
                <input
                  type="text"
                  id="lastName"
                  defaultValue={user.last_name}
                  minLength={3}
                  maxLength={20}
                  className="w-full p-2 border rounded input input-bordered border-[#14213D] text-[#14213D]"
                  onChange={(e) => setNewLastname(e.target.value)}
                />
              </div>
              <div className="form-control w-full">
                <label
                  className="block text-gray-700 font-semibold mb-1"
                  htmlFor="address"
                >
                  Shipping Address:
                </label>
                <input
                  id="address"
                  type="text"
                  defaultValue={user.shipping_address}
                  minLength={3}
                  maxLength={60}
                  className="w-full p-2 border rounded input input-bordered border-[#14213D] text-[#14213D]"
                  onChange={(e) => setNewAddress(e.target.value)}
                />
              </div>
              <div className="form-control w-full">
                <label
                  className="block text-gray-700 font-semibold mb-1"
                  htmlFor="userId"
                >
                  User ID:
                </label>
                <input
                  id="userId"
                  type="text"
                  defaultValue={user.user_id}
                  className="w-full p-2 border rounded input input-bordered border-[#14213D] text-[#14213D]"
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
    </>
  );
};

export default ProfilePage;
