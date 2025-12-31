import type { poemItem } from "../../data/poems";
import { useAnimate } from "framer-motion";
import { useRef } from "react";
interface MusicReviewsProps {
  onItemClick: (item: poemItem) => void;
  poem: poemItem;
}

const Poems = ({ onItemClick, poem }: MusicReviewsProps) => {
  const [scope, animate] = useAnimate();
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  const animateIn = async (e: React.MouseEvent) => {
    if (!outer.current || !inner.current) return;
    const bounds = e.currentTarget.getBoundingClientRect();
    const direction = e.clientY < bounds.top + bounds.height / 2 ? -1 : 1;
    await animate(outer.current, {top: `${direction * 100}%`}, {duration:0})
    await animate(inner.current, {top: `${-1 * direction * 100}%`}, {duration:0})
    animate([outer.current, inner.current], {top: "0%"}, {duration:0.3})
  };
  const animateOut = (e: React.MouseEvent) => {
    if (!outer.current || !inner.current) return;
    const bounds = e.currentTarget.getBoundingClientRect();
    const direction = e.clientY < bounds.top + bounds.height / 2 ? -1 : 1;
    animate(outer.current, {top: `${direction * 100}%`}, {duration:0.3})
    animate(inner.current, {top: `${-1 * direction * 100}%`}, {duration:0.3})
  };
  return (
    <ul
      ref={scope}
      className="relative grid grid-cols-3 sm:grid-cols-4 w-full border-t-2 border-yellow-300 uppercase p-2 gap-5  hover:cursor-pointer overflow-hidden"
      onMouseEnter={animateIn}
      onMouseLeave={animateOut}
      onClick={() => onItemClick(poem)}
    >
      <li className="z-10 p-heading">{poem.name}</li>
      <li className="z-10 p-heading">{poem.theme}</li>
      <li className="z-10 p-heading">{poem.released}</li>
      <li className="hidden sm:block sm:text-right read-text p-heading z-10">
        Read Poem
      </li>
      <div className="background background-outer pointer-events-none" ref={outer}></div>
      <div className="background background-inner pointer-events-none" ref={inner}></div>
    </ul>
  );
};

export default Poems;
