type LandingPageProps = {
  title: string;
  imgSrc: string;
};
const LandingPage = ({ title, imgSrc }: LandingPageProps) => {
  return (
    <section className="relative flex flex-col gap-5 min-h-screen max-h-full overflow-hidden pt-30">
      <h1 className="text-4xl sm:text-[10vw] text-yellow-300 font-black uppercase px-5 text-center tracking-tight">
        {title}
      </h1>
      <div className="max-h-[110vh]">
        <img
          src={imgSrc}
          alt="Ṣèyí,ThePoet Profile Image"
          loading="lazy"
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default LandingPage;
