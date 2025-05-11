import { useScroll } from "motion/react";
import React, { useRef } from "react";

type MusicCardProps = {
  title: string;
  imgSrc: string;
  imgAlt: string;
  year: number;
};
const MusicCard = ({ title, imgSrc, imgAlt, year }: MusicCardProps) => {
  return (
    <div className="flex flex-col gap-5 relative">
      <a href="#">
        <div className="absolute top-5 left-5">
          <img className="w-10" src="/seyi-logo.svg" alt="Ṣèyí,ThePoet Logo" />
        </div>
        <div className="max-h-[650px] overflow-hidden">
          <img src={imgSrc} alt={imgAlt} className="object-cover" />
        </div>
      </a>
      <div className="flex font-semibold justify-between">
        <p className="w-[150px] sm:w-[350px] text-2xl">{title}</p>
        <p className="text-2xl text-black-300">{year}</p>
      </div>
    </div>
  );
};

export default MusicCard;
