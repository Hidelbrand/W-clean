'use client';
import React from 'react';
import { Droplets, Instagram, Facebook, Phone } from 'lucide-react';

const WHATSAPP_NUMBER = "5515996977096";
const WHATSAPP_MESSAGE = "Olá! Gostaria de solicitar um orçamento para higienização.";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <Droplets className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold">W-Clean</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/w_cleanoficial/?igsh=MWlmd2p4MTFybHJiMw%3D%3D#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`} className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
              <Phone className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} W-Clean. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}