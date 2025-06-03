import { useState } from "react";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import MusicReviews from "../../components/MusicReviews/MusicReviews";
import ReviewModal from "../../components/ReviewModal/ReviewModal";
import Poems from "../../components/Poems/Poems";

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

  return (
    <SectionWrapper title="Offstage">
      <div className="flex flex-col w-full items-center ">
        <h3 className="text-3xl sm:text-4xl uppercase py-5 font-medium">
          Music Reviews
        </h3>
        <div className="flex flex-col w-full">
          <MusicReviews onItemClick={handleItemClick} />
        </div>
      </div>
      <div className="flex flex-col w-full items-center ">
        <h3 className="text-3xl sm:text-4xl uppercase py-5 font-medium">
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
