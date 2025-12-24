import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import SeyiLogo from "../SeyiLogo/SeyiLogo";
gsap.registerPlugin(useGSAP,ScrollTrigger, SplitText);
import CustomImage from "../CustomImage/CustomImage";
const images = [
  { src: "/images/landing/home-1.jpg", alt: "Carousel Image 1", width: 1920, height: 1080 },
  { src: "/images/landing/home-2.jpg", alt: "Carousel Image 2", width: 1920, height: 1080 },
  { src: "/images/landing/home-3.jpg", alt: "Carousel Image 3", width: 1920, height: 1080 },
  { src: "/images/landing/home-4.jpg", alt: "Carousel Image 4", width: 1920, height: 1080 },
  { src: "/images/landing/home-5.jpg", alt: "Carousel Image 5", width: 1920, height: 1080 },
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
      <CustomImage 
        imageRef={imageRef}
        imgSrc={images[0].src}
        imgAlt={images[0].alt}
        width={images[0].width}
        height={images[0].height}
        classname="min-h-screen"
        linkTitle="Stream GODOT"
      />
    </section>
  );
};

export default LandingPage;
