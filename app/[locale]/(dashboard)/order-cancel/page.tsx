import { Link } from "@/i18n/routing";
import Head from "next/head";

const Error = () => {
  return (
    <>
      <div className="flex min-w-screen flex-col items-center justify-between gap-2">
        <h1 className="mt-[20rem] scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Payment Cancelled 😢
        </h1>
        <p className="leading-7">The good news is, you can try again 😊</p>
        <button className="btn px-20"><Link href="/store">Return</Link></button>
        
      </div>
    </>
  );
};

export default Error;
