import { NextRequest } from "next/server";
import { createClient } from '@/utils/supabase/server';

interface Params {
  category: string;
}

export const GET = async (req:NextRequest, { params }: { params: Params }) => {

  const url = new URL(req.url);
  const minPrice = url.searchParams.get("minPrice");
  const maxPrice = url.searchParams.get("maxPrice");

  const supabase = await createClient();


  let query = supabase
  .from('products_multilang').select();
  

  if (minPrice) query = query.gte("price", parseFloat(minPrice));
  if (maxPrice) query = query.lte("price", parseFloat(maxPrice));

  const { data, error } = await query;

  
  if (error) {
    console.error('Error fetching row:', error);
  } 


  return Response.json(data);
};