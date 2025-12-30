import CustomImage from "../CustomImage/CustomImage";
import { publications }  from "../../data/publications";
import type { publicationItem } from "../../data/types";

export const PublicationCard = ({ publication }: { publication: publicationItem }) => {
  return (
    <a href={publication.href} target="_blank" rel="noopener noreferrer" className="flex flex-col gap-3 p-5 border-2 border-fg hover:scale-105 hover:border-accent transition-all duration-300 ease-out">

        {/* <div className="img-container h-[350px]" data-title={publication.title}>
          <img src={publication.imgSrc} alt={publication.imgAlt} />
          </div> */}
        <CustomImage
          imgSrc={publication.imgSrc}
          imgAlt={publication.imgAlt}
          width={publication.imgWidth}
          height={publication.imgHeight}
          classname="h-[300px]"
          // linkTitle={publication.title}
          />
        <div className="flex flex-col gap-1 text-xl">
          <div>
            <p className="font-black uppercase">{publication.title}</p>
            {/* PLACEHOLDER FOR ARROW ICON */}
          </div>
          <p>{publication.description}</p>
        </div>
    </a>
  );
};

const Publications = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {publications.slice(0, 3).map((publication) => (
        // <a href={publication.href} target="_blank" rel="noopener noreferrer">
          <PublicationCard key={publication.title} publication={publication} />
        // </a>
      ))}
    </div>
  );
};

export default Publications;
