import { useInView } from "motion/react";
import Description from "../../components/Description/Description";
import LandingPage from "../../components/LandingPage/LandingPage";
import MusicCard from "../../components/MusicCard/MusicCard";

import Publications from "../../components/Publications/Publications";
import { useRef } from "react";
import useDocumentTitle from "../../utils/useDocumentTitle.js";
import { motion } from "motion/react";

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

const opacity = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.65, 0, 0.35, 1] },
  },
};
const Home = () => {
  useDocumentTitle("Ṣèyí,ThePoet | Artist");
  const homeRef = useRef<HTMLDivElement>(null);
  const inView = useInView(homeRef, {
    once: true,
  });
  return (
    <main
      ref={homeRef}
      className="flex flex-col items-center gap-20 overflow-hidden w-full "
    >
      <LandingPage />
      <Description />
      <section className="flex flex-col gap-5 w-full pt-20">
        <h2 className="font-instrument text-5xl md:text-7xl lg:text-8xl italic text-center">
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
            href={music.href}
            linkTitle={music.linkTitle}
          />
          );
        })}
      </section>
      <section className="w-full flex flex-col gap-10 p-5">
        <h2 className="font-instrument text-5xl md:text-7xl lg:text-8xl italic">
          Publications
        </h2>
        <Publications />
      </section>
    </main>
  );
};

export default Home;
