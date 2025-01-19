import { createClient } from "@/utils/supabase/server";
import { NextRequest } from "next/server";


export const GET = async (req:NextRequest,{params}: {params: Promise<{ id: string }>})=>{

    const { id } = await params
    const supabase = await createClient();

    const { data, error } = await supabase.from("posts").select("*").eq("id", id);



    if (error) {
        console.error("Error fetching row:", error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
      }
    
      // Return the data as JSON
      return new Response(JSON.stringify(data), { status: 200 });
}