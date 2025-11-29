import { useTransform, useScroll, motion } from "motion/react";



export default function ParallaxImage({image, alt, containerStyle, containerRef}: {image: string, alt: string, containerStyle?: string, containerRef?: React.RefObject<HTMLDivElement>}) {
    const { scrollYProgress } = useScroll(({
        target: containerRef,
        offset: ['start end', 'end start']
    }));
    const y = useTransform(scrollYProgress, [0, 1], ['0vh', '150vh']);
    return (
        <div ref={containerRef} className={`overflow-hidden ${containerStyle}`}>
            <motion.div style={{ y }} className="relative h-full top-[-45%]">
                <img src={image} alt={alt} className="object-cover h-full w-full " />
            </motion.div>
        </div>
    );
}