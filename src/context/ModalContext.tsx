"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const ModalContext = createContext({
  isOpen: false,
  content: "",
  openModal: (content: string) => {},
  closeModal: () => {},
});

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState("");

  useEffect(() => {
    const modalParam = searchParams.get("modal");
    const contentParam = searchParams.get("content");

    if (modalParam === "true") {
      setIsOpen(true);
      setContent(contentParam || "random text bla bla bla");
    } else {
      setIsOpen(false);
      setContent("");
    }
  }, [searchParams.toString()]);

  const openModal = (newContent: string) => {
    router.push(`?modal=true&content=${encodeURIComponent(newContent)}`);
  };

  const closeModal = () => {
    router.push("?");
  };

  return (
    <ModalContext.Provider value={{ isOpen, content, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
