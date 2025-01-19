import { Link } from "@/i18n/routing";
import AddPostForm from "../../Components/AddPostForm";

export interface Post {
  title: string;
  body: string;
  created_at: Date;
  user_id: number;
  id: number;
}

const BlogPost = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`);
  const posts: Post[] = await data.json();

  const reversedPosts = posts.reverse();

  return (
    <div>
      <AddPostForm />
      {reversedPosts.map((post) => (
        <div
          key={post.id}
          className="max-w-2xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md"
        >
          <Link href={`/blog/${post.id}`}>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              {post.title}
            </h1>
          </Link>

          <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
            <span>By User: {post.user_id}</span>
            <span>{new Date(post.created_at).toLocaleDateString()}</span>
          </div>

          <p className="text-gray-700 leading-relaxed">{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPost;
