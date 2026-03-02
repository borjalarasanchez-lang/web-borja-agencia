"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#020202] border-t border-zinc-900 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 flex items-center justify-center">
                <Image 
                  src="/images/logo.svg" 
                  alt="WebLogic Logo" 
                  width={32} 
                  height={32} 
                  className="object-contain"
                />
              </div>
              <span className="font-sans text-lg font-bold text-zinc-100">WebLogic</span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
              Infraestructura digital y automatización inteligente para empresas que valoran su tiempo.
              Transformamos procesos manuales en sistemas eficientes.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Servicios</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li><Link href="/servicios" className="hover:text-blue-500 transition-colors">Desarrollo Web</Link></li>
              <li><Link href="/ia-agents" className="hover:text-blue-500 transition-colors">Automatización</Link></li>
              <li><Link href="/servicios" className="hover:text-blue-500 transition-colors">Integraciones</Link></li>
              <li><Link href="/diagnostico" className="hover:text-blue-500 transition-colors">Consultoría</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li><Link href="/aviso-legal" className="hover:text-blue-500 transition-colors">Aviso Legal</Link></li>
              <li><Link href="/privacidad" className="hover:text-blue-500 transition-colors">Privacidad</Link></li>
              <li><Link href="/cookies" className="hover:text-blue-500 transition-colors">Cookies</Link></li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
          <span>© {new Date().getFullYear()} WebLogic. Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  );
}
