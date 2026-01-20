import { data } from './data'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Code2, BrainCircuit, Rocket, Users, Zap, Layout, Server, Wrench, MapPin, Phone, X, Briefcase } from 'lucide-react'
import Navbar from './components/Navbar'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { BackgroundGradient } from './components/ui/BackGradient'
import { LayoutTextFlip } from './components/ui/layout-text-flip'
import { BackgroundBeams } from './components/ui/background-beams'
import { BackgroundBeamsWithCollision } from './components/ui/background-beams-with-collision'


// Estilos
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './App.css'

// ==========================================
// 1. LÓGICA Y HELPERS (JS PURO)
// ==========================================

// Función auxiliar para obtener iconos de skills
const getSkillIcon = (skillName) => {
  const icons = {
    'Frontend': Layout,
    'Backend': Server,
    'Tools': Wrench,
    'Soft skills': Users
  }
  return icons[skillName] || null
}

// Mapa de iconos para la sección "Por qué elegirme"
const whyMeIcons = {
  'Code2': Code2,
  'BrainCircuit': BrainCircuit,
  'Rocket': Rocket,
  'Users': Users,
  'Zap': Zap
}

// Configuración de la grilla "Por qué elegirme" (Bento Grid)
const gridPositions = [
  { col: 'md:col-start-1', row: 'md:row-start-1' },
  { col: 'md:col-start-3', row: 'md:row-start-1' },
  { col: 'md:col-start-2', row: 'md:row-start-1', span: 'md:row-span-2' }, // Central
  { col: 'md:col-start-1', row: 'md:row-start-2' },
  { col: 'md:col-start-3', row: 'md:row-start-2' }
]

// ==========================================
// 2. SUB-COMPONENTES (UI EXTRAÍDA)
// ==========================================

// Componente del Modal "Sobre Mí"
const AboutModal = ({ isOpen, onClose, educationData }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0" onClick={onClose}></div>
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full relative shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] overflow-y-auto"
      >
        <button onClick={onClose} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors z-10">
          <X size={24} />
        </button>
        
        {/* Columna Izquierda: Foto */}
        <div className="w-full md:w-1/3 bg-slate-950 flex items-center justify-center p-8 md:p-0 relative overflow-hidden group min-h-[200px] md:min-h-full">
          <div className="absolute inset-0 bg-violet-600/20 blur-3xl group-hover:bg-violet-600/30 transition-all duration-500"></div>
          <img src="./img/yo.jpeg" alt="Lucas Flores" className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-violet-500 shadow-lg relative z-10" />
        </div>

        {/* Columna Derecha: Info */}
        <div className="w-full md:w-2/3 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-white mb-1">Lucas Flores</h2>
          <p className="text-violet-400 font-medium mb-4">Full Stack Developer</p>
          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            ¡Hola! Soy un apasionado por la tecnología y el desarrollo de software. Me especializo en crear soluciones web modernas y escalables. Siempre estoy aprendiendo algo nuevo, desde C# .NET hasta las últimas novedades de React.
          </p>

          {/* Mini Sección Educación en el Modal */}
          <div className="mb-6">
            <p className="text-violet-400 font-medium mb-3 border-b border-slate-700 pb-1">Educación y Certificados</p>
            <div className="flex flex-row flex-wrap gap-4">
              {educationData.map((edu, index) => (
                <a 
                key={index} 
                href={edu.url}             
                target="_blank"            
                rel="noopener noreferrer"  
                className="flex gap-3 items-start group" 
              >
                {edu.img && (
                  <img 
                    src={edu.img} 
                    alt={edu.degree} 
                    title={`${edu.degree} en ${edu.institution}`} 
                    // Agregamos una pequeña transición al pasar el mouse sobre el enlace (group-hover)
                    className="w-10 h-10 object-contain rounded transition-transform group-hover:scale-110"
                  />
                )}
              </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm text-slate-400 mt-auto">
            <div className="flex items-center gap-2"><MapPin size={16} className="text-violet-500" /><span>Hurlingham, BA</span></div>
            <div className="flex items-center gap-2"><Briefcase size={16} className="text-violet-500" /><span>Disponible</span></div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

// Componente Tarjeta de Habilidad
const SkillCard = ({ skill, index }) => {
  const IconComponent = getSkillIcon(skill.name)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="h-full"
    >
      <BackgroundGradient className="bg-slate-900 rounded-[22px] p-6 h-full flex flex-col justify-between">
        
        {/* Icono */}
        <div className='flex justify-center mb-4'>
          {IconComponent && (
            <motion.div
              whileHover={{ scale: 1.2, rotate: 5, color: "#a78bfa" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <IconComponent className="text-violet-500 w-12 h-12" />
            </motion.div>
          )}
        </div>

        {/* Tags / Herramientas */}
        <div className='flex flex-wrap gap-2 justify-center'>
          {skill.tools.map((tech, techIndex) => (
            <span key={techIndex} className="px-3 py-1 bg-violet-500/10 text-violet-300 rounded-full text-sm border border-violet-500/20 hover:bg-violet-500/20 transition-colors">
              {tech}
            </span>
          ))}
        </div>

      </BackgroundGradient>
    </motion.div>
  )
}

// ==========================================
// 3. COMPONENTE PRINCIPAL (HTML LIMPIO)
// ==========================================

function App() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const [formStatus, setFormStatus] = useState(null); // / null | 'sending' | 'success' | 'error'

  // --------------- Logica contacto ----------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value
    };

    try {
      // TU URL DE FORMSPREE AQUÍ
      const response = await fetch('https://formspree.io/f/xgoonewl', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json' 
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('success');
        e.target.reset(); 
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error(error);
      setFormStatus('error');
    }
    
    setTimeout(() => setFormStatus(null), 3000);
  };
  // --------------------------------------------------------

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-100">
      <Navbar setIsAboutOpen={setIsAboutOpen}/>
      
      {/* --- HERO SECTION --- */}
      <BackgroundBeamsWithCollision className="w-full min-h-screen flex flex-col bg-slate-950 border-b-violet-500 border-b-2">
        <section id="hero" className="py-20 pt-32 w-full relative z-10">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 relative z-10">
              <span className="bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600 bg-clip-text text-transparent">
                {data.hero.name}
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 relative z-10 mt-6">
              <LayoutTextFlip>{data.hero.title}</LayoutTextFlip>
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto relative z-10">
              {data.hero.description}
            </p>
            
            {/* Redes Sociales */}
            <div className="flex justify-center gap-6 relative z-10">
              <a href={data.hero.social.LinkedIn} target="_blank" rel="noopener noreferrer" className="btn-social">
                <Linkedin size={20} /> LinkedIn
              </a>
              <a href={data.hero.social.GitHub} target="_blank" rel="noopener noreferrer" className="btn-social">
                <Github size={20} /> GitHub
              </a>
              <a href={`mailto:${data.hero.social.Email}`} className="btn-social">
                <Mail size={20} /> Email
              </a>
              <a href={data.hero.social.CV} target="_blank" rel="noopener noreferrer" className="btn-social">
                <Briefcase size={20} /> CV
              </a>
            </div>
          </div>
        </section>
      </BackgroundBeamsWithCollision>
      
      <main className="flex-grow w-full">

        {/* --- SKILLS SECTION --- */}
        <section id="skills" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="text-violet-500">Habilidades</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
              {data.skills.map((skill, index) => (
                <SkillCard key={index} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* --- WHY ME SECTION --- */}
        <section id="why-me" className="w-full relative border-t-2 border-t-violet-500 border-b-2 border-b-violet-500">
          <BackgroundBeams className="py-24 bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="text-violet-500">{data.whyWorkWithMe.title}</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 w-full">
                {data.whyWorkWithMe.reasons.map((reason, index) => {
                  const IconComponent = whyMeIcons[reason.icon] || Code2
                  const pos = gridPositions[index]
                  const isCenter = index === 2

                  return (
                    <BackgroundGradient
                      key={index}
                      containerClassName={`${pos.col} ${pos.row} ${pos.span || ''}`}
                      className="bg-slate-800 rounded-3xl p-6 flex flex-col transition-colors duration-200 h-full"
                    >
                      <div className={`flex flex-col ${isCenter ? 'justify-center' : ''} h-full`}>
                        <div className="flex justify-center mb-4">
                          <IconComponent className="text-violet-400" size={40} />
                        </div>
                        <h3 className="text-xl font-semibold text-violet-400 mb-3 text-center">{reason.title}</h3>
                        <p className="text-gray-300 text-center">{reason.desc}</p>
                      </div>
                    </BackgroundGradient>
                  )
                })}
              </div>
            </div>
          </BackgroundBeams>
        </section>

        {/* --- PROJECTS SECTION --- */}
        <section id="projects" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="text-violet-500">Proyectos</span>
            </h2>
            <div className="w-full">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={2}
                breakpoints={{ 768: { slidesPerView: 2 } }} // Responsivo: 2 slides en desktop
                navigation={true}
                pagination={{ clickable: true }}
              >
                {data.projects.map((project, index) => (
                  <SwiperSlide key={index}>
                    <SwiperSlide key={index}>
                    <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-violet-500 transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/20 h-full flex flex-col">
                      {project.img && <img src={project.img} alt={project.tittle} className="w-full h-48 object-cover" />}
                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="text-2xl font-bold text-violet-400 mb-3">{project.tittle}</h3>
                        <p className="text-gray-300 mb-4 flex-grow">{project.des || project.desc}</p>
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech, i) => (
                            <span key={i} className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">{tech}</span>
                          ))}
                        </div>
                        <div className="flex gap-3 mt-auto"> {/* mt-auto asegura que se peguen al fondo */}
                          {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300">Ver Proyecto →</a>}
                          {project.repo && <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300">Repositorio →</a>}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>


      {/* --- CONTACTO --- */}
      <section id="contact" className="py-24 relative z-10 bg-slate-950 overflow-hidden border-b-2 border-violet-500 border-t-2">
        
        <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#4c1d95_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-violet-500">Contacto</span>
          </h2>
          
          <div className='bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl p-8 shadow-2xl max-w-2xl mx-auto'>
            <form onSubmit={handleSubmit} className='space-y-6'>
              
              <div className='flex flex-col gap-2'>
                <label htmlFor='name' className="text-sm font-medium text-slate-300">Nombre</label>
                <input type="text" id="name" name="name" required placeholder='Tu nombre' className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"/>
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor='email' className="text-sm font-medium text-slate-300">Email</label>
                <input type="email" id="email" name="email" required placeholder='tu@email.com' className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"/>
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor='message' className="text-sm font-medium text-slate-300">Mensaje</label>
                <textarea id="message" name="message" required rows="4" placeholder='¿En qué puedo ayudarte?' className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all resize-none"/>
              </div> 

              {/* Botón con estado de carga */}
              <button 
                type="submit" 
                disabled={formStatus === 'sending'}
                className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold py-3 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg shadow-violet-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
              </button>

              {/* Mensajes de Feedback */}
              {formStatus === 'success' && (
                <p className="text-green-400 text-center text-sm font-semibold animate-pulse">¡Mensaje enviado con éxito!</p>
              )}
              {formStatus === 'error' && (
                <p className="text-red-400 text-center text-sm font-semibold">Hubo un error. Intenta nuevamente.</p>
              )}

            </form>
          </div>
        </div>
      </section>

      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-950 text-white py-5 w-full mt-auto">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-white mb-2">Ubicación</h3>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="text-violet-400" size={16} /> Hurlingham, Bs. As.
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-white mb-2">Contacto</h3>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="text-violet-400" size={16} /> 11 2677-3387
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-white mb-2">Sígueme</h3>
              <div className="flex gap-4">
                <a href={data.hero.social.GitHub} target="_blank" className="text-slate-300 hover:text-violet-400"><Github size={20} /></a>
                <a href={data.hero.social.LinkedIn} target="_blank" className="text-slate-300 hover:text-violet-400"><Linkedin size={20} /></a>
                <a href={`mailto:${data.hero.social.Email}`} className="text-slate-300 hover:text-violet-400"><Mail size={20} /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 mb-0">
            <p className="text-slate-400 text-sm">© 2026 Lucas Flores. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* --- MODAL (Renderizado al final) --- */}
      <AboutModal 
        isOpen={isAboutOpen} 
        onClose={() => setIsAboutOpen(false)} 
        educationData={data.education} 
      />

    </div>
  )
}

export default App