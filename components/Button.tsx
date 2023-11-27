"use client";
import { usePathname } from "next/navigation";
import React from "react";

interface ButtonProps {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  arrow?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  arrow,
}) => {
  const locale = usePathname();
  const arrowSign = () => {
    if (locale === "/") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3.5"
          stroke="currentColor"
          className="w-3 h-3 group-hover:translate-x-1 transition"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      );
    } else {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3.5}
          stroke="currentColor"
          className="w-3 h-3 group-hover:-translate-x-1 transition"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 4.5L3 12m0 0l7.5 7.5M3 12h18"
          />
        </svg>
      );
    }
  };
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
      group
    relative
    disabled:opacity-70
    disabled:cursor-not-allowed
    rounded-full
    hover:opacity-80
    transition
    w-[150px]
    float-right
    
    ${locale === "/" ? "font-DIN-Bold" : "font-DINArabic-Black"}
    ${outline ? "bg-white" : "bg-webBlue pt-2 pb-2"}
    ${outline ? "border-black" : "border-webBlue"}
    ${outline ? "text-webBlue" : "text-webWhite"}
    ${small ? " py-2" : "py-1"}
    ${small ? "text-sm text-webBlue" : "text-sm"}
    ${small ? "font-light" : "font-semibold"}
    ${small ? "border-[0.8px]" : "border-[1px]"}
    `}
    >
      <span className="flex justify-evenly items-center">
        {label}
        {arrow && arrowSign()}
      </span>
    </button>
  );
};

export default Button;
