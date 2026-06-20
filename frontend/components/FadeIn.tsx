"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
}

export default function FadeIn({
  children,
  delay = 0,
  className,
  direction = "up",
}: Props) {
  const initial =
    direction === "up"    ? { opacity: 0, y: 28 }
    : direction === "left"  ? { opacity: 0, x: -28 }
    : direction === "right" ? { opacity: 0, x: 28 }
    : { opacity: 0 };

  const animate = direction === "up" || direction === "none"
    ? { opacity: 1, y: 0 }
    : { opacity: 1, x: 0 };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
