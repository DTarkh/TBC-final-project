import { NextRequest } from "next/server";
import { createClient } from '@/utils/supabase/server';



export const GET = async (req:NextRequest) => {


const supabase = await createClient();

const { data, error } = await supabase.from('orders').select('*');

if (error) {
    console.error('Error fetching cartData', error);
  } 


  return Response.json(data);

}