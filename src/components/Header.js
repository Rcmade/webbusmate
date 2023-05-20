import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="fixed w-full top-0 h-24">
      <div className="bg-black/60 px-6 py-2 ">
        <div className=" container top-0 flex  ">
          <div className="bg-white flex rounded-full p-2 ">
            <Image
              src={"/assets/BusmateLogo.png"}
              className="object-contain  "
              width={60}
              height={60}
              alt="Busmate.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
