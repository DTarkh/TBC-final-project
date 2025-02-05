import { Link } from "@/i18n/routing";
import { Post } from "../(dashboard)/blog/page";
import { truncateText } from "@/utils/helper-functions";

const BlogSection = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`);
  const posts: Post[] = await data.json();

  const reversedPosts = posts.reverse();
  const latestPosts = reversedPosts.slice(0, 3);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3  px-[10%] max-lg:px-[2%] gap-2 pb-24 pt-5">
      {latestPosts.map((post) => (
        <div
          key={post.id}
          className="p-6 bg-white rounded-lg hover:shadow-md transition-all"
        >
          <div className="flex justify-between items-center text-sm text-gray-500 mb-6 max-2xl:flex-col max-2xl:items-start gap-2">
            <span className="badge whitespace-nowrap">
              By User: {post.user_email}
            </span>
            <span className="badge whitespace-nowrap">
              {new Intl.DateTimeFormat("en-US", {
                timeZone: "Asia/Tbilisi",
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              }).format(new Date(post.created_at))}
            </span>
          </div>

          <Link href={`/blog/${post.id}`}>
            <h1 className="text-2xl font-bold text-gray-800 mb-4 hover:text-[#FCA311]">
              {post.title}
            </h1>
          </Link>
          <p className="text-gray-700 leading-relaxed">
            {truncateText(post.body, 30)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BlogSection;
