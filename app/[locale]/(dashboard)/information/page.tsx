import React from "react";

const InformationPage = () => {
  const sections = [
    {
      id: "privacy",
      title: "Privacy Policy",
      content: `We value your privacy and are committed to protecting your personal information. Any data collected during your shopping experience is used solely for order processing, account management, and providing a seamless shopping experience. We do not share your information with third parties except as required for order fulfillment or by law. For more details, please visit our comprehensive Privacy Policy page.`,
    },
    {
      id: "terms",
      title: "Terms & Conditions",
      content: `By using our website, you agree to abide by our terms and conditions. This includes respecting intellectual property rights, avoiding fraudulent transactions, and adhering to applicable laws. Our products are subject to availability, and prices are subject to change without notice. For a complete list of terms, please read our Terms & Conditions page.`,
    },
    {
      id: "returns",
      title: "Returns & Refunds",
      content: `We strive to ensure your satisfaction with every purchase. If you're not completely satisfied, you can request a return within 30 days of receipt, provided the product is in its original condition and packaging. Refunds will be processed to the original payment method within 7-10 business days of receiving the returned item. Please visit our Returns & Refunds page for more information.`,
    },
  ];

  return (
    <div className="flex flex-col items-center gap-10 my-12">
      <h1 className="text-4xl font-extrabold">Customer Information</h1>
      <div className="w-full space-y-12">
        {sections.map((section) => (
          <div key={section.id} id={section.id} className="space-y-6">
            <h2 className="text-3xl font-bold">{section.title}</h2>
            <p className="text-xl leading-9 text-gray-800">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InformationPage;