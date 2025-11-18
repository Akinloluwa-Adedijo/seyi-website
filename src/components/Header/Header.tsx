// import React from "react";
import { Link } from "react-router-dom";
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useState } from "react";
import { links, footerLinks } from "../../data/data";
import { perspective, slideIn } from "../../data/anim";
import { useMobile } from "../../hooks/use-mobile";

// TODO chore refactor to make code clean
const transition = { duration: 1, ease: [0.65, 0, 0.35, 1] };

type NavMenuProps = {
  isActive: boolean;
  toggleMenu: () => void;
};

const NavMenu = ({ isActive, toggleMenu }: NavMenuProps) => {
  return (
    <div className="button">
      <motion.div
        className="slider"
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={transition}
      >
        <div className="el" onClick={() => toggleMenu()}>
          <PerspectiveText label="Menu" />
        </div>
        <div className="el" onClick={() => toggleMenu()}>
          <PerspectiveText label="Close" />
        </div>
      </motion.div>
    </div>
  );
};

type PerspectiveTextProps = {
  label: string;
};

function PerspectiveText({ label }: PerspectiveTextProps) {
  return (
    <div className="perspectiveText">
      <p className="font-medium">{label}</p>
      <p className="font-medium">{label}</p>
    </div>
  );
}
const Body = () => {
  return (
    <div className="nav">
      <div className={"body"}>
        {links.map((link, i) => {
          const { title, href } = link;
          return (
            <div key={`b_${i}`} className="linkContainer">
              <motion.div
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <a href={href} className="font-bold underline-link">
                  {/* <a href={href} > */}
                  {title}
                </a>
              </motion.div>
            </div>
          );
        })}
      </div>

      <motion.div className="footer">
        {footerLinks.map((link, i) => {
          const { title, href } = link;

          return (
            <li key={`f_${i}`} className="list-none">
              <motion.a
                href={href}
                variants={slideIn}
                custom={i}
                initial="initial"
                animate="enter"
                exit="exit"
                className="underline-link text-xl font-medium"
              >
                {title}
              </motion.a>
            </li>
          );
        })}
      </motion.div>
    </div>
  );
};

const Header = () => {
  const { scrollYProgress } = useScroll();
  const [isActive, setIsActive] = useState(false);
  const isMobile = useMobile();

  // Move menu variants inside the component
  const MENU_WIDTH = isMobile ? "320px" : "480px";

  const menu = {
    open: {
      width: MENU_WIDTH,
      height: "550px",
      top: "-20px",
      right: "-20px",
      transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      width: "100px",
      height: "40px",
      top: "0px",
      right: "0px",
      transition: {
        duration: 0.75,
        delay: 0.35,
        type: "tween",
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };
  const rotate = useTransform(
    useSpring(scrollYProgress, {
      stiffness: 50,
      damping: 20,
      restDelta: 0.001,
    }),
    [0, 1],
    [0, 360]
  );

  return (
    <header className="flex flex-col fixed w-full z-50">
      <nav className="flex justify-between items-center pt-10 px-10">
        <Link to={"/"}>
          <motion.img
            src="/seyi-logo.svg"
            alt="Ṣèyí,ThePoet Logo"
            height={40}
            width={40}
            className="w-10 h-10"
            style={{ rotate }}
          />
        </Link>
        <div className="header">
          <motion.div
            className="menu"
            variants={menu}
            animate={isActive ? "open" : "closed"}
            initial="closed"
          >
            <AnimatePresence mode="wait">
              {isActive && <Body />}
            </AnimatePresence>
          </motion.div>

          <NavMenu
            isActive={isActive}
            toggleMenu={() => setIsActive(!isActive)}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
