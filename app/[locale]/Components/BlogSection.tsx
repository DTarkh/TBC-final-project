import { Link } from "@/i18n/routing";
import { Post } from "../(dashboard)/blog/page";

const BlogSection = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`);
  const posts: Post[] = await data.json();

  const reversedPosts = posts.reverse();
  const latestPosts = reversedPosts.slice(0, 4);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 px-[10%] max-lg:px-[2%] py-3 gap-2">
      {latestPosts.map((post) => (
        <div key={post.id} className="p-6 bg-white rounded-lg shadow-md">
          <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
            <span>By User: {post.user_id}</span>
            <span>{new Date(post.created_at).toLocaleDateString()}</span>
          </div>

          <Link href={`/blog/${post.id}`}>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              {post.title}
            </h1>
          </Link>
          <p className="text-gray-700 leading-relaxed">{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogSection;
