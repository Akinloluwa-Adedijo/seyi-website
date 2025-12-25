import { useState } from "react";
import SectionWrapper from "./SectionWrapper/SectionWrapper";
import MusicReviews from "./MusicReviews/MusicReviews";
import ReviewModal from "./ReviewModal/ReviewModal";
import Poems from "./Poems/Poems";
import useDocumentTitle from "../utils/useDocumentTitle";

export interface ReviewItem {
  id: number;
  album_name?: string;
  poem_name?: string;
  artist?: string;
  poem_theme?: string;
  released: number;
  content: {
    imgSrc?: string;
    imgAlt?: string;
    width?: number;
    height?: number;
    classname?: string;
    text: string[];
  }[];
  type: "music" | "poem";
}

const Offstage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ReviewItem | null>(null);

  const handleItemClick = (item: ReviewItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };
  useDocumentTitle("Ṣèyí,ThePoet | Offstage");

  return (
    <SectionWrapper title="Offstage">
      <div className="flex flex-col w-full">
        <h3 className="text-3xl sm:text-5xl uppercase py-5 font-medium">
          Music Reviews
        </h3>
        <div className="flex flex-col w-full">
          <MusicReviews onItemClick={handleItemClick} />
        </div>
      </div>
      <div className="flex flex-col w-full">
        <h3 className="text-3xl sm:text-5xl uppercase py-5 font-medium">
          Poems
        </h3>
        <div className="flex flex-col w-full">
          <Poems onItemClick={handleItemClick} />
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
