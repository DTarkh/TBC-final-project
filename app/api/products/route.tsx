import { NextRequest } from "next/server";
import { createClient } from '@/utils/supabase/server';



export const GET = async (req:NextRequest
  // { params }: { params:  Promise<{ category: string }> }
) => {

  // const { category } = await params

  const url = new URL(req.url);
  const searchQuery = url.searchParams.get("search");
  const minPrice = url.searchParams.get("minPrice");
  const maxPrice = url.searchParams.get("maxPrice");
  const order = url.searchParams.get("order");

  console.log("searchQuery",searchQuery);

  const supabase = await createClient();


  let query = supabase
  .from('products').select();
  

  if (searchQuery) query = query.ilike('title_en', `%${searchQuery}%`);
  if (minPrice) query = query.gte("price", parseFloat(minPrice));
  if (maxPrice) query = query.lte("price", parseFloat(maxPrice));
  if (order === "priceAsc") query = query.order('price', { ascending: true });
  if (order === "priceDesc") query = query.order('price', { ascending: false });
  if (order === "ratingDesc") query = query.order('rating', { ascending: false });

  const { data, error } = await query;

  
  if (error) {
    console.error('Error fetching row:', error);
  } 


  return Response.json(data);
};