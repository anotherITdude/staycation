import React from "react";

interface SectionInterface {
  children?: React.ReactNode;
}
const Section: React.FC<SectionInterface> = ({ children }) => {
  return <div className="pt-8 pb-8 pl-4 pr-4 min-h-[500px]">{children}</div>;
};

export default Section;
