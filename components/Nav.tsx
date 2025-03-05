"use client"

import Link from "next/link"
import { motion } from "framer-motion"

interface NavProps {
  activeSection: string
}

export default function Nav({ activeSection }: NavProps) {
  const navItems = [
    { name: "about", href: "#about" },
    { name: "projects", href: "#projects" },
    { name: "contact", href: "#contact" },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 lg:hidden"
    >
      <div className="flex justify-center items-center p-4 backdrop-blur-md bg-space-black/80 border-b border-space-white/10">
        <div className="flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative px-3 py-2 transition-all duration-300 ${
                activeSection === item.name
                  ? "text-space-white font-medium"
                  : "text-space-white/70 hover:text-space-white"
              }`}
            >
              {activeSection === item.name && (
                <motion.span
                  layoutId="navHighlight"
                  className="absolute inset-0 rounded-md bg-space-white/10 shadow-glow"
                  style={{ zIndex: -1 }}
                  transition={{ type: "spring", duration: 0.3 }}
                />
              )}
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}

