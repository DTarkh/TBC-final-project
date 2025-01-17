"use client";
import { GoPerson } from "react-icons/go";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // For client-side routing

interface User {
  id: string;
  email: string;
}

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  const supabase = createClient();
  const router = useRouter(); // Next.js router for client-side navigation
  const t = useTranslations("Navigation");

  useEffect(() => {
    // Fetch user data asynchronously
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (data?.user) {
        setUser({
          id: data.user.id,
          email: data.user.email || '',
        });
      }
      if (error) {
        console.error("Error fetching user:", error.message);
      }
    };

    fetchUser();
  }, [supabase]);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error signing out:", error.message);
      return;
    }
    // Redirect to the sign-in page
    router.push("/en/sign-in");
  };

  return (
    <div className="dropdown dropdown-end max-lg:hidden" role="button">
      <div className="flex items-center">
        <GoPerson
          className="text-4xl mx-2 text-[#14213D] dark:text-[#E5E5E5] outline-none hover:scale-110 transition-transform"
          tabIndex={0}
        />
        <div>
          <p className="text-[#14213D] text-sm">{t("welcome")}</p>
          <h2 className="whitespace-nowrap text-[#14213D] dark:text-[#E5E5E5]">
            {user ? user.email : "Loading..."}
          </h2>
        </div>
      </div>

      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
      >
        <li>
          <Link href="/profile">My Profile</Link>
        </li>
        <li>
          <Link href="/orders">My orders</Link>
        </li>
        <li onClick={handleSignOut}>
          <p>Logout</p>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
