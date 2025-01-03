'use client'
import { GoPerson } from "react-icons/go";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

interface User {
  id: string;
  email: string;
}


const Profile =  () => {
  
  const [user, setUser] = useState<User | null>()
  const supabase = createClient()
  const data = supabase.auth.getUser()

  const t = useTranslations("Navigation");

  useEffect(() => {
    // Fetch user data asynchronously
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (data) {
        setUser(data.user); 
      }
      if (error) {
        console.error("Error fetching user:", error.message);
      }
    };

    fetchUser();
  }, [supabase]);

  return (
    <div className="dropdown dropdown-end" role="button" >
      <div className="flex items-center max-lg:hidden">
        <GoPerson className="text-4xl mx-2 text-[#14213D] dark:text-[#E5E5E5] outline-none hover:scale-110 transition-transform" tabIndex={0}/>
        <div>
          <p className="text-slate-500 text-sm">{t("welcome")}</p>
          <h2 className="whitespace-nowrap text-[#14213D] dark:text-[#E5E5E5]">{user ? user.email : "Loading..."}</h2>
          
        </div>
      </div>

      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
      >
        <li>
          <a>
            Profile
          </a>
        </li>
        <li>
          <Link href="/orders">My orders</Link>
        </li>
        <li>
          <a>Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
