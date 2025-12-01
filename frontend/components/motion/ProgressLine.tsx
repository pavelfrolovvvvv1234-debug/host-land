"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { progressLine } from "../../lib/motion";

export function ProgressLine() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="h-0.5 bg-white/10 rounded-full overflow-hidden mt-2">
      <motion.div
        className="h-full bg-gradient-to-r from-blue-500/50 to-blue-400/30 rounded-full"
        variants={progressLine}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      />
    </div>
  );
}

