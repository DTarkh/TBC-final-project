import { Link } from "@/i18n/routing";
import AddPostForm from "../../Components/AddPostForm";
import { truncateText } from "@/utils/helper-functions";
import BlogSearch from "../../Components/BlogSearch";

export interface Post {
  title: string;
  body: string;
  created_at: Date;
  user_id: number;
  user_email: string;
  id: number;
}
interface Props {
  searchParams: any;
}

const BlogPost = async ({ searchParams }: Props) => {
  const { blogSearch } = await searchParams;

  let url = `${process.env.NEXT_PUBLIC_API_URL}/api/posts`;

  if (blogSearch)
    url = `${process.env.NEXT_PUBLIC_API_URL}/api/posts?blogSearch=${blogSearch}`;

  const data = await fetch(url);
  const posts: Post[] = await data.json();

  const reversedPosts = posts.reverse();

  return (
    <div className="flex w-full gap-3 justify-center my-[12vh] px-[10%] max-lg:px-[2%] max-sm:flex-col">
      <div className="flex flex-col gap-3">
        {reversedPosts.map((post) => (
          <div key={post.id} className="p-6 bg-white shadow-md w-full">
            <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
              <span>By User: {post.user_email}</span>
              <span>
                {new Intl.DateTimeFormat("en-US", {
                  timeZone: 'Asia/Tbilisi',
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
              <h1 className="text-2xl font-bold text-gray-800 mb-4">
                {post.title}
              </h1>
            </Link>
            <p className="text-gray-700 leading-relaxed">
              {truncateText(post.body, 50)}
            </p>
          </div>
        ))}
      </div>
      <div className=" p-4 bg-[#FCA311]">
        <BlogSearch />
        <AddPostForm />
      </div>
    </div>
  );
};

export default BlogPost;
