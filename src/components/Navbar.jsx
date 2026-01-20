import { useState } from 'react'
import { Menu, X, Github, Linkedin } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = ({ setIsAboutOpen }) => {
const [isOpen, setIsOpen] = useState(false)

  // Función para scrollear suavemente a las secciones
const scrollToSection = (id) => {
    setIsOpen(false); // Cerramos el menú móvil si está abierto
    const element = document.getElementById(id);
    if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    }
}

  // Links de navegación
const navLinks = [
    { name: 'Inicio', action: () => scrollToSection('hero') },
    { name: 'Habilidades', action: () => scrollToSection('skills') },
    { name: 'Proyectos', action: () => scrollToSection('projects') },
    { name: 'Contacto', action: () => scrollToSection('contact') },
]

return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">   
          {/* LOGO (Izquierda) */}
            <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <span className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
            LF
            </span>
        </div>

          {/* --- MENÚ DE ESCRITORIO (Visible solo en md o superior) --- */}
        <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
            <button
                key={link.name}
                onClick={link.action}
                className="text-slate-300 hover:text-violet-400 transition-colors text-sm font-medium"
            >
                {link.name}
            </button>
            ))}
            
            {/* Botón Especial "Sobre mí" */}
            <button
                onClick={() => setIsAboutOpen(true)}
                className="px-4 py-2 rounded-full bg-violet-600/10 text-violet-400 border border-violet-600/20 hover:bg-violet-600 hover:text-white transition-all text-sm font-medium"
            >
            Sobre mí
            </button>
        </div>

          {/* --- BOTÓN HAMBURGUESA (Visible solo en móvil) --- */}
        <div className="md:hidden flex items-center">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-300 hover:text-white p-2 focus:outline-none"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            </div>
        </div>
    </div>

      {/* --- MENÚ DESPLEGABLE MÓVIL --- */}
    <AnimatePresence>
        {isOpen && (
            <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950 border-b border-slate-800 overflow-hidden"
            >
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            {navLinks.map((link) => (
                <button
                    key={link.name}
                    onClick={link.action}
                    className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                >
                {link.name}
                </button>
            ))}
              {/* Botón "Sobre mí" en móvil */}
            <button
                onClick={() => {
                setIsOpen(false);
                setIsAboutOpen(true);
                }}
                className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-violet-400 hover:bg-violet-900/20 transition-colors"
            >
                Sobre mí
            </button>
              {/* Redes en menú móvil (opcional pero útil) */}
            <div className="flex gap-4 px-3 pt-4 border-t border-slate-800 mt-2">
                <a href="https://github.com/LucasFloress" target="_blank" className="text-slate-400 hover:text-white"><Github size={20}/></a>
                <a href="https://linkedin.com" target="_blank" className="text-slate-400 hover:text-white"><Linkedin size={20}/></a>
            </div>
            </div>
        </motion.div>
        )}
    </AnimatePresence>
    </nav>
)
}

export default Navbar