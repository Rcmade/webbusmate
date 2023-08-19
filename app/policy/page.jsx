// pages/about.js

import PlayStore from "@/src/components/Buttons/PlayStore";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl mt-32 font-semibold mb-4">Privacy Policy</h1>
        <p className=" font-semibold mb-4">Last Updated: 13/Aug/2023</p>

        <div className="bg-white shadow-md p-6 rounded-md">
          <h2 className="text-xl font-semibold mb-4">
            Your Privacy is Our Priority
          </h2>
          <p>
            We deeply respect your privacy and are committed to protecting your
            personal information.
          </p>
        </div>

        <div className="bg-white shadow-md p-6 mt-4 rounded-md">
          <h2 className="text-xl font-semibold mb-4">Information We Collect</h2>
          <p>
            We collect the following information to enhance your app experience:
          </p>
          <ul className="list-disc ml-4">
            <li>Name</li>
            <li>Email</li>
            <li>Profile Information</li>
            <li>College ID Card Code</li>
            <li>Bus Number</li>
          </ul>
        </div>

        <div className="bg-white shadow-md p-6 mt-4 rounded-md">
          <h2 className="text-xl font-semibold mb-4">Real-Time Bus Tracking</h2>

          <ul className="list-disc ml-4">
            <li>
              We track your bus location during your journey to share real-time
              visuals with other travelers.
            </li>
            <li>
              This location data is visible for 5 days and is then automatically
              deleted.
            </li>
          </ul>
        </div>
        <div className="bg-white shadow-md p-6 mt-4 rounded-md">
          <h2 className="text-xl font-semibold mb-4">Sharing and Security</h2>

          <ul className="list-disc ml-4">
            <li>Your personal data is not shared with third parties.</li>
            <li>
              Industry-standard security measures are in place to safeguard your
              data.
            </li>
          </ul>
        </div>

        <div className="bg-white shadow-md p-6 mt-4 rounded-md">
          <h2 className="text-xl font-semibold mb-4">
            Fostering Collaboration and Connection
          </h2>
          <ul className="list-disc ml-4">
            <li>
              Our tracking feature enhances connections among travelers,
              allowing collaboration and shared exploration.
            </li>
          </ul>
        </div>

        <div className="bg-white shadow-md p-6 mt-4 rounded-md">
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <ul className="list-disc ml-4">
            <li>
              If you have questions or concerns about our Privacy Policy, please{" "}
              <a
                href="mailto:contact.busmate@gmail.com"
                className="text-blue-700"
              >
                reach out to us
              </a>
              . Your feedback is invaluable to us.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
