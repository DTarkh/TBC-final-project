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
              {/* Update Button */}
              <Link href="/profile">
                <button className="w-full bg-black text-white font-medium py-3 rounded-xl shadow-lg hover:bg-gray-900 transition-all duration-300 flex items-center justify-center gap-2">
                  ✏️ Update Address
                </button>
              </Link>
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

            {/* Benefits for Subscribers */}
            {currentUser.issubscribed ? (
              <div className="bg-green-100 p-4 rounded-xl shadow-sm text-green-900">
                <p className="font-medium text-lg">🎉 Sphere Prime Benefits:</p>
                <ul className="mt-2 space-y-2">
                  {[
                    "Fast 3-5 days delivery 🚀",
                    "No shipping fees on all orders 🆓",
                    "Priority order processing ✅",
                    "Exclusive member discounts 💰",
                    "Real-time order tracking 📦",
                    "Dedicated 24/7 customer support ☎️",
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-[18px] h-[18px] opacity-80 shrink-0"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              // Additional Info for Non-Subscribers
              <div className="bg-yellow-100 p-4 rounded-xl shadow-sm text-yellow-900">
                <p className="font-medium">📦 Standard Delivery</p>
                <p>
                  Delivery takes 5 to 21 days and is calculated based on distance
                  and product weight, starting from a minimum of $5.
                </p>
                <p className="mt-2">
                  Upgrade to <span className="font-semibold">Sphere Prime</span>{" "}
                  for faster shipping and exclusive benefits.
                </p>
                <Link href="/subscription">
                  <button className="w-full mt-3 bg-blue-600 text-white font-medium py-2 rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2">
                    ⭐ Get Sphere Prime
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    );
};

export default Delivery;