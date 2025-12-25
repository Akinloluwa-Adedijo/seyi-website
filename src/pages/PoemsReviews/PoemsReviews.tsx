
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import { poems, type poemItem } from "../../data/poems";
import { musicReviews, type musicReviewItem } from "../../data/musicReviews";
import ReviewModal from "../../components/ReviewModal/ReviewModal";
import { useState } from "react";
import ListItem from "../../components/ListItem/ListItem";

export default function PoemsReviews() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<
    poemItem | musicReviewItem | null
  >(null);

  const onItemClick = (item: poemItem | musicReviewItem) => {
    setIsModalOpen(true);
    setSelectedItem(item);
  };

  const allItems = [...musicReviews, ...poems];

  return (
    <SectionWrapper title="Poems & Reviews">
      <section className="flex flex-col w-full">
        <div className="grid grid-cols-3 sm:grid-cols-4 w-full uppercase p-2 gap-5 font-instrument text-xl sm:text-2xl border-b-2 border-accent pb-2 mb-2">
          <p>Name</p>
          <p>Artist / Theme</p>
          <p>Year</p>
          <span className="hidden sm:block"></span>
        </div>
        {allItems.map((item) => (
          <ListItem key={`${item.type}-${item.id}`} onItemClick={onItemClick} item={item} />
        ))}
      </section>

      <ReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        item={selectedItem}
      />
    </SectionWrapper>
  );
}
