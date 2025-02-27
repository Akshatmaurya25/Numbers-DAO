"use client";

import { useModal } from "@/context/ModalContext";
import { X } from "lucide-react";

const Modal = () => {
  const { isOpen, content, closeModal } = useModal();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative">

        <button className="absolute top-2 right-2 text-zinc-600 hover:text-black" onClick={closeModal}>
          <X size={20} />
        </button>

        <h2 className="text-xl font-bold mb-2 text-black">Modalaaa</h2>
        <p className="text-zinc-600">{content}</p>

        <div className="mt-4 flex justify-end space-x-2">
          <button className="px-4 py-2 bg-gray-300 rounded" onClick={closeModal}>Cancel</button>
          <button className="px-4 py-2 bg-black text-white rounded" onClick={closeModal}>OK</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
