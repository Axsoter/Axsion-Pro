"use client";

import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

interface TiltProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export default function Tilt({ children, ...props }: TiltProps) {
    const tiltRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const { current } = tiltRef;
        if (current) {
            VanillaTilt.init(current, {
                max: 25,
                speed: 400,
                scale: 1.1
            });
        }

        return () => {
            // have to tsignore because javascript
            // @ts-ignore
            if (current && current.vanillaTilt) {
                // @ts-ignore
                current.vanillaTilt.destroy();
            }
        };
    }, []);

    return (
        <div ref={tiltRef} {...props}>
            {children}
        </div>
    );
}
