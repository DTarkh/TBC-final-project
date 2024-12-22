import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function POST(req: NextRequest,  params: { params: { id: string}} ) {
  const supabase = await createClient();

  // Parse the request body
  const body = await req.json();
  const { title, body: content, user_id } = body;

  // Validate input
  if (!title || !content || !user_id) {
    return NextResponse.json(
      { error: "Missing required fields: title, body, or user_id" },
      { status: 400 }
    );
  }

  // Insert into the `posts_multilang` table
  const { data, error } = await supabase.from("posts").insert([
    {
      title,
      body: content,
      user_id,
    },
  ]);

  if (error) {
    console.error("Error inserting row:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: "Post created successfully", data });
}