"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { breathing, glowPulse } from "@/lib/motion";

interface TLDCloudProps {
  children: ReactNode;
  isSpecial?: boolean;
  delay?: number;
  className?: string;
}

export function TLDCloud({ children, isSpecial = false, delay = 0, className = "" }: TLDCloudProps) {
  const variants = isSpecial ? { ...breathing, ...glowPulse } : breathing;

  return (
    <motion.div
      variants={variants}
      animate="animate"
      style={{ animationDelay: `${delay}s` }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

