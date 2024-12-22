import React from "react";


interface Post{
  title: string;
  body: string;
  created_at: Date;
  user_id: number;
  id:number;
}

interface BlogPostProps {
  posts: Post[];
}


const BlogPost = async () => {
  
  const data = await fetch("http://localhost:3000/api/posts")
  const posts: Post[] = await data.json()


  return (
  
    <div>
      {posts.map((post) => (
        <div
          key={post.id}
          className="max-w-2xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md"
        >
          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-800 mb-4">{post.title}</h1>

          {/* Metadata */}
          <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
            <span>By User: {post.user_id}</span>
            <span>{new Date(post.created_at).toLocaleDateString()}</span>
          </div>

          {/* Body */}
          <p className="text-gray-700 leading-relaxed">{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPost;