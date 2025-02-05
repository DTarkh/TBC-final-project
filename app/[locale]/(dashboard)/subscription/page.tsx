"use client";

import Header from "../../Components/Header";
import Pricing from "../../Components/Pricing";

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

const SubscribePage = () => {
  return (
    <>
      <Header>Subscription Plans</Header>
      <Pricing />
    </>
  );
};

export default SubscribePage;
