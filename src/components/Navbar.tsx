import React from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-[#101212] text-white p-4 border-b border-gray-800">
      <div className="flex justify-center items-center mb-2 mt-1">
        <h1 className="text-5xl font-semibold text-center w-120 flex items-center">
          <AiOutlineFundProjectionScreen className="mr-5" />
          Project Manager
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
