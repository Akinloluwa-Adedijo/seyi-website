import { publications }  from "../../data/publications";
import type { publicationItem } from "../../data/types";

export const PublicationCard = ({ publication }: { publication: publicationItem }) => {
  return (
    <a href={publication.href} target="_blank" rel="noopener noreferrer" className="flex flex-col gap-3 p-2 border-2 border-fg hover:scale-105 hover:border-accent transition-all duration-300 ease-out">
          <img src={publication.imgSrc} alt={publication.imgAlt} className=" w-full object-cover aspect-square" />
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
          <PublicationCard key={publication.title} publication={publication} />
      ))}
    </div>
  );
};

export default Publications;
