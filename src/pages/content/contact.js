import Link from "next/link";
import React from "react";

const contact = () => {
  return (
    <div className="banner text-white min-h-screen md:p-16 sm:p-8">
      <div className="px-3 pt-24 sm:pt-20">
        <h1 className=" text-3xl mb-5">
          <span className="font-bold mr-2">ⓘ</span> Contact Up
        </h1>
        <div className="mt-5">
          <div className=" text-lg">
            <span className="font-bold mr-2">Our Email:</span>
            <span className="text-slate-900">
              <Link href="mailto: support@busmate.com">
                support@busmate.com
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
