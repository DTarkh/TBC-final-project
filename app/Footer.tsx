import { FaLocationArrow } from "react-icons/fa6";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
const Footer = () => {
  return (
    <footer className=" bg-amber-200  w-full flex-col px-[10%]">
      <div className="flex flex-wrap">
        <div className="bg-amber-700 w-full  md:w-1/2 lg:w-1/4">
          <h2>RECENT POSTS</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae,
            recusandae?
          </p>
          <ul className="flex-col">
            <li className="flex items-center">
              <FaLocationArrow /> Post 1
            </li>
            <li className="flex items-center">
              <MdOutlinePhoneIphone />
              Post 2
            </li>
            <li className="flex items-center">
              <MdOutlineMail />
              Post 3
            </li>
          </ul>
        </div>
        <div className="bg-gray-900 w-full  md:w-1/2  lg:w-1/4">
          <h3>RECENT POSTS</h3>
          <ul className="flex-col">
            <li>Post 1</li>
            <li>Post 2</li>
            <li>Post 3</li>
          </ul>
        </div>
        <div className="bg-red-800 w-full   md:w-1/2 lg:w-1/4">
          <h3>USEFUL LINKS</h3>
          <ul className="flex-col">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Returns</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="bg-lime-700 w-full   md:w-1/2 lg:w-1/4">
          <h3>FOOTER MENU</h3>
          <ul className="flex-col">
            <li>Home</li>
            <li>About</li>
            <li>blog</li>
            <li>Posts</li>
          </ul>
        </div>
      </div>
      <div className="bg-red-700">wadw</div>
    </footer>
  );
};

export default Footer;
