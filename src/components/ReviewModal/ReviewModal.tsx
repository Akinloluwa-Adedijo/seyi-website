import { useEffect } from "react";
import type { ReviewItem } from "../Offstage";
import CustomImage from "../CustomImage/CustomImage";
import type { musicReviewItem } from "../../data/musicReviews";
import type { poemItem } from "../../data/poems";

import { AnimatePresence, motion } from "motion/react";

interface ReviewModalProps {
  isOpen: Boolean;
  onClose: () => void;
  item: musicReviewItem | poemItem | null;
}

const ReviewModal = ({ isOpen, onClose, item }: ReviewModalProps) => {
  // Prevent scrolling on the body when the modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const bezier = [0.83, 0, 0.17, 1];

  return (
    <AnimatePresence>
      {isOpen && item && (
        <section className="fixed inset-0 z-50 flex justify-end">
          {/* backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: bezier }}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* modal */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: bezier }}
            className="relative bg-yellow-300 w-full max-w-2xl h-full overflow-y-auto z-10 p-5 md:p-10 text-black shadow-2xl"
          >
            <button
              onClick={onClose}
              aria-label="Close Modal"
              className="text-lg uppercase font-medium cursor-pointer hover:text-black-800"
            >
              Close
            </button>

            {/* content */}
            <div className="py-10">
              <div className="py-8">
                <p className="text-4xl sm:text-7xl uppercase font-black py-2">
                  {item.name}
                </p>
                <div className="flex justify-between uppercase  font-medium">
                  <p>{item.type === "review" ? item.artist : item.theme}</p>
                  <p>{item.released}</p>
                </div>
              </div>

              <div>
                {item.type === "review" ? (
                  <div>
                    {item.content.map((it, index) => {
                      return (
                        <div key={index}>
                          <CustomImage
                            imgSrc={it.imgSrc ?? ""}
                            imgAlt={it.imgAlt ?? ""}
                            width={it.width ?? 0}
                            height={it.height ?? 0}
                            classname={it.classname}
                          />

                          {it.text.map((text, index) => {
                            return (
                              <p key={index} className="py-2 font-medium">
                                {text}
                              </p>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <>
                    <div>
                      {item.content.map((it, index) => {
                        return (
                          <div key={index}>
                            {it.text.map((text, index) => {
                              return (
                                <p key={index} className="py-2 font-medium">
                                  {text}
                                </p>
                              );
                            })}
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </section>
      )}
    </AnimatePresence>
  );
};

export default ReviewModal;
