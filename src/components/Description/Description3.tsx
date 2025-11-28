import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const phrase =
  "Șèyí,ThePoet is a passionate spoken word artist, model and creative director; who brings raw emotion and profound insight to the stage. His performances, rich with themes of mental health and the human experience, have touched hearts and sparked conversations.";

const Description3 = () => {
  const charsRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const element = charsRef.current;
    if (!element) return;

    const split = new SplitText(element, {
      type: "lines,words",
      linesClass: "line-js",
      wordsClass: "word-js",
    });

    const ctx = gsap.context(() => {
      gsap.from(split.words, {
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
    }, element);

    return () => {
      ctx.revert();
      split.revert();
    };
  }, []);

  return (
    <section className="p-5 md:p-10 w-full flex flex-col gap-10 items-center justify-center ">
      <h2 className="font-instrument text-5xl md:text-7xl lg:text-8xl italic mb-8">
        About
      </h2>
      {/* <div className=""> */}
        <p
          ref={charsRef}
          className="font-medium leading-tight"
          style={{ fontSize: "clamp(1.5rem, 3.5vw, 3.5rem)" }}
        >
          {phrase}
        </p>
      {/* </div> */}
    </section>
  );
};

export default Description3;