import { motion, useInView } from "motion/react";
import React, { useRef } from "react";

type SectionWrapperProps = {
  title: string;
  children: React.ReactNode;
};

const opacity = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: [0.65, 0, 0.35, 1] },
  },
};

const SectionWrapper = ({ title, children }: SectionWrapperProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, {
    once: true,
  });
  return (
    <main className="py-30">
      <motion.section
        ref={sectionRef}
        className="flex flex-col items-center gap-10 p-5 overflow-hidden"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={opacity}
      >
        <h2 className="text-4xl sm:text-[10vw] text-center text-yellow-300 uppercase font-black">
          {title}
        </h2>

        {children}
      </motion.section>
    </main>
  );
};

export default SectionWrapper;
