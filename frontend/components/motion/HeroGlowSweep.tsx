"use client";

import { motion } from "framer-motion";

export function HeroGlowSweep() {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none z-[1]"
      style={{
        background: `linear-gradient(
          90deg,
          transparent 0%,
          rgba(66, 104, 255, 0.03) 20%,
          rgba(66, 104, 255, 0.08) 50%,
          rgba(66, 104, 255, 0.03) 80%,
          transparent 100%
        )`,
        backgroundSize: "200% 100%",
      }}
      animate={{
        backgroundPosition: ["0% 0%", "200% 0%"],
      }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}

