import { NextRequest } from "next/server";
import { createClient } from '@/utils/supabase/server';



export const GET = async (req:NextRequest ) => {

    const category = req.nextUrl.searchParams.get('category');
    console.log("Category:", category);

  const supabase = await createClient();
  const { data, error } = await supabase.from('products_multilang').select();
  
  if (error) {
    console.error('Error fetching row:', error);
  } 


  return Response.json(data);
};