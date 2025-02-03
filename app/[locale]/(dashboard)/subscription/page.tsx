import { FaRegCheckCircle } from "react-icons/fa";
import Header from "../../Components/Header";
import GetStarted from "../../Components/GetStarted";

const SubscriptionPage = () => {
  return (
    <>
    <Header>Pricing Plans</Header>
    <div className=" w-[400px] h-[50vh] p-7 flex flex-col justify-between rounded-lg bg-white">
      <div className="flex justify-between">
        <p className="text-xl font-semibold">Basic</p>
        <span className="badge">Save 20$</span>
      </div>
      <h1>$20/month</h1>
      <p>Desctiption text Lorem ipsum dolor sit amet.</p>
      <div className="flex flex-col gap-2">
        <p className="flex items-center gap-1 "><FaRegCheckCircle className="text-green-500"/>Example feature 1</p>
        <p className="flex items-center gap-1 "><FaRegCheckCircle className="text-green-500"/>Example feature 2</p>
        <p className="flex items-center gap-1 "><FaRegCheckCircle className="text-green-500"/>Example feature 3</p>
      </div>
      <GetStarted />
    </div>
    </>
  );
};

export default SubscriptionPage
