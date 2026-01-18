'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Maria Silva",
    role: "Dona de Casa",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    text: "Meu sofá parece novo! A equipe foi super profissional e o resultado surpreendeu. Recomendo muito a W-Clean!",
    rating: 5,
  },
  {
    name: "Carlos Santos",
    role: "Empresário",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    text: "Contratei para higienizar os carpetes do escritório. Serviço rápido, eficiente e preço justo. Virou parceiro!",
    rating: 5,
  },
  {
    name: "Ana Paula",
    role: "Mãe de 2 filhos",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    text: "Meus filhos são alérgicos e desde que higienizei os colchões com a W-Clean, as crises diminuíram muito!",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
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
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            O que nossos
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500"> clientes dizem</span>
          </h2>
          <p className="text-lg text-slate-600">
            A satisfação dos nossos clientes é nossa maior recompensa.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-slate-50 rounded-3xl p-8 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10 border border-transparent hover:border-blue-100 transition-all duration-500 h-full flex flex-col relative">
                {/* Quote Icon */}
                <div className="absolute -top-4 right-8">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Quote className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-slate-600 mb-6 flex-1 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-md"
                  />
                  <div>
                    <p className="font-bold text-slate-800">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}