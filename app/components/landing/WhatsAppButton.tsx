'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = "5515996977096";
const WHATSAPP_MESSAGE = "Olá! Gostaria de solicitar um orçamento para higienização.";

export default function WhatsAppButton() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="relative">
        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-30" />
        
        {/* Button */}
        <div className="relative w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/40 hover:shadow-xl hover:shadow-green-500/50 transition-shadow">
          <MessageCircle className="w-8 h-8 text-white" />
        </div>

        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 pointer-events-none">
          <div className="bg-slate-900 text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap shadow-lg">
            Fale conosco!
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-slate-900 rotate-45" />
          </div>
        </div>
      </div>
    </motion.a>
  );
}