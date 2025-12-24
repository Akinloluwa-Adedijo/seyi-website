import type React from "react";
import CustomImage from "../CustomImage/CustomImage";

type MusicCardProps = {
  title: string;
  imgSrc: string;
  imgAlt: string;
  year: number;
  href: string;
  width: number;
  height: number;
  linkTitle?: string;
  className?: string;
};

const MusicCard: React.FC<MusicCardProps> = ({
  title,
  imgSrc,
  imgAlt,
  year,
  href,
  width,
  height,
  // linkTitle,
  className,
}) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <a href={href} target="_blank" rel="noopener noreferrer">
        {/* <div className={`img-container ${className}`} data-title={linkTitle}>
          <img src={imgSrc} alt={imgAlt} />
        </div> */}
        <CustomImage 
          imgSrc={imgSrc}
          imgAlt={imgAlt}
          width={width}
          height={height}
          classname={className}
          // linkTitle={linkTitle}
        />
      <div className="flex font-medium justify-between">
        <p className=" lg:w-[350px] text-xl" style={{ fontSize: "clamp(24px, 32px, 64px)" }}
          >{title}</p>
        <p className="hidden lg:block text-xl text-secondary" style={{ fontSize: "clamp(24px, 32px, 64px)" }}>{year}</p>
      </div>
      </a>
    </div>
  );
};

export default MusicCard;
