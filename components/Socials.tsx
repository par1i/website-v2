"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Mail, MessageSquare, Send } from "lucide-react";

export default function Socials() {
  const socials = [
    {
      name: "GitHub",
      icon: <Github size={20} />,
      href: "https://github.com/par1i",
    },
    {
      name: "Gmail",
      icon: <Mail size={20} />,
      href: "mailto:raypemaster@gmail.com",
    },
    {
      name: "Outlook",
      icon: <Mail size={20} />,
      href: "mailto:parsamiller@outlook.com",
    },
    { name: "Telegram", icon: <Send size={20} />, href: "https://t.me/p4arii" },
    {
      name: "Discord",
      icon: <MessageSquare size={20} />,
      href: "https://discord.com/users/777881392393879553",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="flex flex-wrap justify-center lg:justify-start gap-3 py-4"
    >
      {socials.map((social) => (
        <Link
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-space-gray hover:bg-space-gray/80 text-space-white/80 hover:text-space-white transition-all duration-300 hover:shadow-glow"
          aria-label={social.name}
        >
          {social.icon}
        </Link>
      ))}
    </motion.div>
  );
}
