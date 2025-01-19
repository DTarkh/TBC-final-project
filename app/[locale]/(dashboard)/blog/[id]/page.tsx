import { Link } from "@/i18n/routing";
import { Post } from "../page";


interface Comment{
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
  const comments:Comment[]  = await postsResponse.json();

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
          <div>
            {comments.map((comment) => (
              <p key={comment.id}>{comment.body}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogDetails;
