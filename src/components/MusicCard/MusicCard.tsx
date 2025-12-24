import type React from "react";

type MusicCardProps = {
  title: string;
  imgSrc: string;
  imgAlt: string;
  year: number;
  href: string;
  linkTitle: string;
};

const MusicCard: React.FC<MusicCardProps> = ({
  title,
  imgSrc,
  imgAlt,
  year,
  href,
  linkTitle,
}) => {
  return (
    <div className="flex flex-col gap-2 w-full ">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <div className="img-container h-[500px] lg:min-h-screen" data-title={linkTitle}>
          <img src={imgSrc} alt={imgAlt} />
        </div>
      </a>
      <div className="flex font-medium justify-between">
        <p className=" lg:w-[350px] text-xl" style={{ fontSize: "clamp(24px, 32px, 64px)" }}
          >{title}</p>
        <p className="hidden lg:block text-xl text-secondary" style={{ fontSize: "clamp(24px, 32px, 64px)" }}>{year}</p>
      </div>
    </div>
  );
};

export default MusicCard;
