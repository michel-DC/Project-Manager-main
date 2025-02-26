import React from "react";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 backdrop-blur-md bg-opacity-50 flex items-center justify-center">
      <div className="bg-white text-black p-4 rounded-lg shadow-lg w-auto max-w-md">
        {children}
        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        >
          Fermer
        </button>
      </div>
    </div>
  );
};

