"use client"

import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion"

interface SRProps {
  children: JSX.Element,
  revealConfig?: SRConfigProps,
}

interface SRConfigProps {
  origin?: string
}

export default function ScrollReveal({children, revealConfig = { origin: "bottom" }}: SRProps) {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: false /* = reset: true */ })
  const animHook = useAnimation()

  revealConfig.origin = revealConfig.origin!.charAt(0).toUpperCase() + revealConfig.origin!.slice(1);
  console.log(revealConfig.origin)

  useEffect(() => {
    if (inView) { animHook.start("shown") } else { animHook.set(`hidden${revealConfig.origin}`) };
  }, [inView])

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
      transition={{ duration: 0.5, delay: 0.4 }}

      ref={sectionRef}
    >
      {children}
    </motion.section>
  );
};
