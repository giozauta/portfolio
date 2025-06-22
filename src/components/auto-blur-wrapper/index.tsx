
import React, { useEffect, useRef, useState } from "react";

export default function AutoBlurWrapper({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`${className} transition-all duration-[1500ms] ease-in-out ${isVisible ? "blur-0 opacity-100 translate-y-0" : "blur-xl opacity-0 translate-y-12"
                }`}
        >
            {children}
        </div>
    );
}
