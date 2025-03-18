import { NextRequest } from "next/server";
import { createClient } from '@/utils/supabase/server';

export const GET = async (req: NextRequest) => {
  const url = new URL(req.url);

  // Extracting query parameters
  const searchQuery = url.searchParams.get("search");
  const minPrice = url.searchParams.get("minPrice");
  const maxPrice = url.searchParams.get("maxPrice");
  const order = url.searchParams.get("order");
  const category = url.searchParams.get("category"); // New category filter
  const supabase = await createClient();

  // Start base query
  let query = supabase.from('products').select('*'); // Select all fields

  // Apply filters conditionally
  if (searchQuery) query = query.ilike('title_en', `%${searchQuery}%`);
  if (minPrice) query = query.gte("price", parseFloat(minPrice));
  if (maxPrice) query = query.lte("price", parseFloat(maxPrice));
  if (category) query = query.eq("category_en", category); // Filtering by category

  // Apply sorting
  if (order) {
    switch (order) {
      case "priceAsc":
        query = query.order('price', { ascending: true });
        break;
      case "priceDesc":
        query = query.order('price', { ascending: false });
        break;
      case "ratingDesc":
        query = query.order('rating', { ascending: false });
        break;
      default:
        console.warn("Invalid order parameter:", order);
    }
  }

  // Execute the query
  const { data, error } = await query;

  if (error) {
    console.error("Error fetching data:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json(data, { status: 200 });
};