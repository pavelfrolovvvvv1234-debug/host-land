"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { fadeInUp } from "../../lib/motion";

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

export function FAQItem({ question, answer, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.details
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05 }}
      className="group border border-white/10 rounded-lg p-4 bg-black/30"
      whileHover={{ borderColor: "rgba(66, 104, 255, 0.3)" }}
      open={isOpen}
      onToggle={(e) => setIsOpen((e.target as HTMLDetailsElement).open)}
    >
      <summary className="cursor-pointer font-semibold text-lg flex items-center justify-between list-none">
        <span>{question}</span>
        <motion.span
          className="faq-arrow ml-2 inline-block"
          animate={{
            rotate: isOpen ? 90 : 0,
          }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        >
          ▶
        </motion.span>
      </summary>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className="overflow-hidden"
      >
        <p className="mt-2 text-sm text-white/70">{answer}</p>
      </motion.div>
    </motion.details>
  );
}

