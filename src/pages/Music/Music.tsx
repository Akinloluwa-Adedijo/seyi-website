import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import MusicCard from "../../components/MusicCard/MusicCard";
import useDocumentTitle from "../../utils/useDocumentTitle.js";

const musicItems = [
  {
    id: 1,
    linkTitle: "Stream GODOT",
    title: "GODOT: A Performance of Self",
    year: 2025,
    imgSrc: "/gifs/fwut_viz.gif",
    imgAlt: "FWUT Visualizer",
    href: "https://seyithepoet.bandcamp.com/album/godot-act-1-a-performance-of-self",
  },
  {
    id: 2,
    linkTitle: "Stream I will Rather Die",
    title: "I will Rather Die",
    year: 2025,
    imgSrc: "/images/music_images/godot_album_cover.webp",
    imgAlt: "Ṣèyí,ThePoet Profile Image",
    href: "https://seyithepoet.bandcamp.com/track/i-will-rather-die",
  },
  {
    id: 3,
    linkTitle: "Stream I Love You",
    title: "I Love You",
    year: 2025,
    imgSrc: "/images/music_images/godot_album_cover.webp",
    imgAlt: "Ṣèyí,ThePoet Profile Image",
    href: "https://seyithepoet.bandcamp.com/track/i-love-you",
  },
  {
    id: 4,
    linkTitle: "Watch Samuel?",
    title: "Samuel?",
    year: 2024,
    imgSrc: "/gifs/samuel.gif",
    imgAlt: "Ṣamuel Video Preview",
    href: "https://youtu.be/Ha2gxgRqbgM?si=ZuWOIccnviYHfEHE",
  },
];
const Music = () => {
  // const remMusicItems = musicItems.filter((item) => item.id !== 1);
  useDocumentTitle("Ṣèyí,ThePoet | Music");

  return (
    <SectionWrapper title="Music">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {musicItems.map((item) => (
          <MusicCard
            key={item.id}
            title={item.title}
            year={item.year}
            imgSrc={item.imgSrc}
            imgAlt={item.imgAlt}
            href={item.href}
            linkTitle={item.linkTitle}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Music;
