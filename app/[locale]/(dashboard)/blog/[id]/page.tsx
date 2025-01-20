

import { useForm } from "react-hook-form";
import { Post } from "../page";
import AddComment from "@/app/[locale]/Components/AddComment";

interface Comment {
  id: number;
  post_id: number;
  body: string;
  created_at: Date;
  user_id: number;
}

const BlogDetails = async ({ params }: { params: Promise<{ id: number }> }) => {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/posts/${id}`
  );
  const post: Post[] = await response.json();

  const postsResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/posts/comments`
  );
  const comments: Comment[] = await postsResponse.json();

  return (
    <div>
      {post.map((post) => (
        <div
          key={post.id}
          className="max-w-2xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md"
        >
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {post.title}
          </h1>

          <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
            <span>By User: {post.user_id}</span>
            <span>{new Date(post.created_at).toLocaleDateString()}</span>
          </div>

          <p className="text-gray-700 leading-relaxed">{post.body}</p>
          <CommentSection comments={comments} postID={post.id} />
          <AddComment postID={post.id}/>
        </div>
      ))}
    </div>
  );
};

export default BlogDetails;


interface CommentSectionProps {
  comments: Comment[];
  postID: number;
}

const CommentSection = ({ comments, postID }: CommentSectionProps) => {
  return (
    <div>
      {comments
        .filter((comment) => comment.post_id === postID) // Filter by post_id
        .map((comment) => (
          <div
            key={comment.id}
            className="border-t border-gray-300 pt-2 mt-2 text-gray-700"
          >
            <p>{comment.body}</p>
            <p className="text-sm text-gray-500">
              By User: {comment.user_id} on{" "}
              {new Date(comment.created_at).toLocaleDateString()}
            </p>
          </div>
        ))}
    </div>
  );
};
