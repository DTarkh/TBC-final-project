import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

// Define the User interface
export interface User {
  user_id: string;
  email: string;
  nickname: string;
  shipping_address: string;
  first_name: string;
  last_name: string;
  issubscribed: boolean;
  date_of_birth: string;
  email_verified: boolean;
  image:string;



}

const useUsers = () => {
  const [users, setUsers] = useState<User[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true); // Start loading
      setError(null); // Reset errors before fetch
      try {
        const { data, error } = await supabase.from("user").select("*");

        if (error) {
          console.error("Error fetching users:", error.message);
          setError(error.message); // Capture the error message
          return;
        }

        setUsers(data); // Directly set the fetched data
      } catch (err) {
        console.error("Unexpected error:", err);
        setError("An unexpected error occurred.");
      } finally {
        setLoading(false); // End loading in all cases
      }
    };

    fetchUsers();
  }, [supabase]);

  return { users, loading, error };
};

export default useUsers;