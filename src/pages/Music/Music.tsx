import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import MusicCard from "../../components/MusicCard/MusicCard";

const musicItems = [
  {
    id: 1,
    title: "Look at figma file",
    year: 2024,
    imgSrc: "/images/home_images/seyi-landing.jpg",
    imgAlt: "Ṣèyí,ThePoet Profile Image",
    imgWidth: 5464,
    imgHeight: 8192,
    href: "#",
  },
  {
    id: 2,
    title: "Look at figma file",
    year: 2024,
    imgSrc: "/images/home_images/seyi-landing.jpg",
    imgAlt: "Ṣèyí,ThePoet Profile Image",
    imgWidth: 5464,
    imgHeight: 8192,
    href: "#",
  },
  {
    id: 3,
    title: "Look at figma file",
    year: 2024,
    imgSrc: "/images/home_images/seyi-landing.jpg",
    imgAlt: "Ṣèyí,ThePoet Profile Image",
    imgWidth: 5464,
    imgHeight: 8192,
    href: "#",
  },
  {
    id: 4,
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
  const remMusicItems = musicItems.filter((item) => item.id !== 1);
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

        {/* Uncomment the following lines to add more MusicCards */}
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
