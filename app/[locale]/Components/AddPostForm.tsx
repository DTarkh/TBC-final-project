"use client";

import { useRouter } from "@/i18n/routing";
import { createClient } from "@/utils/supabase/client";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Alert from "./Alert";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const AddPostSchema = z.object({
  title: z.string().min(3).max(100),
  body: z.string().min(10).max(3000),
});

type FormFields = z.infer<typeof AddPostSchema>;

const AddPostForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({ resolver: zodResolver(AddPostSchema) });

  const [message, setMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const supabase = createClient();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    const userResponse = await supabase.auth.getUser();

    if (!userResponse.data.user) {
      setErrorMessage("User not authenticated");

      setTimeout(() => {
        setErrorMessage(null);
      }, 2000);
      return;
    }

    const userId = userResponse.data.user.id;
    const userEmail = userResponse.data.user.email;

    console.log(data);
    const { data: table, error } = await supabase
      .from("posts")
      .insert({ title: data.title, body: data.body, user_id: userId, user_email:userEmail });
    setMessage("Seccessfully created");
    router.push("/blog");
    if (error) {
      throw new Error(error.message);
    }
    reset()
    setTimeout(() => {
      setMessage(null);
    }, 2000);
  };

  return (
    <div>
      

      <form
        className="mb-1 p-6 bg-white rounded-lg shadow-md min-w-[25vw]"
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
        {errors.title && (
          <div className="text-red-600">{errors.title.message}</div>
        )}

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
          {errors.body && (
            <div className="text-red-600">{errors.body.message}</div>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 text-white rounded-lg  transition duration-300 bg-orange-600"
          disabled={isSubmitting}
        >
          Submit
        </button>
      </form>
      {message && <Alert>{message}</Alert>}
      {errorMessage && (
        <div className="mt-4 alert alert-error">
          <span>{errorMessage}</span>
        </div>
      )}
    </div>
  );
};

export default AddPostForm;
