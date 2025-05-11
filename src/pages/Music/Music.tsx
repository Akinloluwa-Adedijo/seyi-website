import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import MusicCard from "../../components/MusicCard/MusicCard";

const Music = () => {
  return (
    <SectionWrapper title="Music">
      <MusicCard
        title="GODOT - A Performance of Self, Act 1"
        year={2025}
        imgSrc="/seyi-landing.jpg"
        imgAlt="Alt image goes here"
        size="big"
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
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
        />
        <MusicCard
          title="GODOT - A Performance of Self, Act 1"
          year={2025}
          imgSrc="/seyi-landing.jpg"
          imgAlt="Alt image goes here"
          size="sm"
        />
      </div>
    </SectionWrapper>
  );
};

export default Music;
