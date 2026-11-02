"use client";

import { motion } from "framer-motion";
import { MessageSquare, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function FloatingButton() {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
      <motion.a
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.8 }}
        href={siteConfig.contact.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 sm:gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl hover:shadow-2xl px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-full text-[11px] sm:text-xs font-bold transition-all hover:scale-105 active:scale-95"
        title="Chat directly with our Media Buying team on WhatsApp"
      >
        <span className="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-2 sm:h-2.5 w-2 sm:w-2.5 bg-white" />
        </span>
        <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
        <span>Chat on WhatsApp</span>
        <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </motion.a>
    </div>
  );
}
