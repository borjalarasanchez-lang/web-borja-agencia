"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatedButton } from "./ui/AnimatedButton";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navItems = [
    { name: "Inicio", path: "/" },
    { name: "Servicios", path: "/servicios" },
    { name: "Tiendas", path: "/tiendas" },
    { name: "Agentes IA", path: "/ia-agents" },
    { name: "Proyectos", path: "/proyectos" },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 border-b border-white/5 bg-[#0a0a0a]/70 backdrop-blur-xl supports-[backdrop-filter]:bg-[#0a0a0a]/60">
      {/* Reading Progress Bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 origin-left"
        style={{ scaleX }}
      />
      
      <div className="flex h-full max-w-7xl mx-auto items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex items-center justify-center overflow-hidden rounded-lg bg-black group-hover:scale-105 transition-transform duration-300">
            <Image 
              src="/images/logo.svg" 
              alt="WebLogic Logo" 
              width={40} 
              height={40} 
              className="object-contain p-1"
            />
          </div>
          <span className="font-sans text-xl font-bold tracking-tight text-white group-hover:text-blue-200 transition-colors">
            WebLogic
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            
            return (
              <Link
                key={item.name}
                href={item.path}
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  isActive ? "text-white" : "text-zinc-400 hover:text-white"
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 rounded-full -translate-x-1/2 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            );
          })}
          <AnimatedButton 
            href="/diagnostico" 
            variant="primary" 
            className="!px-6 !py-2 text-sm shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40" 
            icon={false}
          >
            Diagnóstico Gratuito
          </AnimatedButton>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-zinc-300 hover:text-white transition-colors p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/5 p-6 md:hidden flex flex-col gap-6 shadow-2xl"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-medium hover:text-white hover:pl-2 transition-all duration-300 border-l-2 border-transparent hover:border-blue-500 pl-0 ${
                pathname === item.path ? "text-white border-blue-500 pl-2" : "text-zinc-400"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <AnimatedButton 
            href="/diagnostico" 
            variant="primary" 
            className="w-full justify-center mt-4" 
            onClick={() => setIsOpen(false)}
            icon={false}
          >
            Diagnóstico Gratuito
          </AnimatedButton>
        </motion.div>
      )}
    </nav>
  );
}
