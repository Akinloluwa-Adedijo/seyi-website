import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import {useGSAP} from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const phrase =
  "Șèyí,ThePoet is a passionate spoken word artist, model and creative director; who brings raw emotion and profound insight to the stage. His performances, rich with themes of mental health and the human experience, have touched hearts and sparked conversations.";

const Description3 = () => {
  const charsRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const element = charsRef.current;


    const split = new SplitText(element, {
      type: "lines,words",
      mask: "lines",
      linesClass: "line-js",
      wordsClass: "word-js",
    });

    // const ctx = gsap.context(() => {
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
    // },  );

  }, []);

  return (
    <section className="px-5 w-full flex flex-col gap-10 overflow-hidden">
      <h2 className="font-instrument text-5xl md:text-7xl lg:text-8xl italic mb-8">
        About
      </h2>
        <p
          ref={charsRef}
          className="font-medium leading-tight"
          style={{ fontSize: "clamp(24px, 3.5vw, 10em)" }}
        >
          {phrase}
        </p>

    </section>
  );
};

export default Description3;