"use client";

import { usePathname } from "next/navigation";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  const locale = usePathname();
  return (
    <div
      dir={`${locale === "/ar" ? "rtl" : "ltr"}`}
      className=" max-w-full
       lg:max-w-[1100px]
        mx-auto
        rounded-sm
        bg-gray-100"
    >
      {children}
    </div>
  );
};

export default Container;
