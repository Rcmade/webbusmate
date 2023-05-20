import React from "react";

import styles from "../styles/Global";
// import assets from "../../public/assets";
import Button from "./Button";
import Image from "next/image";

const SectionWrapper = ({
  title,
  description,
  showBtn,
  mockupImg,
  banner,
  reverse,
  priority,
}) => {
  return (
    <div
      className={`min-h-screen  flex justify-center items-center md:p-16 sm:p-8
      ${reverse ? "bg-white" : "bg-primary"} 
      ${banner}`}
    >
      <div
        className={`flex items-center flex-col md:flex-row
        ${
          reverse ? "flex-row-reverse md:flex-row-reverse" : "flex-row md:flex-"
        } 
        w-11/12 sm:w-full `}
      >
        <div
          className={` flex-1 w-full flex justify-start flex-col md:mb-10  
          ${reverse ? " fadeRightMini" : " fadeLeftMini"}
          ${reverse ? "text-right" : "text-left"}
        `}
        >
          <h1
            className={`
          ${reverse ? styles.blackText : styles.whiteText}
          ${"font-bold font-IBMPlex text-5xl sm:text-4xl mt-10 lg:text-6xl leading-12 md:leading-13"}`}
          >
            {title}
          </h1>
          <p
            className={`
          ${reverse ? styles.blackText : styles.whiteText}
          ${"my-5 md:my-10 font-IBMPlex font-light text-xl md:text-3xl lg:text-4xl md:leading-16"}`}
          >
            {description}
          </p>
          {showBtn && (
            <Button
              assetUrl={"/assets/playstore.png"}
              link="https://play.google.com/store/apps/details?id=com.busmate"
            />
          )}
        </div>
        <div className={`flex-1  flex justify-center items-center p-8 sm:px-0`}>
          <Image
            src={mockupImg}
            alt="mockup"
            className={`
           ${reverse ? " fadeLeftMini" : " fadeRightMini"}
           w-full h-full md:w-11/12 md:h-11/12 object-contain`}
            width={500}
            priority={priority || false}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper;
