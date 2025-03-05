"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <h2 className="text-2xl font-bold tracking-tight">About Me</h2>

      <div className="space-y-6 max-w-[500px]">
        <p className="text-space-white/75 leading-relaxed">
          Hey there im pari (legal name:{" "}
          <span className="text-space-white bg-space-gray">Hossein Norozi</span>
          )
          <br /> Your next-door 10x software engineer, You use a normal qwerty
          mechanical keyboard, I use a 40% split 3d printed one. You use a
          pretty nice wide and curved monitor, I use a 15 year old ThinkPad with
          a 720*720 resolution, Im that one guy who spends a week finding a nice
          border radius for his taskbar.
        </p>

        <p className="text-space-white/75 leading-relaxed">
          Started designing{" "}
          <span className="text-space-white bg-space-gray">desktop apps</span>{" "}
          and user interfaces for fun, Years later here i am creating{" "}
          <span className="text-space-white bg-space-gray">
            Web Applications
          </span>{" "}
          and taking the bait of{" "}
          <span className="text-space-white bg-space-gray">React</span> hooks. I
          spent past few years by freelancing and contributing to open source, I
          also have a good amount of experience in team based projects.
          Currently willing to work as a full time Front-End position
        </p>
      </div>

      <Button className="group bg-space-gray hover:bg-space-gray/80 text-space-white border border-space-white/10 shadow-glow hover:shadow-glow-intense transition-all duration-300">
        <Download size={16} className="mr-2 group-hover:animate-bounce" />
        Download CV
      </Button>

      <div className="grid grid-cols-2 gap-6 mt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="col-span-2 p-6 bg-space-gray rounded-lg border border-space-white/10 mt-16"
        >
          <h3 className="text-lg font-semibold mb-2">Made for You</h3>
          <p className="text-space-white/70 text-sm">
            hiring me is like ordering pizza, you get to choose any flavor you
            wish, i cook (code) whats best for YOU even if it dosnt make any
            sense
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="p-6 bg-space-gray rounded-lg border border-space-white/10"
        >
          <h3 className="text-lg font-semibold mb-2">3 in one</h3>
          <p className="text-space-white/70 text-sm">
            pari provids design, words and code for you
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="p-6 bg-space-gray rounded-lg border border-space-white/10"
        >
          <h3 className="text-lg font-semibold mb-2">Stack</h3>
          <p className="text-space-white/70 text-sm">
            I will pick the best set of technologies and libraries that works
            best for your project
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
