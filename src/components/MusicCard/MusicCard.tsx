type MusicCardProps = {
  title: string;
  imgSrc: string;
  imgAlt: string;
  year: number;
  size: string;
};
const MusicCard = ({ title, imgSrc, imgAlt, year, size }: MusicCardProps) => {
  return (
    <div className="flex flex-col gap-2 relative">
      <a href="#">
        <div className="absolute top-5 left-5">
          <img className="w-10" src="/seyi-logo.svg" alt="Ṣèyí,ThePoet Logo" />
        </div>
        <div
          className={`${
            size === "sm" ? "max-h-[350px]" : "max-h-screen"
          }  overflow-hidden`}
        >
          <img src={imgSrc} alt={imgAlt} className="object-cover" />
        </div>
      </a>
      <div className="flex font-semibold justify-between">
        <p className="w-[150px] sm:w-[350px] text-xl">{title}</p>
        <p className="text-xl text-black-300">{year}</p>
      </div>
    </div>
  );
};

export default MusicCard;
