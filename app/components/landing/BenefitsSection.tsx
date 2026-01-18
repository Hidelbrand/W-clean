'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bug, Wind, Sparkles, ShieldCheck } from 'lucide-react';

const benefits = [
  {
    icon: Bug,
    title: "Eliminação de Ácaros e Bactérias",
    description: "Removemos até 99% dos microrganismos que causam alergias e doenças respiratórias.",
    color: "bg-rose-500",
    lightBg: "bg-rose-50",
  },
  {
    icon: Wind,
    title: "Melhora da Saúde Respiratória",
    description: "Ar mais puro e ambiente mais saudável para toda a família, especialmente para alérgicos.",
    color: "bg-sky-500",
    lightBg: "bg-sky-50",
  },
  {
    icon: Sparkles,
    title: "Limpeza Profunda",
    description: "Alcançamos camadas que a limpeza comum não consegue, removendo sujeira acumulada.",
    color: "bg-amber-500",
    lightBg: "bg-amber-50",
  },
  {
    icon: ShieldCheck,
    title: "Produtos Seguros",
    description: "Utilizamos produtos atóxicos e biodegradáveis, seguros para crianças e pets.",
    color: "bg-emerald-500",
    lightBg: "bg-emerald-50",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.1) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase mb-4 block">
            Benefícios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Por que Higienizar com a
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500"> W-Clean?</span>
          </h2>
          <p className="text-lg text-slate-600">
            Muito mais que limpeza: proporcionamos saúde, bem-estar e qualidade de vida para sua família.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-500 h-full">
                <div className={`w-14 h-14 ${benefit.lightBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className={`w-7 h-7 ${benefit.color.replace('bg-', 'text-')}`} />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}