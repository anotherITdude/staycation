"use client";

interface ContainerProps {
  children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      className=" max-w-full
       lg:max-w-[1100px]
        mx-auto
        rounded-sm
        bg-white"
    >
      {children}
    </div>
  );
};

export default Container;
