import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import SeyiLogo from "../SeyiLogo/SeyiLogo";
gsap.registerPlugin(useGSAP,ScrollTrigger, SplitText);

const images = [
  { src: "/images/landing/home-1.jpg", alt: "Carousel Image 1" },
  { src: "/images/landing/home-2.jpg", alt: "Carousel Image 2" },
  { src: "/images/landing/home-3.jpg", alt: "Carousel Image 3" },
  { src: "/images/landing/home-4.jpg", alt: "Carousel Image 4" },
  { src: "/images/landing/home-5.jpg", alt: "Carousel Image 5" },
];

const LandingPage = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  // useGSAP(() => {
  //   // Initial page load animation
  //   const tl = gsap.timeline();
  //   tl.fromTo(imageRef.current, 
  //     { scale: 0, opacity: 0 },
  //     { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" }
  //   )
  // }, [])

  return (
    <section className="w-full min-h-screen pt-24">
      <div className="w-full h-full px-5  overflow-hidden">
        <SeyiLogo className="w-full h-full"/>
        <h1 aria-hidden="true" className="sr-only">Șèyí,ThePoet</h1>
      </div>
      <div className="img-container min-h-screen">
        <img ref={imageRef} src={images[0].src} alt={images[0].alt} />
          {/* Change to round seyi button */}
          <a href="https://seyithepoet.bandcamp.com/album/godot-act-1-a-performance-of-self" className="text-5xl font-bold  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-accent">Stream GODOT</a>
      </div>
    </section>
  );
};

export default LandingPage;
