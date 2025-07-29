"use client";

import { motion } from "framer-motion";

/**
 * This component acts as a client-side boundary for Framer Motion components.
 * By re-exporting them from a client component, we can safely use them within
 * Server Components without causing errors.
 */
export const MotionDiv = motion.div;
