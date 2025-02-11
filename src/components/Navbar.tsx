import React from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-black text-white p-4 border-b border-gray-800">
      <div className="flex justify-center items-center w-=4xl">
        <h1 className="text-4xl font-semibold text-center">
          <AiOutlineFundProjectionScreen /> Project Manager
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
