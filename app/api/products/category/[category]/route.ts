import { NextRequest } from "next/server";
import { createClient } from '@/utils/supabase/server';

interface Params {
  category: string;
}

export const GET = async (req: NextRequest, { params }: { params: Params }) => {
  // Log the category to verify it's being passed correctly
  console.log("Category:", params.category);

  // Initialize Supabase client
  const supabase = await createClient();

  // Query Supabase with the correct column name 'category_en' for filtering
  const { data, error } = await supabase
    .from('products_multilang')
    .select('*')
    .ilike("category_en", params.category); // Filter by 'category_en'

  // Handle error
  if (error) {
    console.error('Error fetching row:', error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  // Return filtered data as JSON
  return new Response(JSON.stringify(data), { status: 200 });
};