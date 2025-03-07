"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full border-t border-space-white/10 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto py-6 px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="h-4 w-4 rounded-full bg-space-white/20 shadow-glow"></div>
          <span className="text-space-white/90 font-medium">Pari</span>
        </div>

        <div className="mt-4 sm:mt-0 text-space-white/50 text-sm">
          © {currentYear} Hossein nurozi | All rights reserved
        </div>

        <div className="mt-4 sm:mt-0 hidden sm:block">
          <div className="h-[1px] w-12 bg-space-white/20"></div>
        </div>
      </div>
    </motion.footer>
  );
}
