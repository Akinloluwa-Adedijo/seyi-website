// import { useInView } from "motion/react";
import Description from "../../components/Description/Description";
import LandingPage from "../../components/LandingPage/LandingPage";
import MusicCard from "../../components/MusicCard/MusicCard";

import Publications from "../../components/Publications/Publications";
import { useRef } from "react";
import useDocumentTitle from "../../utils/useDocumentTitle.js";
import { Link } from "react-router-dom";

const homeMusic = [
  {
    title: "GODOT: A Performance of Self",
    linkTitle: "Stream GODOT",
    year: 2025,
    imgSrc: "/gifs/fwut_viz.gif",
    imgAlt: "FWUT Visualizer",
    imgWidth: 800,
    imgHeight: 450,
    href: "https://seyithepoet.bandcamp.com/album/godot-act-1-a-performance-of-self",
  },
  {
    title: "Samuel?",
    linkTitle: "Watch Samuel?",
    year: 2024,
    imgSrc: "/gifs/samuel.gif",
    imgAlt: "Ṣamuel? Video Preview",
    imgWidth: 800,
    imgHeight: 450,
    href: "https://www.youtube.com/watch?v=Ha2gxgRqbgM&pp=0gcJCcEJAYcqIYzv",
  },
];

// const opacity = {
//   hidden: {
//     opacity: 0,
//     y: 100,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 1, ease: [0.65, 0, 0.35, 1] },
//   },
// };
const Home = () => {
  useDocumentTitle("Ṣèyí,ThePoet | Artist");
  const homeRef = useRef<HTMLDivElement>(null);
  // const inView = useInView(homeRef, {
  //   once: true,
  // });
  return (
    <main
      ref={homeRef}
      className="flex flex-col items-center gap-20 overflow-hidden w-full "
    >
      <LandingPage />
      <Description />
      <section className="flex flex-col gap-5 w-full pt-20 p-5">
        <h2 className="font-instrument text-5xl md:text-7xl lg:text-8xl italic">
          Music
        </h2>

        {homeMusic.map((music, index) => {
          return (
          <MusicCard
            key={index}
            title={music.title}
            year={music.year}
            imgSrc={music.imgSrc}
            imgAlt={music.imgAlt}
            width={music.imgWidth}
            height={music.imgHeight}
            href={music.href}
            linkTitle={music.linkTitle}
            className="w-full h-[500px] lg:min-h-screen"
          />
          );
        })}
      </section>
      <section className="w-full flex flex-col gap-10 p-5 pb-20">
        <div className="flex items-end justify-between">
          <h2 className="font-instrument text-5xl md:text-7xl lg:text-8xl italic">
            In the Press
          </h2>
          <Link to="/press">See More</Link>
        </div>
        <Publications />
      </section>
    </main>
  );
};

export default Home;
