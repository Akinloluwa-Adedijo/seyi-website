
import { useAnimate } from "motion/react";
import type { musicReviewItem } from "../../data/musicReviews";
import { useRef } from "react";
interface MusicReviewsProps {
  onItemClick: (item: musicReviewItem) => void;
  review: musicReviewItem;
}

const MusicReviews = ({ onItemClick, review }: MusicReviewsProps) => {
      const [scope, animate] = useAnimate();
    const outer = useRef<HTMLDivElement>(null);

    const animateIn = async (e: React.MouseEvent) => {
        if (!outer.current) return;
        const bounds = e.currentTarget.getBoundingClientRect();
        const direction = e.clientY < bounds.top + (bounds.height / 2) ? -1 : 1;
        await animate(outer.current, {top: `${direction * 100}%`}, {duration:0})
        animate(outer.current, {top: "0%"}, {duration:0.3})
    }
    const animateOut = (e: React.MouseEvent) => {
        if (!outer.current) return;
        const bounds = e.currentTarget.getBoundingClientRect();
        const direction = e.clientY < bounds.top + (bounds.height / 2) ? -1 : 1;
        animate(outer.current, {top: `${direction * 100}%`}, {duration:0.3})
    }
  return (
          <ul
          ref={scope}
            key={review.id}
            className="relative grid grid-cols-3 sm:grid-cols-4 w-full border-t-2 border-yellow-300 uppercase p-2 gap-5 cursor-pointer   overflow-hidden"
                      onMouseEnter={animateIn}
            onMouseLeave={animateOut}
            onClick={() => onItemClick(review)}
          >
            <li className="z-10">{review.name}</li>
            <li className="z-10">{review.artist}</li>
            <li className="z-10">{review.released}</li>
            <li className="hidden sm:block sm:text-right read-text z-10">Read Review</li>
              <div className="background pointer-events-none" ref={outer}></div>

          </ul>
  );
};

export default MusicReviews;
