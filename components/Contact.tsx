"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const webhookUrl =
      "https://discord.com/api/webhooks/1346830826553475082/hLqVz1-pwCKNpcN8jW2kmFNAf4F02cD761n3i8e1Y-vC8O2-IwMW9QRW2vVtJqmygVFf";
    const payload = {
      content: `**New Contact Form Submission**\n\n**Name:** ${formData.name}\n**Email:** ${formData.email}\n**Message:**\n${formData.message}`,
    };

    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <h2 className="text-2xl font-bold tracking-tight">Contact Me</h2>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-[500px]">
        <div className="space-y-4">
          <div>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="bg-space-gray/30 border-space-white/10 focus:border-space-white/30 text-space-white placeholder:text-space-white/50"
            />
          </div>

          <div>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="bg-space-gray/30 border-space-white/10 focus:border-space-white/30 text-space-white placeholder:text-space-white/50"
            />
          </div>

          <div>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows={5}
              className="bg-space-gray/30 border-space-white/10 focus:border-space-white/30 text-space-white placeholder:text-space-white/50 resize-none"
            />
          </div>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-space-gray hover:bg-space-gray/80 text-space-white border border-space-white/10 shadow-glow hover:shadow-glow-intense transition-all duration-300"
        >
          {isSubmitting ? (
            "Sending..."
          ) : (
            <>
              <Send size={16} className="mr-2" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </motion.div>
  );
}
