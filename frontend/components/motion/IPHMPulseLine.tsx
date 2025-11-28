"use client";

import { motion } from "framer-motion";

export function IPHMPulseLine() {
  return (
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent overflow-hidden">
      <motion.div
        className="h-full w-32 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}


