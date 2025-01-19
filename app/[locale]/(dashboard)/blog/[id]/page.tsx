import { Post } from "../page";

const BlogDetails = async ({ params }: { params: Promise<{ id: number }> }) => {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/${id}`);
  const post:Post[] = await response.json();

  return (
    <div className="bg-red-600">
      <h2>{post.map((i:Post) => (i.title))}</h2>
    </div>
  );
};

export default BlogDetails;
