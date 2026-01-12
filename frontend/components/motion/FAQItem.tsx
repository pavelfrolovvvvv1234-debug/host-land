"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { fadeInUp } from "../../lib/motion";

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

export function FAQItem({ question, answer, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    // Измеряем высоту через скрытый элемент
    const updateHeight = () => {
      if (measureRef.current) {
        const measuredHeight = measureRef.current.scrollHeight;
        if (measuredHeight > 0) {
          setHeight(measuredHeight);
        }
      }
    };

    // Debounce для resize
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(updateHeight, 150);
    };

    // Измеряем сразу и с задержками для надежности
    updateHeight();
    const timer1 = setTimeout(updateHeight, 10);
    const timer2 = setTimeout(updateHeight, 50);
    const timer3 = setTimeout(updateHeight, 100);

    // Измеряем при изменении размера окна (debounced)
    window.addEventListener("resize", handleResize);
    
    // Измеряем при изменении isOpen (на случай изменения контента)
    if (isOpen) {
      const timer4 = setTimeout(updateHeight, 150);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
        clearTimeout(resizeTimer);
        window.removeEventListener("resize", handleResize);
      };
    }

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, [answer, isOpen]);

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Обновляем высоту перед изменением состояния, если открываем
    if (!isOpen && measureRef.current) {
      const measuredHeight = measureRef.current.scrollHeight;
      if (measuredHeight > 0) {
        setHeight(measuredHeight);
      }
    }
    
    setIsOpen((prev) => !prev);
  };

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05 }}
      className="group border border-white/10 rounded-lg p-4 bg-black/30 overflow-hidden relative"
      whileHover={{ borderColor: "rgba(66, 104, 255, 0.3)" }}
    >
      <button
        onClick={handleToggle}
        className="w-full cursor-pointer font-semibold text-lg flex items-center justify-between text-left bg-transparent border-none p-0 m-0 relative z-10"
        type="button"
        aria-expanded={isOpen}
        aria-controls={`faq-content-${index}`}
      >
        <span className="pr-4 flex-1">{question}</span>
        <motion.span
          className="faq-arrow ml-2 inline-block text-blue-400 flex-shrink-0"
          animate={{
            rotate: isOpen ? 90 : 0,
            scale: isOpen ? 1.1 : 1,
          }}
          transition={{ 
            duration: 0.4, 
            ease: [0.4, 0, 0.2, 1],
            scale: { duration: 0.2 }
          }}
        >
          ▶
        </motion.span>
      </button>
      
      {/* Скрытый элемент для измерения высоты */}
      <div
        ref={measureRef}
        style={{
          position: "absolute",
          top: "-9999px",
          left: "0",
          width: "calc(100% - 2rem)",
          padding: "0 1rem",
          visibility: "hidden",
          height: "auto",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      >
        <p className="mt-3 text-sm text-white/70 leading-relaxed">
          {answer}
        </p>
      </div>

      <motion.div
        ref={contentRef}
        id={`faq-content-${index}`}
        initial={false}
        animate={{
          height: isOpen && height > 0 ? height : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ 
          height: {
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1],
          },
          opacity: {
            duration: 0.3,
            delay: isOpen ? 0.05 : 0,
            ease: [0.4, 0, 0.2, 1],
          }
        }}
        className="overflow-hidden"
        style={{
          willChange: "height, opacity"
        }}
      >
        <p className="mt-3 text-sm text-white/70 leading-relaxed">
          {answer}
        </p>
      </motion.div>
    </motion.div>
  );
}

