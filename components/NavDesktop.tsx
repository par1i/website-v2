"use client"

import { motion } from "framer-motion"
import Link from "next/link"

interface NavDesktopProps {
  activeSection: string
}

export default function NavDesktop({ activeSection }: NavDesktopProps) {
  const navItems = [
    { name: "about", href: "#about" },
    { name: "projects", href: "#projects" },
    { name: "contact", href: "#contact" },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="hidden lg:block"
    >
      <ul className="space-y-3">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={`group flex items-center space-x-2 transition-all duration-300 ${
                activeSection === item.name ? "text-space-white" : "text-space-white/50 hover:text-space-white/80"
              }`}
            >
              <span
                className={`h-[1px] w-6 bg-current transition-all duration-300 ${
                  activeSection === item.name ? "w-12" : "group-hover:w-8"
                }`}
              ></span>
              <span className={`font-medium ${activeSection === item.name ? "font-semibold" : ""}`}>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}

