import type React from "react";

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
  cursorTitle?: string;
  onHome?: boolean;
};

export const MusicCard: React.FC<MusicCardProps> = ({
  title,
  imgSrc,
  imgAlt,
  year,
  href,
  width,
  height,
  className,
  cursorTitle,
}) => {
  return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="flex flex-col gap-2 w-full cursor-pointer" data-cursor={cursorTitle}>
        <img src={imgSrc} alt={imgAlt} className={className} width={width} height={height} loading="lazy" />
        <div className="flex font-medium justify-between">
          <p className=" lg:w-[350px] text-xl" style={{ fontSize: "clamp(24px, 32px, 64px)" }}
            >{title}</p>
          <p className="hidden lg:block text-xl text-secondary" style={{ fontSize: "clamp(24px, 32px, 64px)" }}>{year}</p>
         </div>
      </a>
  );
};
