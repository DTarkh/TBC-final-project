import ContactForm from "../Components/ContactForm";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="w-full py-[12vh] flex max-md:flex-col px-[10%] bg-[#FCA311] gap-10">
      <div className="w-1/2 max-md:w-full flex flex-col justify-between max-md:h-[45vh] ">
        <div>
          <div className="w-[45px] h-[3px] bg-[#14213D] mb-2"></div>
          <h1 className="text-3xl font-bold tracking-wider text-[#14213D] mb-5">
            CONTACT
          </h1>
        </div>
        <p className="text-xl text-[#14213D]">
          34 Chem. François-Lehmann,
          <br />
          Switzerland, 1218
        </p>
        <p className="text-xl text-[#14213D]">Tel:+(41) 55 550 01 35</p>
        <p className="text-xl text-[#14213D]">MySphere@gmail.com</p>
        <div className="flex gap-3">
          <FaFacebookF className="text-[#14213D] hover:cursor-pointer text-xl" />

          <FaInstagram className="text-[#14213D] hover:cursor-pointer text-xl" />

          <FaLinkedinIn className="text-[#14213D]  hover:cursor-pointer text-xl" />
        </div>
      </div>
      <div className="flex justify-end w-1/2 max-md:w-full max-md:justify-center ">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
