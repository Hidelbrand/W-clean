'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Clock, MapPin } from 'lucide-react';
import { Button } from "@/app/components/ui/button";

const WHATSAPP_NUMBER = "5515996977096";
const WHATSAPP_MESSAGE = "Olá! Gostaria de solicitar um orçamento para higienização.";

export default function CTASection() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-100/30 to-cyan-100/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-2xl shadow-blue-500/10 border border-blue-100 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Content */}
              <div className="p-8 lg:p-12">
                <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase mb-4 block">
                  Fale Conosco
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4 leading-tight">
                  Pronto para um ambiente
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500"> mais saudável?</span>
                </h2>
                <p className="text-lg text-slate-600 mb-8">
                  Entre em contato agora pelo WhatsApp e solicite seu orçamento gratuito. Atendimento rápido e personalizado!
                </p>

                <motion.a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-block"
                >
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg shadow-green-500/30 px-8 py-6 text-lg font-semibold rounded-xl"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chamar no WhatsApp
                  </Button>
                </motion.a>

                {/* Info */}
                <div className="mt-8 space-y-3">
                  <div className="flex items-center gap-3 text-slate-600">
                    <Clock className="w-5 h-5 text-blue-500" />
                    <span>Atendimento de Seg a Sáb, 8h às 18h</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <MapPin className="w-5 h-5 text-blue-500" />
                    <span>Atendemos toda a região</span>
                  </div>
                </div>
              </div>

              {/* Visual */}
              <div className="hidden lg:block relative">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=500&fit=crop"
                  alt="Equipe W-Clean"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}