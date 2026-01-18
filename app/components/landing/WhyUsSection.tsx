'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Clock, Award, Heart, CheckCircle } from 'lucide-react';

const reasons = [
  {
    icon: Users,
    title: "Atendimento Profissional",
    description: "Equipe treinada e capacitada para oferecer o melhor serviço.",
  },
  {
    icon: Clock,
    title: "Serviço Rápido e Eficiente",
    description: "Agilidade sem comprometer a qualidade do resultado final.",
  },
  {
    icon: Award,
    title: "Qualidade Garantida",
    description: "Utilizamos as melhores técnicas e equipamentos do mercado.",
  },
  {
    icon: Heart,
    title: "Foco em Saúde",
    description: "Nossa prioridade é o bem-estar da sua família.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-cyan-300 font-semibold text-sm tracking-wider uppercase mb-4 block">
              Diferenciais
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Por que escolher a
              <span className="block text-cyan-300">W-Clean?</span>
            </h2>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Somos especialistas em higienização profissional, comprometidos em entregar resultados excepcionais e transformar o ambiente da sua casa ou empresa.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "500+", label: "Clientes" },
                { value: "5★", label: "Avaliação" },
                { value: "100%", label: "Satisfação" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-3xl lg:text-4xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-blue-200 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Reasons Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-colors"
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-cyan-300" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-blue-100 text-sm">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}