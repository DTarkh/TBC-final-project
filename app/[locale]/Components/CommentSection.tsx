interface CommentSectionProps {
  postID: number;
}

interface Comment {
  id: number;
  post_id: number;
  body: string;
  created_at: Date;
  user_id: number;
  user_email: string;
}

const CommentSection = async ({ postID }: CommentSectionProps) => {
  const postsResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/posts/comments`
  );
  const comments: Comment[] = await postsResponse.json();
  return (
    <div>
      <h1 className="text-center text-xl font-bold mt-5">Comments</h1>
      {comments
        .filter((comment) => comment.post_id === postID) // Filter by post_id
        .map((comment) => (
          <div
            key={comment.id}
            className="border rounded-lg border-gray-300 p-5 mt-2 text-gray-700"
          >
            <p className="text-xs text-gray-500 pb-5">
              By User: {comment.user_email} on{" "}
              {new Intl.DateTimeFormat("en-US", {
                timeZone: "Asia/Tbilisi",
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              }).format(new Date(comment.created_at))}
            </p>
            <p>{comment.body}</p>
          </div>
        ))}
    </div>
  );
};

export default CommentSection;
