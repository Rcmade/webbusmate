// pages/about.js

import PlayStore from "@/src/components/Buttons/PlayStore";
import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl mt-10 font-semibold mb-4">About Us</h1>

        <div className="bg-white shadow-md p-6 rounded-md">
          <h2 className="text-xl font-semibold mb-4">Our Vision</h2>
          <p>
            At <span className="font-bold">BusMate</span>, our vision is to
            revolutionize campus commuting by providing students with a seamless
            and efficient way to track their college buses in real time.
            We&apos;re dedicated to creating a connected community where waiting
            for buses becomes a thing of the past, and students can make the
            most of their valuable time on campus.
          </p>
        </div>

        <div className="bg-white shadow-md p-6 mt-4 rounded-md">
          <h2 className="text-xl font-semibold mb-4">What We Do</h2>
          <p>
            We have developed a cutting-edge bus tracking app that empowers
            students with real-time insights into bus locations. By harnessing
            the power of technology, we&apos;re eliminating the frustration of
            long and uncertain wait times. Our app allows you to stay informed,
            plan your journey, and arrive at your bus stop precisely when the
            bus does.
          </p>
        </div>

        <div className="bg-white shadow-md p-6 mt-4 rounded-md">
          <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
          <p>
            Our mission is simple: to save students&apos; time and enhance their
            campus experience. We understand the challenges of busy schedules
            and the need to optimize every moment. With our app, you can
            confidently manage your commute, knowing that you&apos;ll never have
            to waste hours waiting for a bus again.
          </p>
        </div>

        <div className="bg-white shadow-md p-6 mt-4 rounded-md">
          <h2 className="text-xl font-semibold mb-4">Why Choose Us?</h2>
          <ul className="list-disc pl-6">
            <li>
              Real-time Tracking: Accurate and up-to-the-minute bus location
              insights.
            </li>
            <li>
              Effortless Experience: User-friendly interface for easy
              navigation.
            </li>
            <li>
              Community Connection: Stay connected with fellow students and bus
              riders.
            </li>
            <li>
              Empowering Efficiency: Make the most of your time on campus,
              hassle-free.
            </li>
          </ul>
        </div>

        <div className="mt-6 flex justify-center text-center">
          <PlayStore />
        </div>
      </div>
    </div>
  );
};

export default About;
