import React from "react";

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="p-6 bg-gray-900 rounded-lg">{children}</div>
    </div>
  );
};

export default AuthLayout;
