import React from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
// import { opacity } from "../../utils/animationVariants.js";

const transition = { duration: 1, ease: [0.65, 0, 0.35, 1] };

const navLinks = [
  {
    name: "Music",
    href: "/music",
  },
  {
    name: "Offstage",
    href: "/offstage",
  },
  {
    name: "Updates",
    href: "/updates",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];
export const opacity = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    blur: 10,
    transition: { duration: 0.5 },
  },
  closed: {
    opacity: 0,
    blur: 0,
    transition: { duration: 0.5 },
  },
};

export const height = {
  initial: {
    height: 0,
  },
  enter: {
    height: "auto",
    transition,
  },
  exit: {
    height: 0,
    transition,
  },
};

interface NavBottomProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const NavBottom: React.FC<NavBottomProps> = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <motion.div
        className="overflow-hidden bg-yellow-300 text-black"
        variants={height}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <div>
          <div className="flex flex-col items-center gap-5 p-5">
            {navLinks.map((link) => (
              <p
                key={link.name}
                onClick={() => setIsOpen(false)}
                className="text-3xl"
              >
                {link.name}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="flex flex-col gap-5 p-5">
      <div className="flex justify-between items-center relative">
        <div>
          <img
            src="/seyi-logo.svg"
            alt="Ṣèyí,ThePoet Logo"
            height={40}
            width={40}
            className="w-10 h-10"
          />
        </div>

        <nav className="flex uppercase justify-between items-center">
          <ul className="hidden sm:flex justify-between items-center gap-10">
            <li>Music</li>
            <li>OffStage</li>
            <li>Updates</li>
            <li>Contact</li>
          </ul>

          {/* Mobile COntrols */}
          <ul>
            <div
              className="sm:hidden relaitive flex items-center h-full hover:cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <motion.p
                variants={opacity}
                animate={!isOpen ? "open" : "closed"}
              >
                Menu
              </motion.p>
              <motion.p
                className="absolute opacity-0"
                variants={opacity}
                animate={isOpen ? "open" : "closed"}
              >
                Close
              </motion.p>
            </div>
          </ul>
        </nav>
      </div>
      <AnimatePresence mode="wait">
        {isOpen && <NavBottom isOpen={isOpen} setIsOpen={setIsOpen} />}
      </AnimatePresence>
    </header>
  );
};

export default Header;
