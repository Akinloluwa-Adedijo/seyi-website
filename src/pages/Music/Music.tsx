import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import MusicCard from "../../components/MusicCard/MusicCard";

const musicItems = [
  {
    title: "Look at figma file",
    year: 2024,
    imgSrc: "/images/home_images/seyi-landing.jpg",
    imgAlt: "Ṣèyí,ThePoet Profile Image",
    imgWidth: 5464,
    imgHeight: 8192,
    href: "#",
  },
  {
    title: "Look at figma file",
    year: 2024,
    imgSrc: "/images/home_images/seyi-landing.jpg",
    imgAlt: "Ṣèyí,ThePoet Profile Image",
    imgWidth: 5464,
    imgHeight: 8192,
    href: "#",
  },
];
const Music = () => {
  const remMusicItems = musicItems.concat;
  console.log(remMusicItems);

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
        {/* <MusicCard
          title="GODOT - A Performance of Self, Act 1"
          year={2025}
          imgSrc="/seyi-landing.jpg"
          imgAlt="Alt image goes here"
          size="sm"
        />
        <MusicCard
          title="GODOT - A Performance of Self, Act 1"
          year={2025}
          imgSrc="/seyi-landing.jpg"
          imgAlt="Alt image goes here"
          size="sm"
        />
        <MusicCard
          title="GODOT - A Performance of Self, Act 1"
          year={2025}
          imgSrc="/seyi-landing.jpg"
          imgAlt="Alt image goes here"
          size="sm"
        /> */}
      </div>
    </SectionWrapper>
  );
};

export default Music;
