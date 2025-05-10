import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

type LandingPageProps = {
  title: string;
  imgSrc: string;
};
const LandingPage = ({ title, imgSrc }: LandingPageProps) => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.5,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });

    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1;
  };
  return (
    <section className="relative flex flex-col min-h-screen max-h-full overflow-hidden">
      <div className="max-h-[110vh]">
        <img
          // src="https://placehold.co/600x400/orange/white"
          src={imgSrc}
          alt="Ṣèyí,ThePoet Profile Image"
          loading="lazy"
          className="object-cover"
        />
      </div>

      {/* Slider Container */}
      <div className="absolute top-1/2 sm:top-[calc(100vh-350px)]">
        {/* Slider */}
        <div ref={slider} className="relative whitespace-nowrap">
          <p
            ref={firstText}
            className="relative m-0 text-yellow-300 text-9xl sm:text-[350px] font-black pr-50 uppercase"
          >
            {title}
          </p>
          <p
            ref={secondText}
            className="absolute left-[100%] top-0 m-0 text-yellow-300 text-9xl sm:text-[350px] font-black pr-50 uppercase"
          >
            {title}
          </p>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
