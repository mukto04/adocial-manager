"use client";

import { motion } from "framer-motion";
import { MessageSquare, Calendar } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function FloatingButton({ onOpenBooking }) {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
      {/* WhatsApp Quick Chat */}
      <motion.a
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.8 }}
        href={siteConfig.contact.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 bg-white text-emerald-700 hover:text-emerald-800 border border-slate-200/90 shadow-lg hover:shadow-xl px-3.5 py-2.5 rounded-full text-xs font-semibold transition-all hover:scale-105 active:scale-95"
        title="Chat with an Ad Specialist on WhatsApp"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <MessageSquare className="w-4 h-4 text-emerald-600" />
        <span className="hidden sm:inline font-medium">WhatsApp</span>
      </motion.a>

      {/* Book Call Quick Trigger */}
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.9 }}
        onClick={onOpenBooking}
        className="flex items-center gap-2 bg-charcoal hover:bg-cobalt-600 text-white shadow-lg hover:shadow-xl px-4 py-2.5 rounded-full text-xs font-bold transition-all hover:scale-105 active:scale-95"
      >
        <Calendar className="w-3.5 h-3.5" />
        <span>Book Call</span>
      </motion.button>
    </div>
  );
}
