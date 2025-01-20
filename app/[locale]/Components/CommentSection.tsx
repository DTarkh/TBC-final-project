
interface CommentSectionProps {
    postID: number;
  }

  interface Comment {
    id: number;
    post_id: number;
    body: string;
    created_at: Date;
    user_id: number;
  }


  const CommentSection = async ({ postID }: CommentSectionProps) => {
    const postsResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/posts/comments`
      );
      const comments: Comment[] = await postsResponse.json();
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
  

  export default CommentSection;