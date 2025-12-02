import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import ParallaxImage from "../ParallaxImage";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, SplitText);

const images = [
  { src: "/images/landing/home-1.jpg", alt: "Carousel Image 1" },
  { src: "/images/landing/home-2.jpg", alt: "Carousel Image 2" },
  { src: "/images/landing/home-3.jpg", alt: "Carousel Image 3" },
  { src: "/images/landing/home-4.jpg", alt: "Carousel Image 4" },
  { src: "/images/landing/home-5.jpg", alt: "Carousel Image 5" },
];

const LandingPage = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {

      
    
    // Initial page load animation
    const tl = gsap.timeline();
    tl.fromTo(imageRef.current, 
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" }
    )
    .fromTo(textContainerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
      "-=0.5" // Start 0.5s before image animation ends
    );
    
    // SplitText animation for firstText
      if (headingRef.current) {
        const split = new SplitText(headingRef.current, {
          type: "chars,words",
          mask: 'chars',
          charsClass: "char-js",
          wordsClass: "word-js",
          autoSplit: true,
          onSplit: (self) => {
            gsap.from(self.chars, {
              scrollTrigger: {
                start: 'top bottom',
                trigger:  headingRef.current,
              },
              duration: 1.8,
              yPercent: 100,
              delay: 0.5,
              ease: 'expo.out',
              stagger: 0.06,
            });
          }
        });
      }
    
    // return () => clearInterval(timer);
  }, [])

  return (
    <section className="w-full min-h-screen pt-24 flex flex-col items-center justify-center">
      
      {/* TODO: need to convert the h1 to an svg tro allow for bewttwr scaling */}
              <h1 ref={headingRef} className="font-black uppercase text-fg overflow-hidden" 
              // style={{ fontSize: 'clamp(5vw, 15vw, 13.4375em)' }}
              style={{ fontSize: '12em' }}
              // style={{ fontSize: '5em' }}
              >Șèyí,ThePoet</h1>

              {/* TODO convert this image section into m,arquee of the images or video reel of seyi performing inside the images array so it adds interest */}
  <motion.img
          ref={imageRef}
          src={images[0].src}
          alt={images[0].alt}
          initial={{ opacity: 0, scale: 0 }}  
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="w-full h-full object-cover"
        /> 
  
    </section>
  );
};

export default LandingPage;
