"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Lock } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Project {
  name: string;
  company: string;
  description: string;
  privateLevel: number; // 0: public, 1: private source, 2: fully private
  sourceUrl?: string;
  liveUrl?: string;
  tags: string[];
}

export default function Projects() {
  const projects: Project[] = [
    {
      name: "Pars Dade Gostar [2 years]",
      company: "ParsDadeGostar",
      description: "Blazing Fast e-shop to build and order a gaming pc",
      privateLevel: 2,
      tags: ["React", "Redux", "TailwindCSS", "Django"],
    },
    {
      name: "Freelancer [1 year]",
      company: "Karlancer",
      description:
        "combination of admin panels, booking, health care, shops, and other projects ",
      privateLevel: 2,
      tags: ["Next.js", "React", "TypesScript"],
    },
    {
      name: "Packer",
      company: "TLTC",
      description:
        "the best solution to pick - orgnize - note and GROUP your house furnitures",
      privateLevel: 0,
      sourceUrl: "https://github.com/example/stellar-maps",
      liveUrl: "https://stellar-maps.example.com",
      tags: ["React", "React Router", "Material Me"],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <h2 className="text-2xl font-bold tracking-tight">Projects</h2>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-lg border border-space-white/10 p-6 bg-space-gray/30 backdrop-blur-sm hover:shadow-glow transition-all duration-300"
          >
            <div className="flex flex-col space-y-4">
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <span className="text-xs text-space-white/50">
                    {project.company}
                  </span>
                </div>
                <p className="text-space-white/70 mt-2 max-w-[500px]">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-space-white/10 text-space-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-2">
                <TooltipProvider>
                  {project.privateLevel < 1 ? (
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-space-gray hover:bg-space-gray/80 text-space-white/90 border-space-white/10"
                      asChild
                    >
                      <a
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={14} className="mr-2" />
                        Source Code
                      </a>
                    </Button>
                  ) : (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-space-gray/50 text-space-white/50 border-space-white/10 cursor-not-allowed"
                          disabled
                        >
                          <Lock size={14} className="mr-2" />
                          Source Code
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Private repository</p>
                      </TooltipContent>
                    </Tooltip>
                  )}

                  {project.privateLevel < 2 ? (
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-space-gray hover:bg-space-gray/80 text-space-white/90 border-space-white/10"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={14} className="mr-2" />
                        Launch
                      </a>
                    </Button>
                  ) : (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-space-gray/50 text-space-white/50 border-space-white/10 cursor-not-allowed"
                          disabled
                        >
                          <Lock size={14} className="mr-2" />
                          Launch
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Private project</p>
                      </TooltipContent>
                    </Tooltip>
                  )}
                </TooltipProvider>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center">
        <Button
          variant="outline"
          className="mt-4 bg-space-gray hover:bg-space-gray/80 text-space-white border border-space-white/10"
        >
          View Archive
        </Button>
      </div>
    </motion.div>
  );
}
