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
    <section className="fixed inset-0 z-50 flex items-center justify-center">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black-950 backdrop-blur-3xl opacity-30"
        onClick={onClose}
      />

      {/* modal */}
      <div className="relative bg-yellow-300 border border-amber-50 rounded-lg w-full max-w-3xl max-h-[80vh] overflow-auto z-10 p-5">
        <button onClick={onClose} aria-label="Close Modal">
          Close
        </button>

        {/* content */}
        <div>
          <p>{item.album_name}</p>
          <div>
            <p>{item.artist}</p>
            <p>{item.released}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewModal;
