import { NextRequest } from "next/server";
import { createClient } from "@/utils/supabase/server";

export const GET = async (req: NextRequest,{params}: {params: Promise<{ id: string }>}) => {
  
  // Extract the dynamic `id` parameter from `params`
  const { id } = await params;
  
  const supabase = await createClient();


  let query = supabase.from('products').select().eq("id", id)

  const { data, error } = await query;


  // Handle errors
  if (error) {
    console.error("Error fetching row:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  // Return the data as JSON
  return new Response(JSON.stringify(data), { status: 200 });
};