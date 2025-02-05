"use client";

import useUser from "../Components/Hooks/useUser";
import Header from "../Components/Header";

const plans = [
  {
    link: "https://buy.stripe.com/test_cN29DD3lWbuA9BC6oM",
    priceId: "price_1Qjx0tE1EFQDyA1CWA75IoGL",
    price: 14.99,
    duration: "/month",
    label: "Pay Monthly",
  },
  {
    link: "https://buy.stripe.com/test_bIY1776y87ek9BC5kJ",
    priceId: "price_1QoOk3E1EFQDyA1C2w19d8sD",
    price: 59.0,
    duration: "/year",
    label: "Pay Yearly (60% OFF 💰)",
  },
];

const Pricing = () => {
  const user = useUser();

  return (
    <>
      <section>
        <div className="py-24 px-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="w-full max-w-lg">
              <div className="relative flex flex-col h-full gap-5 lg:gap-8 z-10 bg-base-100 p-8 rounded-xl border border-gray-200 shadow-lg">
                <h3 className="text-xl font-bold text-center">{plan.label}</h3>
                <div className="flex justify-center gap-2">
                  <p className="text-5xl tracking-tight font-extrabold">${plan.price}</p>
                  <div className="flex flex-col justify-end mb-[4px]">
                    <p className="text-sm tracking-wide text-base-content/80 uppercase font-semibold">{plan.duration}</p>
                  </div>
                </div>
                <ul className="space-y-2.5 leading-relaxed text-base flex-1">
                  {[
                    "Fast 3-5 days delivery 🚀",
                    "No shipping fees on all orders 🆓",
                    "Priority order processing ✅",
                    "Exclusive member discounts 💰",
                    "Real-time order tracking 📦",
                    "Dedicated 24/7 customer support ☎️",
                  ].map((feature, i) => (
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
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="space-y-2">
                  <a
                    className="btn btn-primary btn-block"
                    target="_blank"
                    href={plan.link + "?prefilled_email=" + user.user?.email}
                  >
                    Subscribe
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Pricing;
