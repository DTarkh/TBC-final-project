



import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {
  const supabase = await createClient();

  // Extract the product_id from params
  const productId = params.id;

  // Perform the deletion
  const { error } = await supabase.from("cart").delete().eq("product_id", productId);

  if (error) {
    console.error("Error deleting cart item by product_id", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: `Item with product_id ${productId} deleted successfully` }, { status: 200 });
};