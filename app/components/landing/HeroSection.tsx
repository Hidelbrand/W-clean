'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Phone, Shield, CheckCircle } from 'lucide-react';
import { Button } from "@/app/components/ui/button";

const WHATSAPP_NUMBER = "5515996977096"; // Substituir pelo número real
const WHATSAPP_MESSAGE = "Olá! Gostaria de solicitar um orçamento para higienização.";

export default function HeroSection() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-100/20 to-cyan-100/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-blue-100 mb-6"
            >
              <Sparkles className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-slate-700">Limpeza Profissional</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight mb-6">
              Higienização
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Profissional
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl mt-2">para seu Lar</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Elimine <strong className="text-slate-800">ácaros, bactérias e odores</strong> de sofás, 
              carpetes e colchões. Respire melhor, viva com mais saúde.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg shadow-green-500/30 px-8 py-6 text-lg font-semibold rounded-xl"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Chamar no WhatsApp
                </Button>
              </motion.a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              {[
                { icon: Shield, text: "Produtos Seguros" },
                { icon: CheckCircle, text: "Garantia de Qualidade" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-2 text-slate-600"
                >
                  <item.icon className="w-5 h-5 text-blue-500" />
                  <span className="text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl transform rotate-3 scale-105 opacity-20 blur-sm" />
              <div className="relative bg-white rounded-3xl shadow-2xl shadow-blue-500/10 p-8 border border-blue-100">
                <img
                  src="https://images.unsplash.com/photo-1558317374-067fb5f30001?w=600&h=500&fit=crop"
                  alt="Higienização Profissional"
                  className="rounded-2xl w-full h-80 object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-500 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">+500</p>
                      <p className="text-sm text-slate-500">Clientes Satisfeitos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-slate-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}