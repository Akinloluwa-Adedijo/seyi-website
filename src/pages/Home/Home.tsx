import Description from "../../components/Description/Description";
import LandingPage from "../../components/LandingPage/LandingPage";
import MusicCard from "../../components/MusicCard/MusicCard";

import Publications from "../../components/Publications/Publications";

const homeMusic = [
  {
    title: "GODOT: A Performance of Self",
    year: 2025,
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
const Home = () => {
  return (
    <main className="flex flex-col items-center gap-20 overflow-hidden py-30">
      <LandingPage />
      <Description />
      <section className="flex flex-col gap-10 p-5">
        <h2 className="text-4xl uppercase font-medium text-center">Music</h2>

        {homeMusic.map((music, index) => {
          return (
            <MusicCard
              key={index}
              title={music.title}
              year={music.year}
              imgSrc={music.imgSrc}
              imgAlt={music.imgAlt}
              size="big"
              imgWidth={music.imgWidth}
              imgHeight={music.imgHeight}
              href={music.href}
            />
          );
        })}
      </section>
      <section className="w-full flex flex-col gap-10 p-5">
        <h2 className="text-4xl uppercase font-medium text-center">
          Publications
        </h2>
        <Publications />
      </section>
    </main>
  );
};

export default Home;
