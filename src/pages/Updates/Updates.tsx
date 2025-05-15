import { useState } from "react";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import UpdateCard from "../../components/UpdateCard/UpdateCard";
import UpdateModal from "../../components/UpdateModal/UpdateModal";

export interface UpdateItem {
  id: number;
  title: string;
  cover: string;
  coverAlt: string;
  images: { imgSrc?: string; imgAlt?: string }[];
  content: string[];
  href?: string;
}

const Updates = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<UpdateItem | null>(null);

  const handleItemClick = (item: UpdateItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  return (
    <SectionWrapper title="Updates">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <UpdateCard onItemClick={handleItemClick} />
      </div>

      <UpdateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        updateItem={selectedItem}
      />
    </SectionWrapper>
  );
};

export default Updates;
