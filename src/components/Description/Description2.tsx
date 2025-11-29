import {  useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import {useGSAP} from "@gsap/react";
import ParallaxImage from "../ParallaxImage";
gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);
const phrase =
  "Șèyí,ThePoet is a passionate spoken word artist, model and creative director; who brings raw emotion and profound insight to the stage. His performances, rich with themes of mental health and the human experience, have touched hearts and sparked conversations.";

const Description2 = () => {
  const charsRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const element = charsRef.current;
    if (!element) return;

    const split = new SplitText(element, {
      type: "lines,words",
      mask: "lines",
      linesClass: "line-js",
      wordsClass: "word-js",
    });

      gsap.from(split.lines, {
        scrollTrigger: {
          start: "top bottom",
          trigger: element,
        },
        duration: 1.8,
        yPercent: 100,
        delay: 0.5,
        ease: "expo.out",
        stagger: 0.06,
      });
  }, []);
  return (
    <section className="flex flex-col md:flex-row w-full min-h-[50vh] text-fg gap-5" ref={containerRef}>
      {/* Left Content Side */}
      <div className="w-full md:w-1/2 flex flex-col justify-between px-5 gap-8">
        <div>
          <h2 className="font-instrument text-5xl md:text-7xl lg:text-8xl italic">
            About
          </h2>
        </div>

        <div className="flex flex-col justify-between gap-8 mt-auto">
          <p
            ref={charsRef}
            // className="max-w-xl"
            style={{ fontSize: "clamp(24px, 2vw, 2rem)" }}
          >
            {phrase}
          </p>

        </div>
      </div>

      {/* Right Image Side */}
      {/* <div className="w-full md:w-1/2  relative">
        <img
          src="/images/update_images/godot_show/godot_show_7.webp"
          alt="Portrait of Seyi"
          className="w-full h-full object-cover"
        />
      </div> */}
      <ParallaxImage image="/images/update_images/godot_show/godot_show_7.webp" alt="Portrait of Seyi" containerStyle="w-full md:w-1/2" containerRef={containerRef} />
    </section>
  );  
};

export default Description2;