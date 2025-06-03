import type React from "react";
import CustomImage from "../CustomImage/CustomImage";

type MusicCardProps = {
  title: string;
  imgSrc: string;
  imgAlt: string;
  imgWidth: number;
  imgHeight: number;
  year: number;
  size: string;
  href: string;
};

const MusicCard: React.FC<MusicCardProps> = ({
  title,
  imgSrc,
  imgAlt,
  imgWidth,
  imgHeight,
  year,
  size,
  href,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <a href={href}>
        <CustomImage
          imgSrc={imgSrc}
          imgAlt={imgAlt}
          width={imgWidth}
          height={imgHeight}
          classname={`${size === "sm" ? "max-h-[400px]" : "max-h-screen"}`}
        />
      </a>
      <div className="flex font-medium justify-between">
        <p className="w-[150px] sm:w-[350px] text-xl">{title}</p>
        <p className="text-xl text-black-300">{year}</p>
      </div>
    </div>
  );
};

export default MusicCard;
