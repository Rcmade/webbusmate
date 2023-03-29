import { privacyData } from "@/data/PrivacyData";
import React from "react";

const privacy = () => {
  return (
    <div className="banner min-h-screen md:p-16 sm:p-8">
      <div className=" px-3 pt-24 sm:pt-20">
        <h1 className=" text-2xl sm:text-3xl font-bold text-white">
          Privacy Policy for <span>BusMets.com</span>
        </h1>
        <ol className=" mt-10 flex flex-col gap-y-4 ">
          {privacyData.map((data, index) => {
            return (
              <li
                key={data._id}
                className="text-white flex flex-col justify-center items-start"
              >
                <h2 className="font-bold text-2xl text-black/75">
                  <span>{index + 1}.</span> {data.title}
                </h2>
                <ul className="flex flex-col gap-y-2 list-disc">
                  {data.points.map((point, i) => {
                    return (
                      <li key={i}>
                        <p className="text-white text-lg">{point}</p>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ol>

        <h1 className="font-semibold">
          By using our bus tracking feature, you consent to the collection, use,
          and storage of your personal data as described in this privacy policy.
          If you have any questions or concerns about this privacy policy,
          please contact us.
        </h1>
      </div>
    </div>
  );
};

export default privacy;
