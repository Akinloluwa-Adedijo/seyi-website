import type { UpdateItem } from "../../pages/Updates/Updates";

interface UpdateCardProps {
  onItemClick: (item: UpdateItem) => void;
}

const updatesData: UpdateItem[] = [
  {
    id: 1,
    title: "PERFORMANCE AT TALK WITH SOSA: A MENTAL HEALTH CONFERENCE",
    cover: "/seyi-landing.jpg",
    coverAlt: "alt text goes here",
    content: [
      "Performing for this event meant a lot to me as i have also struggled  with mental health issues in the past. I was extremly honoured to play  my piece “I love you,” a tale of two lovers in a toxic cylce, “if my  bottle could talk”, a poem about alcholism, “lost”, a poem about the  troubles finiding yourself in a new enovironment as an international  student.",
    ],
    images: [
      {
        imgSrc: "/images/recent_images/performance_talk_with_sosa_1.webp",
        imgAlt: "img text goes",
      },
      {
        imgSrc: "/images/recent_images/performance_talk_with_sosa_2.webp",
        imgAlt: "img text goes",
      },
      {
        imgSrc: "/images/recent_images/performance_talk_with_sosa_3.webp",
        imgAlt: "img text goes",
      },
      {
        imgSrc: "/images/recent_images/performance_talk_with_sosa_4.webp",
        imgAlt: "img text goes",
      },
    ],
  },
  {
    id: 2,
    title: "Seyi Synth 5k",
    cover: "/seyi-landing.jpg",
    coverAlt: "alt text goes here",
    content: ["Synth made with Max MSP"],
    images: [
      {
        imgSrc: "/images/recent_images/performance_talk_with_sosa_1.webp",
        imgAlt: "img text goes",
      },
    ],
  },
  {
    id: 3,
    title: "Upcoming Album: Oluwaseyi The Poet",
    cover: "/seyi-landing.jpg",
    coverAlt: "alt text goes here",
    content: ["Synth made with Max MSP"],
    images: [
      {
        imgSrc: "/images/recent_images/performance_talk_with_sosa_1.webp",
        imgAlt: "img text goes",
      },
    ],
    href: "https://unitedmasters.com/m/godot-act-1-a-performance-of-self",
  },
];
const UpdateCard = ({ onItemClick }: UpdateCardProps) => {
  return (
    <>
      {updatesData.map((update) => (
        <div className="flex flex-col gap-3" key={update.id}>
          <div className="max-h-[250px] overflow-hidden">
            <img
              src={update.cover}
              alt={update.coverAlt}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-1 text-xl">
            <p>{update.title}</p>
            <div onClick={() => onItemClick(update)}>
              <a
                href="#"
                className="underline hover:no-underline text-black-300 hover:text-black-50 transition-colors ease-in-out duration-200"
              >
                View Details
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default UpdateCard;
