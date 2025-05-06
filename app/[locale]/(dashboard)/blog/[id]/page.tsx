import { Post } from "../page";
import AddComment from "@/app/[locale]/Components/AddComment";
import CommentSection from "@/app/[locale]/Components/CommentSection";

const BlogDetails = async ({ params }: { params: Promise<{ id: number }> }) => {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/posts/${id}`
  );
  const post: Post[] = await response.json();

  return (
    <div className="flex justify-center w-full">
      {post.map((post) => (
        <div
          key={post.id}
          className="p-6 bg-white rounded-lg shadow-md w-full max-lg:mx-[2%]"
        >
          <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
            <span>By User: {post.user_email}</span>
            {new Intl.DateTimeFormat("en-US", {
              timeZone: "Asia/Tbilisi",
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            }).format(new Date(post.created_at))}
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {post.title}
          </h1>

          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap w-full">
            {post.body}
          </p>
          <CommentSection postID={post.id} />
          <AddComment postID={post.id} />
        </div>
      ))}
    </div>
  );
};

export default BlogDetails;
