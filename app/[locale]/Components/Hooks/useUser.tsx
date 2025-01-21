import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

interface User {
  id: string;
  email: string;
  user_metadata: UserMetadata
}

interface UserMetadata {
    avatar_url: string, 
    email_verified: boolean,
    full_name: string,
    user_name: string
}

const useUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true); // Start loading
      try {
        const { data, error } = await supabase.auth.getUser();
        console.log("Fetched user data:", data.user); 
        if (error) {
          console.error("Error fetching user:", error.message);
        }

        if (data?.user) {
          setUser({
            id: data.user.id,
            email: data.user.email || "",
            user_metadata: {
                avatar_url: data.user.user_metadata?.avatar_url || "",
                email_verified: data.user.user_metadata?.email_verified || false,
                full_name: data.user.user_metadata?.full_name || "",
                user_name: data.user.user_metadata?.user_name || "",
              }
            }
           
          );
        } else {
          setUser(null); // Explicitly set user to null if no user is found
        }
      } catch (err) {
        console.error("Unexpected error:", err);
      } finally {
        setLoading(false); // End loading in all cases
      }
    };

    fetchUser();
  }, [supabase]);

  return { user, loading };
};

export default useUser;