"use client"

import React, { useRef, useEffect, FC, HTMLAttributes } from "react";
import scrollReveal from "scrollreveal";

interface ScrollRevealProps extends HTMLAttributes<HTMLElement> {
  revealConfig?: scrollReveal.ScrollRevealObjectOptions;
}

const ScrollReveal: FC<ScrollRevealProps> = ({
  children,
  revealConfig = {},
  ...props
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      scrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        delay: 400,
        reset: true,
        interval: 100
    }).reveal(sectionRef.current, revealConfig);
    }
  }, [revealConfig]);

  return (
    <section
      ref={sectionRef}
      data-testid="section"
      {...props}
    >
      {children}
    </section>
  );
};

export default ScrollReveal;
