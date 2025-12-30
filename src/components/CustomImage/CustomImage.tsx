type CustomImageProps = {
  imgSrc: string;
  imgAlt: string;
  width?: number;
  height?: number;
  classname?: string;
  linkTitle?: string;
  containerRef?: React.Ref<HTMLDivElement>;
  imageRef?: React.Ref<HTMLImageElement>;
};
const CustomImage = ({
  imgSrc,
  imgAlt,
  width,
  height,
  classname,
  linkTitle,
  containerRef,
  imageRef,
}: CustomImageProps) => {
  return (
    // <div className={`${classname} overflow-hidden img-holder`} data-version="Listen Now" data-option="option1">
    //   <motion.img
    //     src={imgSrc}
    //     alt={imgAlt}
    //     width={width}
    //     height={height}
    //     loading="lazy"
    //     transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
    //     className="object-cover w-full"
    //   />
    // </div>
    <div className={`img-container ${classname}`} data-title={linkTitle} ref={containerRef}>
          <img ref={imageRef} src={imgSrc} alt={imgAlt} width={width} height={height} />
          <a href={linkTitle} className="text-5xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-accent">{linkTitle}</a>
        </div>
  );
};

export default CustomImage;
