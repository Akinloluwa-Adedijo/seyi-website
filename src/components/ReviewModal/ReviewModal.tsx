import { useEffect } from "react";
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
      <div className="absolute inset-0 backdrop-blur-sm" onClick={onClose} />

      {/* modal */}
      <div className="relative bg-yellow-300  rounded-lg w-full max-w-2xl max-h-[80vh] overflow-auto z-10 p-5 text-black">
        <button
          onClick={onClose}
          aria-label="Close Modal"
          className="text-xl uppercase font-medium cursor-pointer hover:text-black-800"
        >
          Close
        </button>

        {/* content */}
        <div className="py-10">
          <div className="py-8">
            <p className="text-7xl uppercase font-black py-2">
              {item.album_name || item.poem_name}
            </p>
            <div className="flex justify-between uppercase  font-medium">
              <p>{item.artist || item.poem_theme}</p>
              <p>{item.released}</p>
            </div>
          </div>

          <div>
            {item.type === "music" ? (
              <div>
                {item.content.map((it, index) => {
                  return (
                    <div key={index}>
                      <img
                        src={it.src}
                        alt="alt text goes here"
                        className="w-full object-cover rounded-lg"
                        loading="lazy"
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
      </div>
    </section>
  );
};

export default ReviewModal;
