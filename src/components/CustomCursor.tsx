import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorTextRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cursor = cursorRef.current;
    const cursorText = cursorTextRef.current;
    if (!cursor) return;

    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
    });

    const handleMouseMove = (e: MouseEvent) => {
      const mouse_x = e.clientX;
      const mouse_y = e.clientY;

      gsap.to(cursor, {
        x: mouse_x,
        y: mouse_y,
        duration: 2,
        ease: "expo.out",
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Handle data-version elements
    const versionElements = document.querySelectorAll("[data-version]");

    const handleMouseEnter = (e: Event) => {
      const element = e.currentTarget as HTMLElement;
      const version = element.getAttribute("data-version");
      const option = element.getAttribute("data-option");
      
      // Add classes to the CURSOR, not the element
      cursor.classList.add("is-hovering");
      if (option) {
        cursor.classList.add(option);
      }
      
      if (cursorText && version) {
        cursorText.textContent = version;
      }
    };

    const handleMouseLeave = (e: Event) => {
      const element = e.currentTarget as HTMLElement;
      const option = element.getAttribute("data-option");
      
      // Remove classes from the CURSOR
      cursor.classList.remove("is-hovering");
      if (option) {
        cursor.classList.remove(option);
      }
      
      if (cursorText) {
        cursorText.textContent = "SEE MORE";
      }
    };

    versionElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    // Cleanup function
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      versionElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div className="cursor" ref={cursorRef}>
      <div className="cursor__holder">
        <div className="cursor__bg cursor__bg1"></div>
        <div className="cursor__bg cursor__bg2"></div>
        <div className="cursor__text" ref={cursorTextRef}>
          SEE MORE
        </div>
        <div className="cursor__arrow">
          <svg
            width="100%"
            viewBox="0 0 29 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.7695 0.98068L27.999 8.21019C28.4427 8.65383 28.4427 9.37311 27.999 9.81675L20.7695 17.0463C20.3259 17.4899 19.6066 17.4899 19.163 17.0463C18.7193 16.6026 18.7193 15.8833 19.163 15.4397L24.4532 10.1495L0.831054 10.1495L0.831054 7.87746L24.4532 7.87746L19.163 2.58724C18.7193 2.1436 18.7193 1.42432 19.163 0.98068C19.6066 0.537041 20.3259 0.537041 20.7695 0.98068Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CustomCursor;