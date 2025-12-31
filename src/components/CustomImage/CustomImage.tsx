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
}: CustomImageProps) => {
  return (

    <div className={`img-container ${classname}`} data-title={linkTitle}>
          <img src={imgSrc} alt={imgAlt} width={width} height={height} />
          <a href={linkTitle} className="text-5xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-accent">{linkTitle}</a>
    </div>
  );
};

export default CustomImage;
