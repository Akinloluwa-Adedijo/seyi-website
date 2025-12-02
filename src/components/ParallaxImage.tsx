import { useTransform, useScroll, motion } from "motion/react";



export default function ParallaxImage({image, alt, containerStyle, containerRef}: {image: string, alt: string, containerStyle?: string, containerRef?: React.RefObject<HTMLDivElement>}) {
    const { scrollYProgress } = useScroll(({
        target: containerRef,
        offset: ['start end', 'end start']
    }));
    // const y = useTransform(scrollYProgress, [0, 1], ['0vh', '150vh']);
    const y = useTransform(scrollYProgress, [0, 1], ['-10vh', '90vh']);
    return (
        <div ref={containerRef} className={`overflow-hidden ${containerStyle}`}>
            <motion.div style={{ y }} className="relative  translate-y-[-30%]">
                <img src={image} alt={alt} className="object-cover  w-full " />
            </motion.div>
        </div>
    );
}