import Description from "../../components/Description/Description";
import LandingPage from "../../components/LandingPage/LandingPage";
import MusicCard from "../../components/MusicCard/MusicCard";
import Publications from "../../components/Publications/Publications";

const Home = () => {
  return (
    <main className="flex flex-col items-center gap-25">
      <LandingPage imgSrc="/seyi-landing.jpg" title="Șèyí,ThePoet" />
      <Description />
      <section className="flex flex-col gap-10 p-5">
        <h2 className="text-5xl uppercase font-bold">Music</h2>
        <MusicCard
          title="GODOT - A Performance of Self, Act 1"
          year={2025}
          imgSrc="/seyi-landing.jpg"
          imgAlt="Alt image goes here"
          size="big"
        />
        <MusicCard
          title="GODOT"
          year={2025}
          imgSrc="/seyi-landing.jpg"
          imgAlt="Alt image goes here"
          size="big"
        />
      </section>
      <section className="w-full flex flex-col gap-10 p-5">
        <h2 className="text-5xl uppercase font-bold">Publications</h2>
        <Publications />
      </section>
    </main>
  );
};

export default Home;
