import { Variants } from "framer-motion";

/**
 * Reusable motion variants for consistent animations across the site
 * All animations are GPU-accelerated and respect prefers-reduced-motion
 */

// Check for reduced motion preference
export const prefersReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

/**
 * Fade in with upward motion
 */
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

/**
 * Fade in only
 */
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

/**
 * Stagger container for children
 */
export const staggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

/**
 * Scale up on hover
 */
export const scaleOnHover: Variants = {
  rest: {
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

/**
 * Card hover effect with glow
 */
export const cardHover: Variants = {
  rest: {
    scale: 1,
    y: 0,
    boxShadow: "0 0 0 rgba(66, 104, 255, 0)",
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.02,
    y: -4,
    boxShadow: "0 20px 40px rgba(10, 77, 146, 0.3), 0 0 20px rgba(66, 104, 255, 0.15)",
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
};

/**
 * Premium card hover with bloom effect
 */
export const premiumCardHover: Variants = {
  rest: {
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  hover: {
    scale: 1.03,
    y: -6,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

/**
 * Icon rotation on hover
 */
export const iconRotate: Variants = {
  rest: {
    rotate: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  hover: {
    rotate: 5,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

/**
 * Pulse animation for premium elements
 */
export const pulse: Variants = {
  animate: {
    opacity: [0.96, 1, 0.96],
    scale: [1, 1.01, 1],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/**
 * Slow pulse for IPHM cards
 */
export const slowPulse: Variants = {
  animate: {
    opacity: [0.96, 1, 0.96],
    transition: {
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/**
 * Slide in from left
 */
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

/**
 * Slide in from right
 */
export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

/**
 * Progress line animation
 */
export const progressLine: Variants = {
  hidden: {
    width: 0,
  },
  visible: {
    width: "100%",
    transition: {
      duration: 1.2,
      ease: [0.4, 0, 0.2, 1],
      delay: 0.3,
    },
  },
};

/**
 * Breathing animation for TLDs
 */
export const breathing: Variants = {
  animate: {
    opacity: [0.9, 1, 0.9],
    y: [0, -1, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/**
 * Glow pulse for special TLDs
 */
export const glowPulse: Variants = {
  animate: {
    boxShadow: [
      "0 0 0 rgba(66, 104, 255, 0)",
      "0 0 8px rgba(66, 104, 255, 0.3)",
      "0 0 0 rgba(66, 104, 255, 0)",
    ],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

