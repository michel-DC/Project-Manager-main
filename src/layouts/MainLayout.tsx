import React from "react";
import Sidebar from "../components/Sidebar";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-white">
      <header className="w-full">
        <Sidebar />
      </header>
      <div className="flex-1">
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
