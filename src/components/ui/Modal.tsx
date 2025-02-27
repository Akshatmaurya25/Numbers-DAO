"use client";

import { useModal } from "@/context/ModalContext";
import { X } from "lucide-react";

const Modal = () => {
  const { isOpen, content, closeModal } = useModal();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative">
        {/* <button className="absolute top-2 right-2 text-zinc-600 hover:text-black" onClick={closeModal}>
          <X size={20} />
        </button> */}

        <div>{content}</div>
      </div>
    </div>
  );
};

export default Modal;
