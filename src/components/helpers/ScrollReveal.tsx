"use client"

import { useRef, useEffect, ReactNode } from "react";
import { motion, useInView, useAnimation } from "framer-motion"

interface SRProps {
  children: ReactNode,
  revealConfig?: SRConfigProps,
}

interface SRConfigProps {
  origin?: string,
  delay?: number
}

export default function ScrollReveal({children, revealConfig = { origin: "bottom", delay: 1 }}: SRProps) {
  if (revealConfig.origin == undefined) {
    revealConfig.origin = "bottom";
  }
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true /* = reset: false */ })
  const animHook = useAnimation()

  revealConfig.origin = revealConfig.origin!.charAt(0).toUpperCase() + revealConfig.origin!.slice(1);
  console.log(revealConfig.origin)

  useEffect(() => {
    if (inView) { animHook.start("shown") } else { animHook.set(`hidden${revealConfig.origin}`) };
  }, [inView, animHook, revealConfig])

  return (
    <motion.section
      variants={{
        hiddenBottom: { opacity: 0, y: 60 },
        hiddenLeft: { opacity: 0, x: -60 },
        hiddenRight: { opacity: 0, x: 60 },
        hiddenLeftBottom: { opacity: 0, y: 60, x: -60 },
        hiddenRightBottom: { opacity: 0, y: 60, x: 60 },
        shown: { opacity: 1, y: 0, x: 0 }
      }}
      initial={`hidden${revealConfig.origin}`}
      animate={animHook}
      transition={{ duration: 0.5, delay: 0.4 * revealConfig.delay! }}

      ref={sectionRef}
    >
      {children}
    </motion.section>
  );
};
