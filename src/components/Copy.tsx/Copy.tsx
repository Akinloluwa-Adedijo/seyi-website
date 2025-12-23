

import React, { useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";


gsap.registerPlugin(SplitText, ScrollTrigger);
interface CopyProps {
    children: React.ReactElement | React.ReactNode;
    animateOnScroll?: boolean;
    delay?: number;
}
export default function Copy({children, animateOnScroll = true, delay = 0}: CopyProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const elementRef = useRef<HTMLElement[]>([]);
    const splitRef = useRef<SplitText[]>([]);
    const lines = useRef<HTMLElement[]>([]);
    // TODO: add words and chars when i need it or when i have time
    // const words = useRef([]);
    // const chars = useRef([]);

    useGSAP(() => {
        // check if containerRef exists because react might call it before the dom is ready
        if(!containerRef.current) return;

        splitRef.current = [];
        elementRef.current = [];
        lines.current = [];

        let elements: HTMLElement[] = [];
        if(containerRef.current.hasAttribute("data-copy-wrapper"))
        {
            elements = Array.from(containerRef.current.children) as HTMLElement[];
        }
        else{
            elements = [containerRef.current];
        }

        elements.forEach((element) => {
            elementRef.current.push(element);

            const split = SplitText.create(element, {
                type: "lines",
                mask: 'lines',
                linesClass: "line++",
                autoSplit: true,
                onSplit: (self) => {
                    gsap.set(self.lines, {
                        y:'100%',
                    })
                    const animationProps = {
                        y:"0%",
                        duration: 1,
                        stagger: 0.1,
                        ease: "power4.out",
                        delay: delay
                    }

                    if(animateOnScroll){
                        gsap.to(self.lines, {...animationProps, scrollTrigger: {
                            trigger: containerRef.current,
                            // start when the top of the trigger is 75% of the viewport
                            start: "top 75%",
                            // end when the bottom of the trigger is 25% of the viewport
                            once: true,
                            // markers: true,
                        }})
                    }else{
                        gsap.to(self.lines, animationProps)
                    }
                }
            })
            
            splitRef.current.push(split);

            // get computed styles to preserve indentation and apply it as padding back to the split text as padding-left
            const computedStyle = window.getComputedStyle(element);
            const textIndent = computedStyle.textIndent;

            if(textIndent && textIndent !== "0px"){
                if(split.lines.length > 0){
                    split.lines[0].style.paddingLeft = textIndent;
                }
                element.style.textIndent = "0";
            }
            lines.current.push(...(split.lines as HTMLElement[]));
        })

        // gsap.set(lines.current, {
        //     y:'100%',
        // })

        // const animationProps = {
        //     y:"0%",
        //     duration: 1,
        //     stagger: 0.1,
        //     ease: "power4.out",
        //     delay: delay
        // }

        // if(animateOnScroll){
        //     gsap.to(lines.current, {...animationProps, scrollTrigger: {
        //         trigger: containerRef.current,
        //         // start when the top of the trigger is 75% of the viewport
        //         start: "top 75%",
        //         // end when the bottom of the trigger is 25% of the viewport
        //         once: true,
        //         // markers: true,
        //     }})
        // }else{
        //     gsap.to(lines.current, animationProps)
        // }
        

        // return () => {
        //     splitRef.current.forEach(split => {
        //         if(split){
        //             split.revert();
        //         }
        //     })
        // }
    }, {scope: containerRef, dependencies: [animateOnScroll, delay]})
    // using REact.cloneElement to pass ref to child
    if(React.Children.count(children) === 1 && React.isValidElement(children)){
        return React.cloneElement(children, {ref: containerRef} as any);
    }
    return (
        <div ref={containerRef} data-copy-wrapper="true">
            {children}
        </div>
    )
    // return React.cloneElement(children, {ref: containerRef});
}