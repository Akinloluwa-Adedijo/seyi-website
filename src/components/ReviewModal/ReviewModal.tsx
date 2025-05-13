import React, { useEffect } from "react";
import { useState } from "react";
import type { ReviewItem } from "../../pages/OffStage/Offstage";

interface ReviewModalProps {
  isOpen: Boolean;
  onClose: () => void;
  item: ReviewItem | null;
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

  if (!isOpen || !item) {
    return null;
  }
  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center p-5">
      {/* backdrop */}
      <div className="absolute inset-0 backdrop-blur-sm " onClick={onClose} />

      {/* modal */}
      <div className="relative bg-yellow-300  rounded-lg w-full max-w-2xl max-h-[80vh] overflow-auto z-10 p-5 text-black">
        <button
          onClick={onClose}
          aria-label="Close Modal"
          className="text-xl uppercase font-semibold cursor-pointer"
        >
          Close
        </button>

        {/* content */}
        <div className="py-10">
          <div>
            <p className="text-4xl uppercase font-black py-2">
              {item.album_name}
            </p>
            <div className="flex justify-between text-xl font-medium">
              <p>{item.artist}</p>
              <p>{item.released}</p>
            </div>
          </div>

          <div>
            {item.type === "music" ? (
              <div>
                {item.content.map((it, index) => {
                  return (
                    <div key={index}>
                      <div>
                        <img src={it.src} alt="alt text goes here" />
                      </div>
                      <div>{it.text}</div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <>
                <p>this is an item</p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewModal;
