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
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eius dolor pariatur quaerat et ipsa quo doloribus quibusdam architecto, possimus rem velit, reprehenderit corrupti ipsam ratione! Laborum beatae consequuntur dicta.Tenetur quod magni reiciendis! Quae harum assumenda ex esse non maiores sit provident voluptate similique. Eaque maiores omnis amet? Voluptatibus tempore laborum possimus mollitia qui alias impedit exercitationem excepturi optio. Voluptate, nobis illo voluptatem doloribus totam aperiam cum eveniet nostrum inventore. Accusamus suscipit quos nobis aperiam, animi facilis veniam ab sapiente expedita tempora molestias, laborum consequatur provident. Architecto, nobis dolor?Voluptate, nobis illo voluptatem doloribus totam aperiam cum eveniet nostrum inventore. Accusamus suscipit quos nobis aperiam, animi facilis veniam ab sapiente expedita tempora molestias, laborum consequatur provident. Architecto, nobis dolor?Maxime aut optio voluptate ullam quia debitis laborum ratione amet, temporibus quae eum, quo blanditiis itaque nemo recusandae nesciunt harum deleniti officia beatae fugit voluptatem! Aliquid laudantium deleniti temporibus officia?Quos distinctio repellendus ipsam exercitationem error illum ab assumenda aliquam natus obcaecati quasi velit non, aut, est suscipit deleniti atque repudiandae. Provident amet illum doloremque aliquam unde officia iste nesciunt!    Optio ipsam vel ullam veritatis et perferendis, officia obcaecati itaque quia ut quidem id maiores exercitationem dolores enim fuga eaque amet autem excepturi accusamus? Possimus, velit! Iure, expedita maxime. Saepe!",
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
