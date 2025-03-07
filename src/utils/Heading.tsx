import React, { ElementType } from "react";
import clsx from "clsx";

interface HeadingProps {
  size?: "h1" | "h2" | "h3" | "h4";
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
  gradient?: boolean;
  underlineStyle?: "gradient" | "wave" | "animated" | "none";
}

const Heading: React.FC<HeadingProps> = ({
  size = "h2",
  children,
  className = "",
  align = "left",
  gradient = false,
  underlineStyle = "none",
}) => {
  const baseStyles = "font-bold tracking-tight relative inline-block";

  const sizeStyles = {
    h1: "text-4xl md:text-6xl",
    h2: "text-3xl md:text-5xl",
    h3: "text-2xl md:text-4xl",
    h4: "text-xl md:text-3xl",
  } as const;

  const alignStyles = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  } as const;

  const gradientStyles = gradient
    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
    : "text-gray-900 dark:text-white";

  const underlineStyles = {
    none: "",
    gradient:
      "after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[3px] after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 after:rounded-full after:content-['']",
    wave: "after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[8px] after:bg-[url('/wave.svg')] after:bg-repeat-x after:bg-center after:content-['']",
    animated:
      "after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[3px] after:bg-blue-500 after:rounded-full after:transition-all after:duration-300 after:ease-in-out hover:after:w-full",
  };

  const HeadingTag: ElementType = size;

  return (
    <HeadingTag
      className={clsx(
        baseStyles,
        sizeStyles[size],
        alignStyles[align],
        gradientStyles,
        underlineStyles[underlineStyle],
        className
      )}
    >
      {children}
    </HeadingTag>
  );
};

export default Heading;
