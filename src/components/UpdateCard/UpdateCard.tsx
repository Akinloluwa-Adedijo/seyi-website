import React from "react";

type UpdateCardProps = {
  title: string;
  imgSrc: string;
  imgAlt: string;
};
const UpdateCard = ({ title, imgSrc, imgAlt }: UpdateCardProps) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="max-h-[250px] overflow-hidden">
        <img src={imgSrc} alt={imgAlt} className="object-cover" />
      </div>
      <div className="flex flex-col gap-1 text-2xl">
        <p>{title}</p>
        <a
          href="#"
          className="underline hover:no-underline text-black-300 hover:text-black-50 transition-colors ease-in-out duration-200"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default UpdateCard;
