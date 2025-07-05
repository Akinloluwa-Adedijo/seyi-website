import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import MusicCard from "../../components/MusicCard/MusicCard";
import useDocumentTitle from "../../utils/useDocumentTitle.js";

const musicItems = [
  {
    id: 1,
    title: "GODOT: A Performance of Self",
    year: 2025,
    imgSrc: "/gifs/fwut_viz.gif",
    imgAlt: "FWUT Visualizer",
    imgWidth: 800,
    imgHeight: 450,
    href: "https://seyithepoet.bandcamp.com/album/godot-act-1-a-performance-of-self",
  },
  {
    id: 2,
    title: "I will Rather Die",
    year: 2025,
    imgSrc: "/images/music_images/godot_album_cover.webp",
    imgAlt: "Ṣèyí,ThePoet Profile Image",
    imgWidth: 3000,
    imgHeight: 3000,
    href: "https://seyithepoet.bandcamp.com/track/i-will-rather-die",
  },
  {
    id: 3,
    title: "I Love You",
    year: 2025,
    imgSrc: "/images/music_images/godot_album_cover.webp",
    imgAlt: "Ṣèyí,ThePoet Profile Image",
    imgWidth: 3000,
    imgHeight: 3000,
    href: "https://seyithepoet.bandcamp.com/track/i-love-you",
  },
  {
    id: 4,
    title: "Samuel?",
    year: 2024,
    imgSrc: "/gifs/samuel.gif",
    imgAlt: "Ṣamuel Video Preview",
    imgWidth: 800,
    imgHeight: 450,
    href: "https://youtu.be/Ha2gxgRqbgM?si=ZuWOIccnviYHfEHE",
  },
];
const Music = () => {
  const remMusicItems = musicItems.filter((item) => item.id !== 1);
  useDocumentTitle("Ṣèyí,ThePoet | Music");

  return (
    <SectionWrapper title="Music">
      <MusicCard
        title={musicItems[0].title}
        year={musicItems[0].year}
        imgSrc={musicItems[0].imgSrc}
        imgAlt={musicItems[0].imgAlt}
        size="big"
        imgWidth={musicItems[0].imgWidth}
        imgHeight={musicItems[0].imgHeight}
        href={musicItems[0].href}
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {remMusicItems.map((item) => (
          <MusicCard
            key={item.id}
            title={item.title}
            year={item.year}
            imgSrc={item.imgSrc}
            imgAlt={item.imgAlt}
            size="sm"
            imgWidth={item.imgWidth}
            imgHeight={item.imgHeight}
            href={item.href}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Music;
