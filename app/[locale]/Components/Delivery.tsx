import { Link } from "@/i18n/routing";
import { User } from "./Hooks/useUserS";
import { createClient } from "@/utils/supabase/server";


const Delivery = async () => {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data.user) {
    return (
      <p className="text-red-500 text-center mt-10">Error fetching user data</p>
    );
  }

  const { data: users, error: userError } = await supabase
    .from("user")
    .select("*");
  if (userError) {
    return (
      <p className="text-red-500 text-center mt-10">Error fetching users</p>
    );
  }

  const currentUser = users?.find(
    (user: User) => user.user_id === data.user.id
  );

  if (currentUser)
    return (
      <div className="flex w-full px-[10%] justify-end pt-[12vh]">
        <div className="w-full max-w-md bg-white/70 backdrop-blur-lg shadow-2xl rounded-3xl p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-5 text-center">
            🚚 Delivery Information
          </h2>

          <div className="space-y-6">
            {/* Shipping Address */}
            <div className="bg-gray-100 p-4 rounded-xl shadow-sm">
              <label className="block text-gray-600 font-medium mb-1">
                📍 Shipping Address
              </label>
              <p className="text-gray-700 text-lg">
                {currentUser.shipping_address}
              </p>
            </div>

            {/* Subscription Status */}
            <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl shadow-sm">
              <span className="font-medium text-gray-600">
                🎟 Subscription Status
              </span>
              <span
                className={`px-4 py-1 rounded-full text-sm font-semibold text-white ${
                  currentUser.issubscribed ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {currentUser.issubscribed ? "Active" : "Inactive"}
              </span>
            </div>

            {/* Update Button */}
            <Link href="/profile">
              <button className="w-full bg-black text-white font-medium py-3 rounded-xl shadow-lg hover:bg-gray-900 transition-all duration-300 flex items-center justify-center gap-2">
                ✏️ Update Address
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Delivery;

