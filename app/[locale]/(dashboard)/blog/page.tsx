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
    <div className="flex w-full gap-3 justify-center my-10 px-[10%] max-lg:px-[2%]">
      <div className="flex flex-col gap-3">
        {reversedPosts.map((post) => (
          <div
            key={post.id}
            className="p-6 bg-white rounded-lg shadow-md"
          >
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
      <div className="w-[700px]">
        <AddPostForm />
      </div>
    </div>
  );
};

export default BlogPost;
