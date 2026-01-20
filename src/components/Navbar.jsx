import { useState, useEffect } from 'react'
import { FileText } from 'lucide-react'

function Navbar ({ setIsAboutOpen }) {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
    const handleScroll = () => {
        console.log('scroll')
        const scrollPosition = window.scrollY
        setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
    <nav
    className={`fixed top-1 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 w-full mx-auto px-4 sm:px-6 lg:px-8 ${
        isScrolled
            ? 'py-2 rounded-full w-7/12'
            : 'py-4 rounded-2xl'
        } bg-transparent fixed top-0 left-0 w-full z-50 backdrop-blur-sm . shadow-lg`}
    >
        <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <FileText className="text-violet-400" size={24} />
                <span className="text-white font-semibold text-lg">Portafolio</span>
            </div>

            {/* Navigation Items */}
            <ul className="flex items-center gap-6 md:gap-8">
            <li>
                <button
                onClick={() => scrollToSection('hero')}
                className="text-gray-300 hover:text-violet-400 transition-colors duration-200 font-medium"
                >
                Inicio
                </button>
            </li>
            <li>
            <button 
                onClick={() => setIsAboutOpen(true)}
                className="text-gray-300 hover:text-violet-400 transition-colors duration-200 font-medium" // Tus clases
            >
                Sobre mí
            </button>
            </li>
            <li>
                <button
                onClick={() => scrollToSection('skills')}
                className="text-gray-300 hover:text-violet-400 transition-colors duration-200 font-medium"
                >
                    Habilidades
                </button>
            </li>
            <li>
                <button
                onClick={() => scrollToSection('why-me')}
                className="text-gray-300 hover:text-violet-400 transition-colors duration-200 font-medium"
                >
                    Por qué elegirme
                </button>
            </li>
            <li>
                <button
                onClick={() => scrollToSection('projects')}
                className="text-gray-300 hover:text-violet-400 transition-colors duration-200 font-medium"
                >
                    Proyectos
                </button>
            </li>
            </ul>
        </div>
    </nav>
    )
}

export default Navbar

