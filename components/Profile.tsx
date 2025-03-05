"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Profile() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center lg:items-start pt-16 lg:pt-0"
    >
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
        <div className="relative w-32 h-32 overflow-hidden rounded-full border-2 border-space-white/20 shadow-glow">
          <Image
            src="/image.jpg?height=128&width=128"
            alt="Profile"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex flex-col items-center lg:items-start lg:pt-4">
          <h1 className="text-3xl font-bold tracking-tight">Parsa Norozi</h1>
          <p className="text-space-white/80 max-w-xs text-center lg:text-left lg:pl-2 mt-2">
            React Developer
          </p>
        </div>
      </div>
    </motion.div>
  );
}
