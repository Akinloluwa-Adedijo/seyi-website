const navigationLinks = [
  {
    name: "Music",
    href: "/music",
  },
  {
    name: "Offstage",
    href: "/offstage",
  },
  {
    name: "Updates",
    href: "/updates",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];
const contactLinks = [
  {
    name: "Email",
    href: "mailto:seyimgmnt@gmail.com",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/seyithepoet/?hl=en",
  },
];

const listenLinks = [
  {
    name: "Spotify",
    href: "https://open.spotify.com/artist/1N06xJ9v8d6oDgCUqBSkr7",
  },
  {
    name: "Apple Music",
    href: "https://music.apple.com/ca/artist/%C8%99%C3%A8y%C3%ADthepoet/1765384886",
  },
  {
    name: "Youtube",
    href: "https://www.youtube.com/@seyithepoet.mp4",
  },
];

interface RenderLinkProps {
  title: string;
  links: { name: string; href: string }[];
}

const RenderLinks = ({ title, links }: RenderLinkProps) => {
  return (
    <div className="flex flex-col gap-2 text-base uppercase font-semibold">
      <p className="font-normal text-gray-300">{title}</p>
      {links.map((link, index) => (
        <a key={index} href={link.href} className="hover:text-yellow-300">
          {link.name}
        </a>
      ))}
    </div>
  );
};
const Footer = () => {
  return (
    <footer className="flex flex-col gap-25 p-5 pt-50">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
        <RenderLinks title="Navigation" links={navigationLinks} />
        <RenderLinks title="Contact" links={contactLinks} />
        <RenderLinks title="Listen" links={listenLinks} />
      </div>
      <div className="flex flex-col justify-between gap-5 sm:items-end sm:flex-row text-yellow-300">
        <p className="text-[8vw] font-black uppercase">Șèyí,ThePoet</p>
        <p>@2025</p>
      </div>
    </footer>
  );
};

export default Footer;
