import Image from "next/image";
import { BsKey } from "react-icons/bs";
import { BiHappy } from "react-icons/bi";

import { AiOutlineAlignLeft } from "react-icons/ai";
import PlayStore from "@/src/components/Buttons/PlayStore";

export default function Home() {
  return (
    <main className="bg-white overflow-x-hidden">
      <div className="flex  flex-col md:flex-row justify-center pt-32  w-screen bg-violet-900 items-center">
        <div className="flex flex-col items-center md:items-start ">
          <h1 className="text-[4rem] self-end sm:text-8xl md:text-9xl lg:text-[12xl] xl:text-[13rem] font-bold text-white ">
            BusMate
          </h1>
          <PlayStore />
        </div>

        <div className="max-w-[10rem]  sm:max-w-[12rem] md:max-w-sm relative z-10 md:w-auto ">
          <Image
            src="/assets/handapp.png"
            className="select-none"
            width={412}
            height={693}
            alt="App Image"
            priority
          />
        </div>
      </div>

      <div className="bg-white flex-wrap md:flex-row gap-9 w-full flex justify-around py-8 ">
        <div className="box flex gap-2">
          <div className=" text-4xl text-white justify-center items-center p-4 bg-orange-500 h-[4.5rem] w-[4.5rem] rounded-xl ">
            <BsKey />
          </div>
          <div className="max-w-[10rem]">
            <span className="font-bold text-gray-800 text-xl">Role</span>
            <p className="font-bold text-gray-500 text-sm">
              Enables real-time college bus tracking for users convenience.
            </p>
          </div>
        </div>

        <div className="box flex gap-2">
          <div className=" text-4xl text-white justify-center items-center p-4 bg-orange-500 h-[4.5rem] w-[4.5rem] rounded-xl ">
            <AiOutlineAlignLeft />
          </div>
          <div className="max-w-[10rem]">
            <span className="font-bold text-gray-800 text-xl">Task</span>
            <p className="font-bold text-gray-500 text-sm">
              Facilitate bus tracking, promote seamless connectivity.
            </p>
          </div>
        </div>

        <div className="box flex gap-2">
          <div className=" text-4xl text-white justify-center items-center p-4 bg-orange-500 h-[4.5rem] w-[4.5rem] rounded-xl ">
            <BiHappy />
          </div>
          <div className="max-w-[10rem]">
            <span className="font-bold text-gray-800 text-xl">Convenience</span>
            <p className="font-bold text-gray-500 text-sm">
              Effortless campus travel, real-time bus insights for convenience.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 flex-wrap md:flex-row items-center w-full flex justify-around py-8 ">
        <div className="flex flex-col ">
          <h1 className="text-gray-900 text-2xl font-bold ">Busmate</h1>
          <p className="text-gray-500  md:max-w-[30rem]">
            Experience seamless campus commutes with our innovative bus tracking
            app. Effortlessly navigate your college journey as you gain
            real-time insights into bus locations. Stay connected with fellow
            students through instant updates, ensuring you never miss a ride.
            Our user-friendly interface provides hassle-free access to accurate
            bus whereabouts, enhancing convenience and eliminating
            uncertainties.
          </p>
        </div>
        <div className="relative flex justify-center items-center">
          <div className="absolute bg-blue-400 w-80 h-80 sm:w-96 sm:h-96 md:w-[30rem]  md:h-[30rem] rounded-full"></div>
          <div className="max-w-[16rem] md:max-w-sm relative z-10 md:w-auto">
            <Image
              src="/assets/darkHome.png"
              className="select-none"
              width={322}
              height={575}
              alt="App Image"
            />
          </div>
        </div>
      </div>

      <div className=" flex px-2 sm:px-5 py-1 my-10 sm:my-20 bg-violet-900 justify-center items-center">
        <div className="">
          <Image
            src="/assets/lightappss.png"
            className="select-none drop-shadow-3xl"
            width={1408}
            height={982}
            alt="App Image"
          />
        </div>
      </div>

      <div className=" flex px-2  sm:px-5 py-1 my-10 sm:my-20 bg-slate- bg-light-dark justify-center items-center">
        <div className="">
          <Image
            src="/assets/darkappss.png"
            className="select-none drop-shadow-3xl"
            width={1408}
            height={982}
            alt="App Image"
          />
        </div>
      </div>
    </main>
  );
}
