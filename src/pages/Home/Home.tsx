import Description from "../../components/Description/Description";
import LandingPage from "../../components/LandingPage/LandingPage";
import MusicCard from "../../components/MusicCard/MusicCard";
import UpdateCard from "../../components/UpdateCard/UpdateCard";

const Home = () => {
  return (
    <main className="flex flex-col items-center gap-25">
      <LandingPage imgSrc="/seyi-landing.jpg" title="Șèyí,ThePoet" />
      <Description />
      <section className=" flex flex-col gap-10 p-5">
        <h2 className="text-5xl uppercase font-bold">Music</h2>
        <MusicCard
          title="GODOT - A Performance of Self, Act 1"
          year={2025}
          imgSrc="/seyi-landing.jpg"
          imgAlt="Alt image goes here"
        />
        <MusicCard
          title="GODOT"
          year={2025}
          imgSrc="/seyi-landing.jpg"
          imgAlt="Alt image goes here"
        />
      </section>
      <section className=" flex flex-col gap-10 p-5">
        <h2 className="text-5xl uppercase font-bold">Updates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <UpdateCard
            title="Upcoming Album: OLUWASEYI, THE PROTAGONIST "
            imgSrc="/seyi-landing.jpg"
            imgAlt="Alt image goes here"
          />
          <UpdateCard
            title="Upcoming Album: OLUWASEYI, THE PROTAGONIST "
            imgSrc="/seyi-landing.jpg"
            imgAlt="Alt image goes here"
          />
          <UpdateCard
            title="Upcoming Album: OLUWASEYI, THE PROTAGONIST "
            imgSrc="/seyi-landing.jpg"
            imgAlt="Alt image goes here"
          />
          <UpdateCard
            title="Upcoming Album: OLUWASEYI, THE PROTAGONIST "
            imgSrc="/seyi-landing.jpg"
            imgAlt="Alt image goes here"
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
