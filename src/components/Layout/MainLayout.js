import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../Header";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="min-h-[90vh]">{children}</div>
      <div className="px-4 py-2 justify-around items-center bg-primary flex w-full banner04">
        <p
          className={` my-5 md:my-10 flex gap-x-5 items-center font-IBMPlex font-light text-white text-xl md:text-3xl lg:text-4xl md:leading-16 `}
        >
          Made with
          <span className="bold">
            <Image
              src="/assets/RcmadeLogo.jpg"
              alt="Team Rcmade"
              className={` rounded-full object-contain`}
              width={50}
              height={50}
            />
          </span>
        </p>
        <div className="text-gray-900 flex gap-x-4 ">
          <Link href="/content/privacy">Privacy Policy</Link>
          <Link href="/content/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
