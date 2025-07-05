import type { UpdateItem } from "../../pages/Updates/Updates";
import { useEffect } from "react";
import CustomImage from "../CustomImage/CustomImage";
interface UpdateModalProps {
  isOpen: Boolean;
  onClose: () => void;
  updateItem: UpdateItem | null;
}
const UpdateModal = ({ isOpen, onClose, updateItem }: UpdateModalProps) => {
  // Prevent scrolling on the body when the modal is open
  useEffect(() => {
    if (isOpen) {
      // Store the current scroll position
      const scrollY = window.scrollY;

      // Apply multiple strategies to prevent scrolling
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      // Restore scrolling
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "auto";

      // Restore scroll position
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }

    return () => {
      // Cleanup function to ensure scrolling is restored
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "auto";

      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    };
  }, [isOpen]);

  if (!isOpen || !updateItem) {
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
          className="text-lg uppercase font-medium cursor-pointer hover:text-black-800"
        >
          Close
        </button>

        {/* content */}
        <div className="py-10">
          <div className="py-8">
            <p className="text-4xl sm:text-7xl uppercase font-black py-2">
              {updateItem.title}
            </p>
            <p>{updateItem.content}</p>
          </div>
          <div className="flex flex-col gap-5">
            {updateItem.images?.map((img, index) => {
              return (
                <>
                  <CustomImage
                    key={index}
                    imgSrc={img.imgSrc}
                    imgAlt={img.imgAlt}
                    width={img.imgWidth}
                    height={img.imgHeight}
                    classname={img.imgClassname}
                  />
                </>
              );
            })}
          </div>
          {updateItem.href && (
            <div className="py-5">
              <a
                href={updateItem.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl underline hover:text-white hover:no-underline"
              >
                Visit the Link
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UpdateModal;
