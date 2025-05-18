import type { UpdateItem } from "../../pages/Updates/Updates";
import { useEffect } from "react";
interface UpdateModalProps {
  isOpen: Boolean;
  onClose: () => void;
  updateItem: UpdateItem | null;
}
const UpdateModal = ({ isOpen, onClose, updateItem }: UpdateModalProps) => {
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
          className="text-2xl uppercase font-semibold cursor-pointer"
        >
          Close
        </button>

        {/* content */}
        <div className="py-10">
          <div className="py-8">
            <p className="text-5xl uppercase font-black py-2">
              {updateItem.title}
            </p>
            <p>{updateItem.content}</p>
          </div>
          <div>
            {updateItem.images.map((img, index) => {
              return <img src={img.imgSrc} alt={img.imgAlt} key={index} />;
            })}
          </div>
          {updateItem.href && (
            <div>
              <a
                href={updateItem.href}
                target="_blank"
                rel="noopener noreferrer"
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
