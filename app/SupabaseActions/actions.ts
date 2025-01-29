"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";


export async function login(formData: FormData) {
  const supabase = await createClient();


  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/en/home");
}

export async function signup(formData: FormData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp(data);

  const { data: userdata } = await supabase.auth.getUser();

  const { error: usererror } = await supabase
  .from("user")
  .upsert({
    user_id: userdata.user?.id,
    email: userdata.user?.email,
    nickname: userdata.user?.user_metadata.user_name,
    shipping_address: "",
    first_name: "",
    last_name: "",
    issubscribed: false,
    phone: "",
    date_of_birth: null, // Ensure correct format if it's a DATE field
    email_verified: userdata.user?.user_metadata.email_verified,
    image: "",
  }, {
    onConflict: "user_id", // Specify the column(s) for conflict resolution
  });

if (usererror) {
  console.error("Error inserting user:", usererror.message);
} else {
  console.log("User inserted successfully!");
}
  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/en/sign-in");
}

export const signinWithGithub = async () => {
  const supabase = await createClient();

  const auth_callback_url = `${process.env.NEXT_PUBLIC_API_URL}/auth/callback`;

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: auth_callback_url,
    },
  });

  console.log(data);


  const { data: userdata } = await supabase.auth.getUser();

  if (userdata.user) {
    const { error: usererror } = await supabase.from("user").upsert(
      {
        user_id: userdata.user.id,
        email: userdata.user.email,
        nickname: userdata.user.user_metadata?.user_name || "",
        shipping_address: "",
        first_name: userdata.user.user_metadata?.name?.split(" ")[0] || "",
        last_name: userdata.user.user_metadata?.name?.split(" ")[1] || "",
        issubscribed: false,
        phone: "",
        date_of_birth: null,
        email_verified: userdata.user.user_metadata?.email_verified || false,
        image: userdata.user.user_metadata?.avatar_url || "",
      },
      { onConflict: "user_id" }
    );

    if (usererror) {
      console.error("Error inserting/updating user after OAuth:", usererror.message);
    } else {
      console.log("User inserted/updated successfully after OAuth!");
    }
  }

  if (error) {
    console.log(error);
  }
  if (data.url) redirect(data.url);
};



