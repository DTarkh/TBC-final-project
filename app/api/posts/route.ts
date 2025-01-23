import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET(req: NextRequest) {
  const supabase = await createClient();
  const url = new URL(req.url);
  const searchQuery = url.searchParams.get("blogSearch");

  let query = supabase.from("posts").select("*");


  if (searchQuery) {
    query = query.ilike("title", `%${searchQuery}%`);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching rows:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}