"use client";
import { GoPerson } from "react-icons/go";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation"; // For client-side routing
import useUser from "../Components//Hooks/useUser";

interface User {
  id: string;
  email: string;
}
interface Props {
  classNames?: string;
  onClose?: () => void;
}

const Profile = ({classNames, onClose}: Props) => {
  const { user, loading } = useUser();
  const supabase = createClient();
  const router = useRouter(); // Next.js router for client-side navigation
  const t = useTranslations("Navigation");



  const handleSignOut = async () => {
    try {
      const { error: deleteError } = await supabase
        .from("cart")
        .delete()
        .eq("user_id", user?.id);
      if (deleteError) {
        console.error("Error deleting cart:", deleteError.message);
      } else {
        console.log("Cart deleted successfully for user ID:", user?.id);
      }

      const { error: signOutError } = await supabase.auth.signOut();
      if (signOutError) {
        console.error("Error signing out:", signOutError.message);
      } else {
        console.log("User signed out successfully");
      }

      router.push("/en/sign-in");
    } catch (err) {
      console.error("Unexpected error during sign-out process:", err);
    }
  };

  return (
    <div className={`dropdown dropdown-end ${classNames}`} role="button">
      <div className="flex items-center">
        <GoPerson
          className="text-4xl mx-2 text-[#14213D] dark:text-[#E5E5E5] outline-none hover:scale-110 transition-transform"
          tabIndex={user ? 0 : undefined}
        />
        <div>
          <p className="text-[#14213D] text-sm dark:text-[#E5E5E5]">
            {t("welcome")}
          </p>
          <h2 className="whitespace-nowrap text-[#14213D] dark:text-[#E5E5E5]">
            {loading ? (
              "Loading..."
            ) : user ? (
              user.email
            ) : (
              <Link href="/sign-in">Sign-in/Sign-up</Link>
            )}
          </h2>
        </div>
      </div>

      <ul
        tabIndex={user ? 0 : undefined}
        className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-40 mt-3 w-52 p-2 shadow ${
          !user ? "hidden" : ""
        }`}
      >
        <li onClick={onClose}>
          <Link href="/profile">My Profile</Link>
        </li>
        <li onClick={onClose}>
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
