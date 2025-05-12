// import { useState } from "react";
// import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";

// interface ReviewItem {
//   id: number;
//   album_name: string;
//   artist: string;
//   released: number;
//   content: { src: string; text: string }[];
//   type: "music" | "poem";
// }
// const musicReviews: ReviewItem[] = [
//   {
//     id: 1,
//     album_name: "Heis",
//     artist: "Rema",
//     released: 2024,
//     content: [
//       {
//         src: "/images/review_images/review-1.webp",
//         text: "lorem",
//       },
//     ],
//     type: "music",
//   },
// ];

// export interface OffStageListProps {
//   name: string;
//   albumName: string;
//   year: number;
//   readMore: string;
//   content: string;
//   albumCoverImage: string;
// }
// type PoemListProps = {
//   name: string;
//   year: number;
//   theme: string;
//   readMore: string;
// };

// const OffStageList = ({
//   name,
//   albumName,
//   year,
//   readMore,
//   content,
//   albumCoverImage,
//   onItemClick,
// }: OffStageListProps) => {
//   return (
//     <>
//       <ul className="grid grid-cols-3 sm:grid-cols-4 w-full border-t-2 border-yellow-300 uppercase pt-3 pb-3 gap-5 font-semibold hover:bg-yellow-300 hover:text-black transition-colors duration-300 ease-in">
//         <li>{name}</li>
//         <li>{albumName}</li>
//         <li>{year}</li>
//         <li>{readMore}</li>
//       </ul>
//     </>
//   );
// };
// const PoemList = ({ name, year, theme, readMore }: PoemListProps) => {
//   return (
//     <>
//       <ul className="grid grid-cols-3 sm:grid-cols-4 w-full border-t-2 border-yellow-300 uppercase pt-3 pb-3 gap-5 font-semibold hover:bg-yellow-300 hover:text-black transition-colors duration-300 ease-in">
//         <li>{name}</li>
//         <li>{year}</li>
//         <li>{theme}</li>
//         <li>{readMore}</li>
//       </ul>
//     </>
//   );
// };
// const Offstage = () => {
//   const [isModlOpen, setIsModalOpen] = useState(false);
//   const [selectedItem, setSelectedItem] = useState<OffStageListProps | null>(
//     null
//   );

//   const handleItemClick = (item: OffStageListProps) => {
//     setSelectedItem(item);
//     setIsModalOpen(true);
//   };
//   return (
//     <SectionWrapper title="Offstage">
//       <div className="flex flex-col w-full items-center ">
//         <h3 className="text-3xl uppercase py-5">Music Reviews</h3>
//         <div className="flex flex-col  w-full">
//           <OffStageList
//             name="Rema"
//             albumName="Heis"
//             year={2022}
//             readMore="Read More"
//             content="Rema has returned with an album that not only cements his place at the top of the new wave of Afrobeats artists but also showcases his unique artistry and bold creativity. From the outset, Rema's mission is to demonstrate his dominance and versatility within the genre."
//             albumCoverImage="/seyi-landing.jpg"
//           />
//           <OffStageList
//             name="Rema"
//             albumName="Heis"
//             year={2022}
//             readMore="Read More"
//             content="Rema has returned with an album that not only cements his place at the top of the new wave of Afrobeats artists but also showcases his unique artistry and bold creativity. From the outset, Rema's mission is to demonstrate his dominance and versatility within the genre."
//             albumCoverImage="/seyi-landing.jpg"
//           />
//         </div>
//       </div>
//       <div className="flex flex-col w-full items-center ">
//         <h3 className="text-3xl uppercase py-5">Poems</h3>
//         <div className="flex flex-col  w-full">
//           <PoemList
//             name="Rema"
//             year={2022}
//             theme="Grief"
//             readMore="Read More"
//           />
//         </div>
//       </div>
//       <div className="flex w-full items-end justify-between ">
//         <h3 className="text-3xl uppercase">MEDIA</h3>
//         <a href="">See all!</a>
//       </div>
//     </SectionWrapper>
//   );
// };

// export default Offstage;

import React from "react";
import { useState } from "react";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import MusicReviews from "../../components/MusicReviews/MusicReviews";
import ReviewModal from "../../components/ReviewModal/ReviewModal";

export interface ReviewItem {
  id: number;
  album_name: string;
  artist: string;
  released: number;
  content: { src: string; text: string }[];
  type: "music" | "poem";
}

const Offstage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ReviewItem | null>(null);

  const handleItemClick = (item: ReviewItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  return (
    <SectionWrapper title="Offstage">
      <div className="flex flex-col w-full items-center ">
        <h3 className="text-3xl uppercase py-5">Music Reviews</h3>
        <div className="flex flex-col w-full">
          <MusicReviews onItemClick={handleItemClick} />
        </div>
      </div>

      <ReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        item={selectedItem}
      />
    </SectionWrapper>
  );
};

export default Offstage;
