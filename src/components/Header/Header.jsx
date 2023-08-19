"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { HiMenuAlt3 } from "react-icons/hi";
const Header = () => {
  const [isNavShow, setIsNavShow] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];
  return (
    <nav className=" shadow-xl  fixed w-full  z-20  bg-gray-900 border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center max-w-[3rem]">
          <Image
            src="/assets/logoTransparent.png"
            width={600}
            height={600}
            alt="BusMate Image"
            // className="h-8 mr-3"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap ml-4 text-white">
            BusMate
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-dropdown"
          onClick={() => setIsNavShow(!isNavShow)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center  text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-600 text-5xl"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <HiMenuAlt3 />
        </button>
        <div
          className={` ${
            isNavShow ? "bolck" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li onClick={() => setIsNavShow(false)} key={link.href}>
                  <Link
                    href={link.href}
                    className={`block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  ${
                      isActive
                        ? "text-blue-700"
                        : "dark:text-white text-gray-900"
                    } md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                    aria-current="page"
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
