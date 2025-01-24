import { FaRegCheckCircle } from "react-icons/fa";
import Header from "../../Components/Header";

const SubscriptionPage = () => {
  return (
    <>
    <Header>Pricing Plans</Header>
    <div className=" w-[250px] h-[40vh] p-5 flex flex-col justify-between rounded-lg bg-white">
      <div className="flex justify-between">
        <p>Basic</p>
        <span className="badge">Save 20$</span>
      </div>
      <h1>$20/month</h1>
      <p>Desctiption text Lorem ipsum dolor sit amet.</p>
      <div className="flex flex-col gap-2">
        <p className="flex items-center gap-1 "><FaRegCheckCircle className="text-green-500"/>Example feature 1</p>
        <p className="flex items-center gap-1 "><FaRegCheckCircle className="text-green-500"/>Example feature 2</p>
        <p className="flex items-center gap-1 "><FaRegCheckCircle className="text-green-500"/>Example feature 3</p>
      </div>
      <button className="btn">Get Started</button>
    </div>
    </>
  );
};

export default SubscriptionPage
