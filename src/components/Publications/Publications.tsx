interface publicationItem {
  title: string;
  imgSrc: string;
  imgAlt?: string;
  href: string;
}
const publications: publicationItem[] = [
  {
    title: "Daily Hive",
    href: "https://dailyhive.com/canada/jimpinu-photography-black-history-month",
    imgSrc: "/images/publication_images/publication-1.webp",
    imgAlt: "img text goes",
  },
  {
    title: "Gmaro Magazine",
    href: "https://www.magcloud.com/browse/issue/2388706",
    imgSrc: "/images/publication_images/publication-2.webp",
    imgAlt: "img text goes",
  },
  {
    title: "Pakistan in Voogue",
    href: "https://pakistaninvogue.com/vancouver-fashion-week-2022/",
    imgSrc: "/images/publication_images/publication-3.webp",
    imgAlt: "img text goes",
  },
  {
    title: "Vogue MX",
    href: "https://www.vogue.mx/moda/galeria/vancouver-fashion-week-2022-como-la-plataforma-de-disenadores-responsables",
    imgSrc: "/images/publication_images/publication-4.webp",
    imgAlt: "img text goes",
  },
];

const PublicationCard = ({ publication }: { publication: publicationItem }) => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="max-h-[250px] overflow-hidden">
          <img
            src={publication.imgSrc}
            alt={publication.imgAlt}
            className="object-cover w-full"
          />
        </div>
        <div className="flex flex-col gap-1 text-xl">
          <p>{publication.title}</p>
          <a
            href={publication.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline text-black-300 hover:text-black-50 transition-colors ease-in-out duration-200"
          >
            Read more
          </a>
        </div>
      </div>
    </>
  );
};

const Publications = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {publications.map((publication) => (
        <PublicationCard key={publication.title} publication={publication} />
      ))}
    </div>
  );
};

export default Publications;
