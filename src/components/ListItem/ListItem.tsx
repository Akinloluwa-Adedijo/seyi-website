import { useAnimate } from "motion/react";
import type { musicReviewItem } from "../../data/musicReviews";
import type { poemItem } from "../../data/poems";
import { useRef } from "react";

interface ListItemProps {
  onItemClick: (item: musicReviewItem | poemItem) => void;
  item: musicReviewItem | poemItem;
}

const ListItem = ({ onItemClick, item }: ListItemProps) => {
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

  const animateOut = async (e: React.MouseEvent) => {
    if (!outer.current || !inner.current) return;
    const bounds = e.currentTarget.getBoundingClientRect();
    const direction = e.clientY < bounds.top + bounds.height / 2 ? -1 : 1;
    await animate(outer.current, {top: `${direction * 100}%`}, {duration:0.3})
    await animate(inner.current, {top: `${-1 * direction * 100}%`}, {duration:0.3})
  };

  const isReview = item.type === "review";

  return (
    <ul
      ref={scope}
      key={item.id}
      className="relative grid grid-cols-3 sm:grid-cols-4 w-full border-t-2 border-yellow-300 uppercase p-2 gap-5 cursor-pointer overflow-hidden"
      onMouseEnter={animateIn}
      onMouseLeave={animateOut}
      onClick={() => onItemClick(item)}
    >
      <li className="z-10 font-medium">{item.name}</li>
      <li className="z-10 font-medium">
        {isReview ? item.artist : item.theme}
      </li>
      <li className="z-10 font-medium">{item.released}</li>
      <li className="hidden sm:block sm:text-right read-text z-10 font-medium">
        {isReview ? "Read Review" : "Read Poem"}
      </li>
      <div className="background-outer pointer-events-none" ref={outer}>
        <div className="background-inner pointer-events-none" ref={inner}></div>
      </div>
    </ul>
  );
};

export default ListItem;
