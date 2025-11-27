import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
const images = [
  { src: "/images/landing/home-1.jpg", alt: "Carousel Image 1" },
  { src: "/images/landing/home-2.jpg", alt: "Carousel Image 2" },
  { src: "/images/landing/home-3.jpg", alt: "Carousel Image 3" },
  { src: "/images/landing/home-4.jpg", alt: "Carousel Image 4" },
  { src: "/images/landing/home-5.jpg", alt: "Carousel Image 5" },
];

const LandingPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const firstText = useRef(null);
  const imageRef = useRef(null);
  const textContainerRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
      
    gsap.registerPlugin(ScrollTrigger, SplitText);
    
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
    if (firstText.current) {
      const split = new SplitText(firstText.current, {
        type: "chars,words",
        charsClass: "char-js",
        wordsClass: "word-js"
      });
      const chars = split.chars;
      
      gsap.from(chars, {
        scrollTrigger: {
          start: 'top bottom',
          trigger: firstText.current
        },
        duration: 1.8,
        yPercent: 100,
        delay: 0.5,
        ease: 'expo.out',
        stagger: 0.06
      });
    }
    
    return () => clearInterval(timer);
  }, [])

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Fullscreen Image */}
      <AnimatePresence mode="popLayout">
        <motion.img
          ref={imageRef}
          key={currentIndex}
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          // initial={{ opacity: 0 }}  
          // animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      
      {/* Text at Bottom */}
      <div ref={textContainerRef} className="absolute top-[calc(100vh-250px)] left-0 right-0 " style={{ opacity: 0 }}>
        <p ref={firstText} className="font-black text-white uppercase leading-none whitespace-nowrap" style={{ fontSize: 'clamp(1rem, 15vw, 13.4375rem)' }}>
          Șèyí,ThePoet
        </p>
      </div>
    </section>
  );
};

export default LandingPage;
