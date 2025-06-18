import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimations() {
    useEffect(() => {
        gsap.utils.toArray(".animate-on-scroll").forEach((el) => {
        const direction = el.dataset.direction || "up";
        const delay = parseFloat(el.dataset.delay) || 0;

        let x = 0,
            y = 0;

        if (direction === "left") x = -100;
        if (direction === "right") x = 100;
        if (direction === "up") y = 100;
        if (direction === "down") y = -100;

        gsap.fromTo(
            el,
            { x, y, opacity: 0 },
            {
            scrollTrigger: {
                trigger: el,
                start: "30% bottom", // when 30% is out of the bottom
                toggleActions: "play none none none",
                markers: false, // turn on if debugging
            },
            x: 0,
            y: 0,
            opacity: 1,
            duration: 1.5,
            delay: delay,
            ease: "elastic.out(1.5,0.3)",
            }
        );
        });

        ScrollTrigger.refresh();
    }, []);
}

