"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Droplets, Menu, X, Phone } from 'lucide-react';
import { Button } from "@/app/components/ui/button";

const WHATSAPP_NUMBER = "5515996977096";
const WHATSAPP_MESSAGE = "Olá! Gostaria de solicitar um orçamento para higienização.";

const navLinks = [
  { label: "Início", href: "#" },
  { label: "Serviços", href: "#servicos" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-slate-200/50' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <span className={`text-xl font-bold ${isScrolled ? 'text-slate-800' : 'text-slate-800'}`}>
                W-Clean
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`font-medium transition-colors hover:text-blue-600 ${
                    isScrolled ? 'text-slate-700' : 'text-slate-700'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-md shadow-green-500/20">
                  <Phone className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-800" />
              ) : (
                <Menu className="w-6 h-6 text-slate-800" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween' }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl"
            >
              <div className="p-6 pt-24">
                <nav className="space-y-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-lg font-medium text-slate-700 hover:text-blue-600 py-2"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
                <div className="mt-8">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block">
                    <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white">
                      <Phone className="w-4 h-4 mr-2" />
                      Chamar no WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}