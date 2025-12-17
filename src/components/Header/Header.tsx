// // import React from "react";
// import { Link } from "react-router-dom";
// import {
//   AnimatePresence,
//   motion,
//   useScroll,
//   useSpring,
//   useTransform,
// } from "motion/react";
// import { useState } from "react";
import { useEffect, useRef, useState } from "react";
import { navLinks, footerLinks } from "../../data/data";
// import { perspective, slideIn } from "../../data/anim";
// import { useMobile } from "../../hooks/use-mobile";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
// import Button from "../ui/button";

// // TODO chore refactor to make code clean
// const transition = { duration: 1, ease: [0.65, 0, 0.35, 1] };

// type NavMenuProps = {
//   isActive: boolean;
//   toggleMenu: () => void;
// };

// const NavMenu = ({ isActive, toggleMenu }: NavMenuProps) => {
//   return (
//     <div className="button">
//       <motion.div
//         className="slider"
//         animate={{ top: isActive ? "-100%" : "0%" }}
//         transition={transition}
//       >
//         <div className="el" onClick={() => toggleMenu()}>
//           <PerspectiveText label="Menu" />
//         </div>
//         <div className="el" onClick={() => toggleMenu()}>
//           <PerspectiveText label="Close" />
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// type PerspectiveTextProps = {
//   label: string;
// };

// function PerspectiveText({ label }: PerspectiveTextProps) {
//   return (
//     <div className="perspectiveText">
//       <p className="font-medium">{label}</p>
//       <p className="font-medium">{label}</p>
//     </div>
//   );
// }
// const Body = () => {
//   return (
//     <div className="nav">
//       <div className={"body"}>
//         {links.map((link, i) => {
//           const { title, href } = link;
//           return (
//             <div key={`b_${i}`} className="linkContainer">
//               <motion.div
//                 custom={i}
//                 variants={perspective}
//                 initial="initial"
//                 animate="enter"
//                 exit="exit"
//               >
//                 <a href={href} className="font-bold underline-link">
//                   {/* <a href={href} > */}
//                   {title}
//                 </a>
//               </motion.div>
//             </div>
//           );
//         })}
//       </div>

//       <motion.div className="footer">
//         {footerLinks.map((link, i) => {
//           const { title, href } = link;

//           return (
//             <li key={`f_${i}`} className="list-none">
//               <motion.a
//                 href={href}
//                 variants={slideIn}
//                 custom={i}
//                 initial="initial"
//                 animate="enter"
//                 exit="exit"
//                 className="underline-link text-[1.25em]  font-medium"
//               >
//                 {title}
//               </motion.a>
//             </li>
//           );
//         })}
//       </motion.div>
//     </div>
//   );
// };

// const Header = () => {
//   const { scrollYProgress } = useScroll();
//   const [isActive, setIsActive] = useState(false);
//   const isMobile = useMobile();

//   // Move menu variants inside the component
//   const MENU_WIDTH = isMobile ? "320px" : "480px";
//   const MENU_HEIGHT = isMobile ? "550px" : "590px";

//   const menu = {
//     open: {
//       width: MENU_WIDTH,
//       // height: MENU_HEIGHT,
//       height: "550px",
//       top: "-20px",
//       right: "-20px",
//       transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
//     },
//     closed: {
//       width: "100px",
//       height: "40px",
//       top: "0px",
//       right: "0px",
//       transition: {
//         duration: 0.75,
//         delay: 0.35,
//         type: "tween",
//         ease: [0.76, 0, 0.24, 1],
//       },
//     },
//   };
//   const rotate = useTransform(
//     useSpring(scrollYProgress, {
//       stiffness: 50,
//       damping: 20,
//       restDelta: 0.001,
//     }),
//     [0, 1],
//     [0, 360]
//   );

//   return (
//     <header className="flex flex-col  w-full z-50">
//       <nav className="flex justify-between items-center pt-10 px-10">
//         <Link to={"/"}>
//           <motion.img
//             src="/seyi-logo.svg"
//             alt="Ṣèyí,ThePoet Logo"
//             height={40}
//             width={40}
//             className="w-10 h-10"
//             style={{ rotate }}
//           />
//         </Link>
//         <div className="header">
//           <motion.div
//             className="menu"
//             variants={menu}
//             animate={isActive ? "open" : "closed"}
//             initial="closed"
//           >
//             <AnimatePresence mode="wait">
//               {isActive && <Body />}
//             </AnimatePresence>
//           </motion.div>

//           <NavMenu
//             isActive={isActive}
//             toggleMenu={() => setIsActive(!isActive)}
//           />
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

// import { useRef, useState } from "react";
// import { motion, AnimatePresence } from "motion/react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";


// export const height = {
//     initial: {
//         height: 0
//     },
//     enter: {
//         height: "100%",
//         transition: {duration: 0.5, ease: [0.33, 1, 0.68, 1]}
//     },
//     exit: {
//         height: 0,
//         transition: {duration: 0.3, ease: [0.33, 1, 0.68, 1]}
//     }
// }

// export const background = {
//     initial: {
//         opacity: 0
//     },
//     enter: {
//         opacity: 0.5,
//         transition: {duration: 0.5, ease: [0.33, 1, 0.68, 1]}
//     },
//     exit: {
//         opacity: 0,
//         transition: {duration: 0.5, ease: [0.33, 1, 0.68, 1]}
//     }
// }

// export const opacity = {
//   initial: {
//     opacity: 0,
//   },
//   open: {
//     opacity: 1,
//     transition: { duration: 0.5 },
//   },
//   closed: {
//     opacity: 0,
//     transition: { duration: 0.5 },
//   },
// };

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const menuOverlayRef = useRef<HTMLDivElement>(null);
//   const menuLinkRef = useRef<HTMLAnchorElement>(null);

//   useGSAP(() => {
//     let tl = gsap.timeline({paused: true});
//     if (!menuOverlayRef.current || !menuLinkRef.current) return;
//     tl.to(menuOverlayRef.current, 
//       {duration: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", ease: "power2.out"}
//     );

//     tl.from(menuLinkRef.current, 
//       { opacity: 0,y:60, stagger:0.05, duration:0.75, ease: "power1.inOut"}, "<"
//     );

//     if(isMenuOpen){
//       tl.play();
//     }else{
//       tl.reverse();
//     }
//   },{dependencies: [isMenuOpen]})
//     return (
//         <header>
//           <nav className="flex justify-between items-center p-5 fixed w-full">
//             <Link to="/">
//               <img src="/seyi-logo.svg" alt="Ṣèyí,ThePoet Logo" className="w-16 h-16"/>
//             </Link> 
//             <button className="px-4 py-2 bg-accent text-fg cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>Menu</button>
//             {/* <div
//               onClick={() => {
//                 setIsMenuOpen(!isMenuOpen);
//             }}
//             className="nav-menu-btn"
//           >
//             <motion.button
//               variants={opacity}
//               animate={!isMenuOpen ? "open" : "closed"}
//               className="bg-accent text-fg px-4 py-2"
//             >
//               Menu
//             </motion.button>
//             <motion.button variants={opacity} animate={isMenuOpen ? "open" : "closed"} className="bg-accent text-fg px-4 py-2">
//               Close
//             </motion.button>
//           </div> */}
//         </nav>


//         {isMenuOpen && <div className="menu-overlay " ref={menuOverlayRef}>
//           <div className="menu-nav flex justify-between items-center p-5">
//             <Link to="/">
//               <img src="/seyi-logo.svg" alt="Ṣèyí,ThePoet Logo" className="w-16 h-16"/>
//             </Link>
//             <button className="px-4 py-2 bg-fg text-bg cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>Close</button>          
//           </div>

//           <div className="menu-content">
//             <div className="menu-items">
//               {navLinks.map((link, index) => (
//                 <div className="menu-link" key={index} >
//                   <Link to={link.href} ref={menuLinkRef}>{link.title}</Link>
//                 </div>
//               ))}
//             </div>
//             <div className="menu-footer">
//               {footerLinks.map((link, index) => (
//                 <div className="menu-social" key={index}>
//                   <Link to={link.href}>{link.title}</Link>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>}
//       </header>
//     );
// }





// export default Header;



// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const menuOverlayRef = useRef<HTMLDivElement>(null);
//   const menuLinksRef = useRef<HTMLAnchorElement[]>([]);
//   useGSAP(() => {
//     if (!menuOverlayRef.current || menuLinksRef.current.length === 0) return;

//     // gsap.set(menuOverlayRef.current, {clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)"});
//     const tl = gsap.timeline({ paused: true });
//     tl.to(menuOverlayRef.current, 
//       {duration: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", ease: "power2.out"}
//     );

//     tl.from(menuLinksRef.current, 
//       { opacity: 0,y:60, stagger:0.05, duration:0.75, ease: "power1.inOut"}, "<"
//     );

//     if(isMenuOpen){
//       tl.play();
//     }else{
//       // tl.reverse();
//        gsap.to(menuOverlayRef.current, {duration: 1.25, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", ease: "power2.out"});

//     }
//   }, {dependencies: [isMenuOpen], scope: menuOverlayRef, revertOnUpdate: true} );
//   return (
//     <header>
//       <nav className="flex justify-between items-center p-5 fixed w-full">
//         <Link to="/">
//           <img src="/seyi-logo.svg" alt="Ṣèyí,ThePoet Logo" className="w-16 h-16" />
//         </Link>
//         <button
//           className="px-4 py-2 bg-accent text-fg cursor-pointer"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           Menu
//         </button>
//       </nav>

//       {isMenuOpen && (
//         <div className="menu-overlay" ref={menuOverlayRef}>
//           <div className="menu-nav flex justify-between items-center p-5">
//             <Link to="/">
//               <img src="/seyi-logo.svg" alt="Ṣèyí,ThePoet Logo" className="w-16 h-16" />
//             </Link>
//             <button
//               className="px-4 py-2 bg-fg text-bg cursor-pointer"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               Close
//             </button>
//           </div>

//           <div className="menu-content">
//             <div className="menu-items">
//               {navLinks.map((link, index) => (
//                 <div className="menu-link" key={index}>
//                   <Link
//                     to={link.href}
//                     ref={(el) => {
//                       if (el) menuLinksRef.current[index] = el;
//                     }}
//                   >
//                     {link.title}
//                   </Link>
//                 </div>
//               ))}
//             </div>
//             <div className="menu-footer">
//               {footerLinks.map((link, index) => (
//                 <div className="menu-social" key={index}>
//                   <Link to={link.href}>{link.title}</Link>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// export default Header;  





const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  const menuOverlayRef = useRef<HTMLDivElement>(null);
  const menuLinksRef = useRef<HTMLAnchorElement[]>([]);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  // Initialize timeline when menu renders
  useGSAP(() => {
    if (!menuOverlayRef.current || menuLinksRef.current.length === 0) return;

    // Kill existing timeline if it exists
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    const tl = gsap.timeline({ paused: true });

    gsap.set(menuLinksRef.current, {
      opacity: 0,
      y: 60
    });

    // Build timeline
    tl.to(menuOverlayRef.current, {
      duration: 1,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      ease: "power2.out"
    });

    tl.to(menuLinksRef.current, {
      opacity: 1,
      y: 0,
      stagger: 0.05,
      duration: 0.75,
      ease: "power1.inOut"
    }, "<0.2");

    timelineRef.current = tl;

    // Play immediately when menu opens
    if (isMenuOpen) {
      tl.play();
    }
  }, { dependencies: [shouldRender] });

  // Control timeline playback
  useGSAP(() => {
    if (!timelineRef.current) return;

    if (!isMenuOpen && timelineRef.current.progress() > 0) {
      // Only reverse if timeline has played
      timelineRef.current.reverse();
    }
  }, [isMenuOpen]);

  // Handle menu open/close with proper unmounting
  const handleMenuToggle = () => {
    if (!isMenuOpen) {
      // Opening: render first, then animate
      setShouldRender(true);
      setIsMenuOpen(true);
    } else {
      // Closing: animate out, then unmount
      setIsMenuOpen(false);
      if (timelineRef.current) {
        timelineRef.current.eventCallback("onReverseComplete", () => {
          setShouldRender(false);
          timelineRef.current?.eventCallback("onReverseComplete", null);
        });
      }
    }
  };

  return (
    <header>
      <nav className="flex justify-between items-center p-5 fixed w-full">
        <Link to="/">
          <img src="/seyi-logo.svg" alt="Ṣèyí,ThePoet Logo" className="w-16 h-16" />
        </Link>
        <button
          className="px-4 py-2 bg-accent text-fg cursor-pointer"
          onClick={handleMenuToggle}
        >
          Menu
        </button>
      </nav>

      {shouldRender && (
        <div className="menu-overlay " ref={menuOverlayRef}>
          <div className="menu-nav flex justify-between items-center p-5">
            <Link to="/">
              <img src="/seyi-logo.svg" alt="Ṣèyí,ThePoet Logo" className="w-16 h-16" />
            </Link>
            <button
              className="px-4 py-2 bg-fg text-bg cursor-pointer"
              onClick={handleMenuToggle}
            >
              Close
            </button>
          </div>

          <div className="menu-content">
            <div className="menu-items flex flex-col justify-between p-5">
              {navLinks.map((link, index) => (
                <div className="menu-link" key={index}>
                  <Link
                    to={link.href}
                    ref={(el) => {
                      if (el) menuLinksRef.current[index] = el;
                    }}
                    className="uppercase font-black"
                    target="_blank" rel="noopener noreferrer"
                  >
                    {link.title}
                  </Link>
                </div>
              ))}
            </div>
            <div className="menu-footer w-full flex items-center gap-5 flex-wrap justify-between p-5">
              {footerLinks.map((link, index) => (
                <div className="menu-social" key={index}>
                  <Link to={link.href} target="_blank" rel="noopener noreferrer" className="font-medium">{link.title}</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;