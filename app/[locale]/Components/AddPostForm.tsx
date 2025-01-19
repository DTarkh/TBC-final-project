"use client";

import { useRouter } from "@/i18n/routing";
import { createClient } from "@/utils/supabase/client";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Alert from "./Alert";

type FormFields = {
  title: string;
  body: string;
};
const AddPostForm = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<FormFields>();
  const [showAlert, setShowAlert] = useState(false);
  const supabase = createClient();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    const userResponse = await supabase.auth.getUser();

    if (!userResponse.data.user) {
      console.error("User not authenticated");
      return;
    }
    const userId = userResponse.data.user.id;

    console.log(data);
    const { data: table, error } = await supabase
      .from("posts")
      .insert({ title: data.title, body: data.body, user_id: userId });
    setShowAlert(true);
    router.push("/blog");
    if (error) {
      throw new Error(error.message);
    }

    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  return (
    <div>
      {showAlert && <Alert />}

      <form
        className="mb-8 p-6 bg-white rounded-lg shadow-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New Post</h2>

        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            {...register("title")}
            id="title"
            name="title"
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="body"
            className="block text-sm font-medium text-gray-700"
          >
            Body
          </label>
          <textarea
            {...register("body")}
            id="body"
            name="body"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 text-white rounded-lg  transition duration-300 bg-orange-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPostForm;
