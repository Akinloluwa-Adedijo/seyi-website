// import React from "react";
import { Link } from "react-router-dom";
import {
  // isDragActive,
  // AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useState } from "react";
// import { useMobile } from "../../hooks/use-mobile";
// import { useEffect } from "react";

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
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
}

const menu = {
  open: {
    width: "480px",
    height: "650px",
    top: "-25px",
    right: "-25px",
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

const Header = () => {
  // Get the scroll progress (0 to 1)
  const { scrollYProgress } = useScroll();
  const [isActive, setIsActive] = useState(false);

  // Map the scroll progress to a rotation value (0 to 360 degrees)
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
          ></motion.div>

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
