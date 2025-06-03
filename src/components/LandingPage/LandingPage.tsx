import CustomImage from "../CustomImage/CustomImage";

const landingImage = {
  imgSrc: "/public/images/home_images/seyi-landing.jpg",
  imgAlt: "Ṣèyí,ThePoet Profile Image",
  imgWidth: 5464,
  imgHeight: 8192,
};
const LandingPage = () => {
  return (
    <section className="relative flex flex-col gap-5 min-h-screen max-h-full overflow-hidden pt-30">
      <h1 className="text-4xl sm:text-[10vw] text-yellow-300 font-black uppercase px-5 text-center tracking-tight">
        Șèyí,ThePoet
      </h1>
      <CustomImage
        imgSrc={landingImage.imgSrc}
        imgAlt={landingImage.imgAlt}
        width={landingImage.imgWidth}
        height={landingImage.imgHeight}
        classname="max-h-[110vh]"
      />
    </section>
  );
};

export default LandingPage;
