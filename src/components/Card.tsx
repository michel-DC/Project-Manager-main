import React from "react";

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="p-4 border border-gray-700 rounded-lg">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-400 mt-2">{description}</p>
    </div>
  );
};

export default Card;
