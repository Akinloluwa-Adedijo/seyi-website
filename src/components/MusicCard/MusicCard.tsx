import { motion, useScroll, useSpring, useTransform } from "motion/react";
import type React from "react";

type MusicCardProps = {
  title: string;
  imgSrc: string;
  imgAlt: string;
  year: number;
  size: string;
};
const MusicCard: React.FC<MusicCardProps> = ({
  title,
  imgSrc,
  imgAlt,
  year,
  size,
}) => {
  // Get the scroll progress (0 to 1)
  const { scrollYProgress } = useScroll();

  //Map the scroll progress to a rotation value (0 to 360 degrees)
  const rotate = useTransform(
    useSpring(scrollYProgress, {
      stiffness: 50,
      damping: 20,
      restDelta: 0.001,
    }),
    [0, 1],
    [0, 360]
  );
  return (
    <div className="flex flex-col gap-2 relative">
      <a href="#">
        <div className="absolute top-5 left-5">
          <motion.img
            className="w-10"
            src="/seyi-logo.svg"
            alt="Ṣèyí,ThePoet Logo"
            style={{ rotate }}
          />
        </div>
        <div
          className={`${
            size === "sm" ? "max-h-[350px]" : "max-h-screen"
          }  overflow-hidden`}
        >
          <img src={imgSrc} alt={imgAlt} className="object-cover" />
        </div>
      </a>
      <div className="flex font-medium justify-between">
        <p className="w-[150px] sm:w-[350px] text-xl">{title}</p>
        <p className="text-xl text-black-300">{year}</p>
      </div>
    </div>
  );
};

export default MusicCard;
