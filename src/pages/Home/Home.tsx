import Description from "../../components/Description/Description";
import LandingPage from "../../components/LandingPage/LandingPage";

const descriptionText =
  "Șèyí,ThePoet is a passionate spoken word artist, model and creative director; who brings raw emotion and profound insight to the stage. His performances, rich with themes of mental health and the human experience, have touched hearts and sparked conversations.";
const Home = () => {
  return (
    <main>
      <LandingPage imgSrc="/seyi-landing.jpg" title="Șèyí,ThePoet" />
      <Description text={descriptionText} />
    </main>
  );
};

export default Home;
