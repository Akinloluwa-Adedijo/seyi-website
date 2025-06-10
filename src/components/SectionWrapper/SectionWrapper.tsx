import React from "react";

type SectionWrapperProps = {
  title: string;
  children: React.ReactNode;
};
const SectionWrapper = ({ title, children }: SectionWrapperProps) => {
  return (
    <main className="py-30">
      <section className="flex flex-col items-center gap-10 p-5">
        <h2 className="text-4xl sm:text-[10vw] text-center text-yellow-300 uppercase font-black">
          {title}
        </h2>
        {children}
      </section>
    </main>
  );
};

export default SectionWrapper;
