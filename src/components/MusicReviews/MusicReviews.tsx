import React from "react";
import type { ReviewItem } from "../../pages/OffStage/Offstage";

const musicReviews: ReviewItem[] = [
  {
    id: 1,
    album_name: "Heis",
    artist: "Rema",
    released: 2024,
    content: [
      {
        src: "/images/review_images/review-1.webp",
        text: "lorem",
      },
    ],
    type: "music",
  },
];

interface MusicReviewsProps {
  onItemClick: (item: ReviewItem) => void;
}

const MusicReviews = ({ onItemClick }: MusicReviewsProps) => {
  return (
    <>
      {musicReviews.map((review) => {
        return (
          <ul
            className="grid grid-cols-3 sm:grid-cols-4 w-full border-t-2 border-yellow-300 uppercase pt-3 pb-3 gap-5 font-semibold hover:bg-yellow-300 hover:text-black transition-colors duration-300 ease-in hover:cursor-pointer"
            onClick={() => onItemClick(review)}
          >
            <li>{review.album_name}</li>
            <li>{review.artist}</li>
            <li>{review.released}</li>
            <li>Read more</li>
          </ul>
        );
      })}
    </>
  );
};

export default MusicReviews;
