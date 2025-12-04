import CustomImage from "../CustomImage/CustomImage";
interface publicationItem {
  title: string;
  imgSrc: string;
  imgAlt: string;
  imgWidth: number;
  imgHeight: number;
  href: string;
  year?: string;
}
const publications: publicationItem[] = [
  {
    title: "Record Niche",
    href: "https://recordniche.com/seyithepoet-unveils-godot-a-performance-of-self-a-dreamy-and-poetic-spoken-word-odyssey",
    imgSrc:'https://recordniche.com/wp-content/uploads/2025/12/Album-Cover-3.png',
    imgAlt: "Record Niche Article Image",
    imgWidth: 500,
    imgHeight: 500,
    year: "2025",
  },
  {
    title: "USA Music",
    href: "https://usa-music.com/new-release-godot-a-performance-of-self-by-seyithepoet-delivers-cinematic-atmosphere-and-deep-emotion",
    imgSrc:'https://usa-music.com/wp-content/uploads/2025/12/S8A981422-1536x1351.jpg',
    imgAlt: "USA Music Article Image",
    imgWidth: 500,
    imgHeight: 500,
    year: "2025",
  },
  {
    title: "Discover Music",
    href: "https://discovermusic.fm/seyithepoet-drops-godot-a-performance-of-self-a-reflective-journey-through-identity-and-heartfelt-storytelling",
    imgSrc:'https://discovermusic.fm/wp-content/uploads/2025/12/Seyi_S8A985822-copy-scaled.jpg',
    imgAlt: "Discover Music Article Image",
    imgWidth: 500,
    imgHeight: 500,
    year: "2025",
  },
  {
    title: "GrooverMag",
    href: "https://groovermag.com/experience-seyithepoets-godot-a-performance-of-self-a-lush-blend-of-spoken-word-atmosphere-and-modern-artistry",
    imgSrc:'https://groovermag.com/wp-content/uploads/2025/12/Album-Cover-3.png',
    imgAlt: "GrooverMag Article Image",
    imgWidth: 500,
    imgHeight: 500,
    year: "2025",
  },
  {
    title: "CityBeats",
    href: "https://citybeats.net/seyithepoet-releases-godot-a-performance-of-self-an-immersive-spoken-word-album-exploring-love-pressure-and-self-discovery/",
    imgSrc:'https://citybeats.net/wp-content/uploads/2025/12/Wayne-Photo-Shoot-main-min22-2048x1416.jpg',
    imgAlt: "CityBeats Article Image",
    imgWidth: 500,
    imgHeight: 500,
    year: "2025",
  },
  {
    title: "Mixtaped",
    href: "https://mixtaped.co.uk/seyithepoet-presents-godot-a-performance-of-self-a-powerful-fusion-of-poetic-storytelling-and-cinematic-sound",
    imgSrc:'https://mixtaped.co.uk/wp-content/uploads/2025/12/Album-Cover-3.png',
    imgAlt: "Mixtaped Article Image",
    imgWidth: 500,
    imgHeight: 500,
    year: "2025",
  },
  {
    title: "Daily Hive",
    href: "https://dailyhive.com/canada/jimpinu-photography-black-history-month",
    imgSrc: "/images/publication_images/publication-1.webp",
    imgAlt: "img text goes",
    imgWidth: 500,
    imgHeight: 500,
    year: "2023",
  },
  {
    title: "Gmaro Magazine",
    href: "https://www.magcloud.com/browse/issue/2388706",
    imgSrc: "/images/publication_images/publication-2.webp",
    imgAlt: "img text goes",
    imgWidth: 500,
    imgHeight: 500,
    year: "2023",
  },
  {
    title: "Pakistan in Voogue",
    href: "https://pakistaninvogue.com/vancouver-fashion-week-2022/",
    imgSrc: "/images/publication_images/publication-3.webp",
    imgAlt: "img text goes",
    imgWidth: 500,
    imgHeight: 500,
    year: "2022",
  },
  {
    title: "Vogue MX",
    href: "https://www.vogue.mx/moda/galeria/vancouver-fashion-week-2022-como-la-plataforma-de-disenadores-responsables",
    imgSrc: "/images/publication_images/publication-4.webp",
    imgAlt: "img text goes",
    imgWidth: 500,
    imgHeight: 500,
    year: "2022",
  },
];

const PublicationCard = ({ publication }: { publication: publicationItem }) => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <CustomImage
          imgSrc={publication.imgSrc}
          imgAlt={publication.imgAlt}
          width={publication.imgWidth}
          height={publication.imgHeight}
          classname={"max-h-[250px]"}
        />
        <div className="flex flex-col gap-1 text-xl">
          <p>{publication.title}</p>
          {/* <a
            href={publication.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline text-black-300 hover:text-black-50 transition-colors ease-in-out duration-200"
          >
            View Article
          </a> */}
        </div>
      </div>
    </>
  );
};

const Publications = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {publications.map((publication) => (
        <a href={publication.href} target="_blank" rel="noopener noreferrer">
          <PublicationCard key={publication.title} publication={publication} />
        </a>
      ))}
    </div>
  );
};

export default Publications;
