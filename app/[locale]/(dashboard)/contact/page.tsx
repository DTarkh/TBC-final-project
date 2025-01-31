import Header from "../../Components/Header";

const ContactPage = () => {
  return (
    <div>
      <Header>Contact Us</Header>
      <ContactForm />
    </div>
  );
};

export default ContactPage;

const ContactForm = () => {
  return (
    <form>
      <div className="relative">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Your Name
        </label>
        <span className="text-red-500 absolute -top-[4px] left-[70px]">*</span>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
        />
      </div>
      <div className="relative">
        <label htmlFor="" className="block text-sm font-medium text-gray-700">
          Your Email
        </label>
        <span className="text-red-500 absolute -top-[4px] left-[70px]">*</span>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
        />
      </div>
      <div className="relative">
        <label
          htmlFor="body"
          className="block text-sm font-medium text-gray-700"
        >
          Your Message
        </label>
        <span className="text-red-500 absolute -top-[4px] left-[85px]">*</span>
        <textarea
          id="body"
          name="body"
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
        />
      </div>
    </form>
  );
};
