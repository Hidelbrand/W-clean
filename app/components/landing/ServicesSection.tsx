'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Sofa, Layers, BedDouble, ArrowRight } from 'lucide-react';
import { Button } from "@/app/components/ui/button";

const WHATSAPP_NUMBER = "5515996977096";

const services = [
  {
    icon: Sofa,
    title: "Higienização de Sofás",
    description: "Limpeza profunda que remove sujeira, manchas, ácaros e bactérias, devolvendo a beleza e o conforto do seu sofá.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop",
    color: "from-blue-500 to-blue-600",
    bgLight: "bg-blue-50",
  },
  {
    icon: Layers,
    title: "Higienização de Carpetes e Tapetes",
    description: "Eliminação completa de sujeira acumulada, manchas e microrganismos, prolongando a vida útil e a beleza dos seus tapetes.",
    image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=400&h=300&fit=crop",
    color: "from-cyan-500 to-cyan-600",
    bgLight: "bg-cyan-50",
  },
  {
    icon: BedDouble,
    title: "Higienização de Colchões",
    description: "Sono mais saudável com a eliminação de ácaros, fungos e bactérias. Ideal para alérgicos e para manter a higiene do quarto.",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop",
    color: "from-teal-500 to-teal-600",
    bgLight: "bg-teal-50",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase mb-4 block">
            Nossos Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Soluções Completas em
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500"> Higienização</span>
          </h2>
          <p className="text-lg text-slate-600">
            Utilizamos equipamentos de última geração e produtos de alta qualidade para garantir resultados excepcionais.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 h-full flex flex-col">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-40`} />
                  <div className={`absolute top-4 left-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg`}>
                    <service.icon className={`w-6 h-6 bg-gradient-to-r ${service.color} bg-clip-text`} style={{ color: service.color.includes('blue') ? '#3b82f6' : service.color.includes('cyan') ? '#06b6d4' : '#14b8a6' }} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6 flex-1">
                    {service.description}
                  </p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre ${service.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group/link"
                  >
                    Solicitar Orçamento
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}