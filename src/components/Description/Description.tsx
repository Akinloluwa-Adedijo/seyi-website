import { motion, useInView } from "motion/react";
import { useRef } from "react";

const phrases = [
  "Șèyí,ThePoet is a passionate spoken word artist, model and creative director; who brings raw emotion and profound insight to the stage.",
  "His performances, rich with themes of mental health and the human experience, have touched hearts and sparked conversations.",
];

const MaskText = () => {
  const body = useRef(null);
  const isInView = useInView(body, { once: true, margin: "-75%" });

  const animation = {
    initial: { y: "100%" },

    enter: (i: number) => ({
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i,
      },
    }),
  };

  return (
    <div ref={body}>
      {phrases.map((phrase, index) => {
        return (
          <div
            key={index}
            className="text-[5vw] text-yellow-300 m-0 font-medium text-center overflow-hidden"
          >
            <motion.p
              custom={index}
              variants={animation}
              initial="initial"
              animate={isInView ? "enter" : ""}
            >
              {phrase}
            </motion.p>
          </div>
        );
      })}
    </div>
  );
};
const Description = () => {
  return (
    <section className="p-5">
      <MaskText />
    </section>
  );
};

export default Description;
