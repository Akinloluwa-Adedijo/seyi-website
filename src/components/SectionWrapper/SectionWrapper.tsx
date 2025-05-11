import React from "react";

type SectionWrapperProps = {
  title: string;
  children: React.ReactNode;
};
const SectionWrapper = ({ title, children }: SectionWrapperProps) => {
  return (
    <section className="flex flex-col items-center gap-15 p-5 pt-30">
      <h2 className="text-5xl sm:text-7xl text-yellow-300 uppercase font-black">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default SectionWrapper;
