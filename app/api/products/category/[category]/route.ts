import { NextRequest } from "next/server";
import { createClient } from '@/utils/supabase/server';



export const GET = async (req: NextRequest, { params }: { params: Promise<{ category: string }> }) => {

  const { category } = await params
  // Parse query parameters for price filtering
  const url = new URL(req.url);
  const minPrice = url.searchParams.get("minPrice");
  const maxPrice = url.searchParams.get("maxPrice");

  // console.log("Category:", params.category);
  // console.log("Min Price:", minPrice);
  // console.log("Max Price:", maxPrice);

  // Initialize Supabase client
  const supabase = await createClient();

  // Build the query with optional filters
  let query = supabase
    .from('products')
    .select('*')
    .ilike("category_en", category); // Filter by 'category_en'

  // Add price filters if provided
  if (minPrice) query = query.gte("price", parseFloat(minPrice));
  if (maxPrice) query = query.lte("price", parseFloat(maxPrice));

  // Execute the query
  const { data, error } = await query;

  // Handle error
  if (error) {
    console.error('Error fetching rows:', error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  // Return filtered data as JSON
  return new Response(JSON.stringify(data), { status: 200 });
};