"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { createClient } from "@/utils/supabase/client";
import { useState } from "react";
import { useRouter } from "@/i18n/routing";




type FormFields = {
  comment: string;
};

const AddComment = ({ postID }: { postID: number }) => {
  const router = useRouter();
  const supabase = createClient();
  const { register, handleSubmit, reset } = useForm<FormFields>();
  const [message, setMessage] = useState<string | null>(null);

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      const userResponse = await supabase.auth.getUser();

      if (!userResponse.data.user) {
        setMessage("User not authenticated. Please log in.");
        return;
      }

      const userID = userResponse.data.user.id;

      const { error } = await supabase
        .from("comments")
        .insert({ body: data.comment, post_id: postID, user_id: userID });

      if (error) {
        setMessage(`Error: ${error.message}`);
        return;
      }

      setMessage("Comment added successfully!");
      reset(); // Reset the form after successful submission
      router.push(`/blog/${postID}`); // Redirect to the post page after adding comment
    } catch (err) {
      setMessage("An unexpected error occurred.");
      console.error(err);
    }

    setTimeout(() => {
      setMessage(null);
    }, 4000);
  };

  return (
    <div className="mt-6">
      <h4 className="text-lg font-semibold text-gray-800 mb-4">Add Comment</h4>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("comment", { required: "Comment cannot be empty" })}
          className="input input-bordered w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
          type="text"
          placeholder="Write your comment..."
        />
        <button
          type="submit"
          className="btn bg-indigo-600 text-white w-full py-2 rounded-lg"
        >
          Submit
        </button>
      </form>

      {/* Display messages */}
      {message && (
        <div className="mt-4 alert alert-info">
          <span>{message}</span>
        </div>
      )}
    </div>
  );
};

export default AddComment;
