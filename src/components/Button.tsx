import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-white text-black px-4 py-2 rounded-md hover:bg-gray-300 transition ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
