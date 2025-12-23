
import { useEffect, useRef, useState } from "react";
import { navLinks, footerLinks } from "../../data/data";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuOverlayRef = useRef<HTMLDivElement>(null);
  const menuLinksRef = useRef<HTMLAnchorElement[]>([]);

  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    if (!menuOverlayRef.current) return;

    tl.current = gsap.timeline({ paused: true })
      .to(menuOverlayRef.current, {
        duration: 1,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        ease: "power2.out",
      })
      .fromTo(
        menuLinksRef.current,
        {
          opacity: 0,
          y: 100,
          stagger: 0.05,
          duration: 0.75,
          ease: "power1.inOut",
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          duration: 0.75,
          ease: "power1.inOut",
        },
        "<",
      )
  }, { scope: menuOverlayRef });

  useEffect(() => {
    if (tl.current) {
      if (isMenuOpen) {
        tl.current.play();
      } else {
        tl.current.reverse();
      }
    }
  }, [isMenuOpen]);

  return (
    <header>
      <nav className="flex justify-between items-center p-5 fixed  w-full z-1">
        <Link to="/">
          <img
            src="/seyi-logo.svg"
            alt="Ṣèyí,ThePoet Logo"
            className="w-16 h-16"
          />
        </Link>
        <button
          className="px-4 py-2 bg-accent text-fg cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          Menu
        </button>
      </nav>

      <div className="menu-overlay h-full flex flex-col justify-between" ref={menuOverlayRef}>
        <div className="menu-nav flex justify-between items-center">
          <Link to="/">
            <img
              src="/seyi-logo.svg"
              alt="Ṣèyí,ThePoet Logo"
              className="w-16 h-16"
            />
          </Link>
          <button
            className="px-4 py-2 bg-fg text-bg cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Close
          </button>
        </div>

          <div className="menu-items flex flex-col justify-center flex-1 gap-2  px-5">
            {navLinks.map((link, index) => (
              <div className="menu-link" key={index}>
                <Link
                  to={link.href}
                  ref={(el) => {
                    if (el) menuLinksRef.current[index] = el;
                  }}
                  onClick={() => setIsMenuOpen(false)} 
                  className="uppercase font-black"
                >
                  {link.title}
                </Link>
            </div>
            ))}
          </div>
          <div className="menu-footer flex flex-wrap gap-5 p-5">
            {footerLinks.map((link, index) => (
                <a href={link.href} key={index} className="font-medium text-fg text-link">{link.title}</a>
            ))}
          </div>
      </div>
    </header>
  );
};

export default Header; 