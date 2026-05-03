/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Plus, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  Smartphone, 
  Instagram, 
  Facebook, 
  MessageSquare,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

// --- Components ---

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-obsidian/90 backdrop-blur-md border-b border-white/5 h-20 px-6 md:px-12 flex justify-between items-center">
      <div className="font-serif text-2xl font-bold text-stark-white tracking-tighter">DONEC</div>
       
      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-10">
        <a href="#servicios" className="label-caps border-b border-white transition-colors">Servicios</a>
        <a href="#proyectos" className="label-caps text-on-surface-variant hover:text-stark-white transition-colors">Proyectos</a>
        <a href="#proceso" className="label-caps text-on-surface-variant hover:text-stark-white transition-colors">Proceso</a>
        <a href="#nosotros" className="label-caps text-on-surface-variant hover:text-stark-white transition-colors">Nosotros</a>
        <a href="#contacto" className="label-caps text-on-surface-variant hover:text-stark-white transition-colors">Contacto</a>
      </div>

      <div className="flex items-center gap-6">
        <MessageSquare className="w-5 h-5 cursor-pointer text-stark-white opacity-40 hover:opacity-100 transition-opacity" />
        <button className="hidden lg:block px-6 py-2.5 border border-white/20 label-caps hover:bg-stark-white hover:text-obsidian transition-all duration-300">
          Cotiza tu reforma
        </button>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-obsidian border-b border-white/10 p-8 flex flex-col gap-6 md:hidden"
          >
            <a href="#servicios" className="label-caps text-stark-white" onClick={() => setIsOpen(false)}>Servicios</a>
            <a href="#proyectos" className="label-caps text-on-surface-variant" onClick={() => setIsOpen(false)}>Proyectos</a>
            <a href="#proceso" className="label-caps text-on-surface-variant" onClick={() => setIsOpen(false)}>Proceso</a>
            <a href="#nosotros" className="label-caps text-on-surface-variant" onClick={() => setIsOpen(false)}>Nosotros</a>
            <a href="#contacto" className="label-caps text-on-surface-variant" onClick={() => setIsOpen(false)}>Contacto</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-[90vh] md:h-screen w-full flex flex-col justify-center px-6 md:px-24 overflow-hidden bg-obsidian">
      <div className="absolute inset-0 -z-10">
        <img 
          className="w-full h-full object-cover grayscale brightness-50 opacity-40" 
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury living room"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
      </div>

      <div className="max-w-4xl space-y-12">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           className="label-caps text-stark-white/40"
        >
          Premium Architectural Reforms
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-5xl md:text-8xl text-stark-white leading-[0.95] tracking-tighter"
        >
          <span className="italic font-light">Espacios de</span> <br /> 
          <span className="font-bold uppercase not-italic">Alta Precisión</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-on-surface-variant max-w-2xl font-light leading-relaxed"
        >
          Reformas integrales en el sector oriente de Santiago. Presupuesto cerrado, plazos cumplidos y excelencia técnica en cada detalle.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-8 pt-4 items-center sm:items-start"
        >
          <button className="bg-stark-white text-obsidian px-12 py-5 label-caps hover:bg-white transition-all">
            Cotiza gratis en 24h
          </button>
          <button className="text-stark-white border-b border-white/20 pb-1 label-caps hover:border-white transition-colors flex items-center gap-3">
            Explorar proyectos <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full bg-obsidian-light/40 backdrop-blur-xl grid grid-cols-2 lg:grid-cols-4 py-8 px-12 border-t border-white/10 divide-x divide-white/5">
        {[
          { label: "Trayectoria", value: "+12 años" },
          { label: "Proyectos", value: "+200" },
          { label: "Presupuesto cerrado", value: "100%" },
          { label: "Garantía técnica", value: "1 año" }
        ].map((stat, i) => (
          <div key={i} className="text-center md:px-6">
            <div className="text-stark-white font-serif text-2xl md:text-3xl mb-1">{stat.value}</div>
            <div className="text-on-surface-variant label-caps text-[9px]">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const TrustBar = () => {
  return (
    <section className="bg-obsidian-light py-16 px-6 border-b border-white/5">
      <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-12">
        <span className="label-caps text-on-surface-variant whitespace-nowrap">Collaborative Partners</span>
        <div className="flex flex-wrap justify-center md:justify-end gap-12 lg:gap-20 opacity-20 grayscale invert">
          <span className="font-serif text-2xl italic tracking-widest text-[#F3F4F6]">ESTUDIO A</span>
          <span className="font-serif text-2xl italic tracking-widest text-[#F3F4F6]">CONSTRUCTORA DEL SUR</span>
          <span className="font-serif text-2xl italic tracking-widest text-[#F3F4F6]">VIVIENDA CHILE</span>
          <span className="font-serif text-2xl italic tracking-widest text-[#F3F4F6]">URBANO ARQ</span>
        </div>
      </div>
    </section>
  );
};

const ValueProp = () => {
  return (
    <section className="py-32 px-6">
      <div className="container-wide grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
        {[
          { 
            num: "01", 
            title: "Presupuesto Riguroso", 
            desc: "Sin sorpresas de último minuto. Nuestros presupuestos son vinculantes y detallados desde el primer día de obra." 
          },
          { 
            num: "02", 
            title: "Equipo Especialista", 
            desc: "Contamos con cuadrillas propias especialistas en cada oficio, garantizando un acabado superior en cada rincón." 
          },
          { 
            num: "03", 
            title: "Plazos de Entrega", 
            desc: "Sabemos que el tiempo es vital. Penalizamos nuestros propios atrasos para darte la tranquilidad que mereces." 
          }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className={`space-y-6 ${i !== 0 ? 'md:pl-12 md:border-l border-white/10' : ''}`}
          >
            <div className="font-serif text-5xl text-white/5">{item.num}</div>
            <h3 className="label-caps text-stark-white tracking-[0.3em]">{item.title}</h3>
            <p className="text-on-surface-variant font-light leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="servicios" className="py-32 bg-obsidian-deep px-6">
      <div className="container-wide">
        <h2 className="font-serif text-4xl md:text-6xl mb-20 leading-none">Especialidades <br /><span className="italic font-light opacity-60">Architectural</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 divide-x divide-white/5">
          <div className="group cursor-pointer pr-4">
            <div className="overflow-hidden aspect-[4/3] mb-10 border border-white/5">
              <img 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100" 
                src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=1200" 
                alt="Residential Renovation" 
              />
            </div>
            <h3 className="font-serif text-3xl mb-8 flex items-baseline gap-4">
              <span className="label-caps text-[10px] text-white/20">01</span>
              Reforma de Vivienda
            </h3>
            <div className="grid grid-cols-2 gap-y-4">
              {['Pintura técnica', 'Instalación de pisos', 'Ampliaciones', 'Baños & Cocinas'].map(item => (
                <div key={item} className="label-caps text-[9px] text-on-surface-variant flex items-center gap-2">
                   <div className="w-1 h-1 bg-white/20 rounded-full" /> {item}
                </div>
              ))}
            </div>
          </div>
          <div className="group cursor-pointer pl-12 border-l border-white/5">
             <div className="overflow-hidden aspect-[4/3] mb-10 border border-white/5">
              <img 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100" 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                alt="Commercial Spaces" 
              />
            </div>
            <h3 className="font-serif text-3xl mb-8 flex items-baseline gap-4">
              <span className="label-caps text-[10px] text-white/20">02</span>
              Espacios Comerciales
            </h3>
            <div className="grid grid-cols-2 gap-y-4">
              {['Habilitación oficinas', 'Retail fit-outs', 'Electricidad industrial', 'Climatización'].map(item => (
                <div key={item} className="label-caps text-[9px] text-on-surface-variant flex items-center gap-2">
                   <div className="w-1 h-1 bg-white/20 rounded-full" /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="proyectos" className="py-32 px-6 bg-obsidian">
      <div className="container-wide">
        <div className="flex justify-between items-end mb-16 border-b border-white/5 pb-8">
          <h2 className="font-serif text-4xl md:text-6xl flex flex-col">
             <span className="label-caps text-[10px] text-white/20 mb-4 tracking-[0.5em]">Realized visions</span>
             Antes y después
          </h2>
          <p className="label-caps text-[10px] text-white/40 italic">Series 01 / Residential</p>
        </div>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-12 lg:col-span-7">
            <motion.div 
              whileHover={{ scale: 0.995 }}
              className="relative group overflow-hidden bg-obsidian-light border border-white/5"
            >
              <img className="w-full aspect-[16/9] object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1556911223-e1f02027b409?auto=format&fit=crop&q=80&w=1200" alt="Kitchen Project" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-12 text-white">
                <div className="label-caps text-[9px] mb-4 text-white/50">Lo Barnechea</div>
                <div className="text-3xl font-serif mb-4 italic">Penthouse Santa Rosa</div>
                <div className="flex gap-8 label-caps text-[9px] opacity-40">
                  <span className="flex items-center gap-2"><div className="w-1 h-1 bg-white rounded-full" /> 180 m2</span>
                  <span className="flex items-center gap-2"><div className="w-1 h-1 bg-white rounded-full" /> 4 meses</span>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="col-span-12 md:col-span-12 lg:col-span-5">
            <motion.div 
               whileHover={{ scale: 0.995 }}
              className="relative group overflow-hidden bg-obsidian-light border border-white/5"
            >
              <img className="w-full aspect-[1] lg:aspect-[4/5] object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000" alt="Bedroom Project" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-12 text-white">
                <div className="label-caps text-[9px] mb-4 text-white/50">Las Condes</div>
                <div className="text-3xl font-serif mb-4 italic">Casa El Golf</div>
                <div className="flex gap-8 label-caps text-[9px] opacity-40">
                  <span className="flex items-center gap-2"><div className="w-1 h-1 bg-white rounded-full" /> 240 m2</span>
                  <span className="flex items-center gap-2"><div className="w-1 h-1 bg-white rounded-full" /> 6 meses</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  return (
    <section id="proceso" className="py-24 border-y border-white/10 px-6 bg-obsidian">
      <div className="container-wide grid grid-cols-2 md:grid-cols-5 gap-12 divide-x divide-white/5">
        {[
          { step: "01 / VISITA", desc: "Levantamiento en terreno y análisis de necesidades." },
          { step: "02 / PROPUESTA", desc: "Presupuesto detallado ítem por ítem con plazos fijos." },
          { step: "03 / DISEÑO", desc: "Definición de materiales y planos técnicos finales." },
          { step: "04 / EJECUCIÓN", desc: "Supervisión diaria con reporte semanal al cliente." },
          { step: "05 / ENTREGA", desc: "Acta de recepción conforme y garantía técnica." }
        ].map((item, i) => (
          <div key={i} className={`space-y-4 ${i !== 0 ? 'pl-8' : ''}`}>
            <div className="text-[9px] label-caps text-on-surface-variant/40">{item.step}</div>
            <p className="text-on-surface-variant text-xs leading-relaxed font-mono opacity-80 uppercase tracking-tighter">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const WhyUs = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] border-b border-white/5">
      <div className="h-[400px] lg:h-auto overflow-hidden bg-obsidian-deep relative">
        <img 
          className="w-full h-full object-cover grayscale contrast-125 opacity-30" 
          src="https://images.unsplash.com/photo-1503387762-592dea58ef4e?auto=format&fit=crop&q=80&w=1200" 
          alt="Architectural precision"
        />
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="w-24 h-24 border border-white/10 flex items-center justify-center label-caps text-[12px] rotate-45">Core</div>
        </div>
      </div>
      <div className="bg-obsidian text-stark-white p-12 md:p-24 flex flex-col justify-center border-l border-white/5">
        <h2 className="font-serif text-4xl md:text-6xl mb-16 leading-tight">Compromiso <br /><span className="italic font-light opacity-60">real por contrato.</span></h2>
        <ul className="grid grid-cols-1 gap-y-10">
          {[
            "Multa por atraso a favor del cliente garantizada por contrato.",
            "Personal propio con previsión al día y seguros de accidentes.",
            "Administrador de obra exclusivo para tu proyecto.",
            "Limpieza profunda al entregar la obra.",
            "Uso de materiales certificados de primera calidad.",
            "Asesoría en diseño e interiorismo incluida."
          ].map((text, i) => (
            <li key={i} className="flex items-start gap-6 border-b border-white/5 pb-6">
              <span className="font-mono text-[10px] text-white/20 mt-1">{String(i+1).padStart(2, '0')}</span>
              <span className="text-lg font-light text-on-surface-variant font-mono uppercase tracking-tighter hover:text-white transition-colors">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-32 px-6 bg-obsidian border-b border-white/5">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <h2 className="font-serif text-4xl md:text-7xl">Lo que dicen <br /><span className="italic font-light opacity-30 tracking-tight">de DONEC</span></h2>
          <div className="flex items-center gap-4 px-6 py-3 border border-white/10 group hover:border-white transition-colors cursor-pointer">
            <span className="text-[10px] label-caps tracking-[0.5em] text-on-surface-variant group-hover:text-white">Google 4.9/5</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 divide-x divide-white/5 border border-white/5">
          {[
            { 
              name: "Isabel Valdés", 
              loc: "Las Condes", 
              text: "Impresionada con el orden y la limpieza. Cumplieron el plazo exacto de 3 meses." 
            },
            { 
              name: "Andrés Larraín", 
              loc: "Lo Barnechea", 
              text: "La asesoría en materiales fue clave. El presupuesto inicial se mantuvo hasta el final." 
            },
            { 
              name: "Patricia Soto", 
              loc: "Providencia", 
              text: "Hicieron que un proceso estresante fuera algo tranquilo. El equipo es muy profesional." 
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              className="p-12 space-y-10 group"
            >
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-obsidian-light border border-white/5 group-hover:border-white transition-colors" />
                <div>
                  <div className="label-caps text-[9px] text-stark-white">{item.name}</div>
                  <div className="text-[9px] label-caps opacity-30 mt-1">{item.loc}</div>
                </div>
              </div>
              <p className="font-serif italic text-2xl leading-relaxed text-on-surface-variant group-hover:text-white transition-colors">"{item.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Calculator = () => {
  return (
    <section className="py-32 px-6 bg-tertiary-container/30">
      <div className="container-wide max-w-4xl mx-auto text-center space-y-16">
        <h2 className="font-serif text-4xl md:text-5xl">Calcula tu reforma <br /><span className="italic font-light opacity-40">en 30 segundos.</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { label: "¿Qué quieres reformar?", options: ["Vivienda Completa", "Cocina", "Baños", "Oficina"] },
            { label: "Superficie aprox.", options: ["Menos de 60 m2", "60 - 100 m2", "100 - 150 m2", "Más de 150 m2"] },
            { label: "Nivel de terminaciones", options: ["Estándar Premium", "Luxury High-End"] }
          ].map((field, i) => (
            <div key={i} className="flex flex-col text-left space-y-4">
              <label className="label-caps text-[9px] text-on-surface-variant font-bold">{field.label}</label>
              <div className="relative">
                <select className="appearance-none w-full bg-obsidian-light border border-white/10 py-5 px-6 focus:outline-none focus:border-white transition-colors cursor-pointer text-sm font-mono tracking-widest text-stark-white uppercase">
                  {field.options.map(opt => <option key={opt}>{opt}</option>)}
                </select>
                <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
        <button className="border border-white text-stark-white px-16 py-6 label-caps tracking-[0.5em] hover:bg-stark-white hover:text-obsidian transition-all">
          Ver presupuesto estimado
        </button>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [active, setActive] = useState<number | null>(null);

  const questions = [
    "¿Cómo garantizan el presupuesto cerrado?",
    "¿Qué comunas atienden en Santiago?",
    "¿Incluyen el diseño y planos municipales?",
    "¿Tienen seguro de responsabilidad civil?",
    "¿Puedo visitar una obra en ejecución?",
    "¿Cuánto demora una reforma integral?"
  ];

  return (
    <section className="py-32 px-6 bg-obsidian">
      <div className="container-wide max-w-3xl mx-auto">
        <h2 className="font-serif text-4xl text-center mb-24 uppercase tracking-tighter">Preguntas Frecuentes</h2>
        <div className="divide-y divide-white/5 border-t border-b border-white/5">
          {questions.map((q, i) => (
            <div key={i} className="py-10 group cursor-pointer" onClick={() => setActive(active === i ? null : i)}>
              <div className="flex justify-between items-center group-hover:translate-x-2 transition-transform duration-300">
                <span className="text-lg font-light text-on-surface-variant font-mono uppercase tracking-widest">{q}</span>
                <div className={`w-8 h-8 flex items-center justify-center border border-white/10 transition-all ${active === i ? 'bg-white text-obsidian rotate-180' : ''}`}>
                   {active === i ? <X className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                </div>
              </div>
              <AnimatePresence>
                {active === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pt-8 text-on-surface-variant text-sm leading-relaxed italic opacity-70 border-l border-white/20 pl-8 ml-4">
                      Nuestra metodología de trabajo asegura que cada etapa esté planificada al detalle, evitando cualquier desviación técnica o económica durante el proceso de obra.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="nosotros" className="py-32 bg-obsidian-deep px-6 border-b border-white/5">
      <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="relative group">
          <img 
            className="w-full aspect-[1] object-cover grayscale opacity-60 group-hover:opacity-100 transition-opacity duration-700" 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" 
            alt="Team at Donec" 
          />
          <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-white/10 group-hover:border-white transition-colors" />
        </div>
        <div className="space-y-12">
          <h2 className="font-serif text-4xl md:text-7xl leading-none">Visión de <br /><span className="italic font-light opacity-30">Vanguardia.</span></h2>
          <p className="text-xl text-on-surface-variant font-light leading-relaxed">
            Fundado por arquitectos, <span className="text-stark-white font-medium">DONEC</span> surge de la necesidad de profesionalizar las reformas residenciales. Creemos en la honestidad técnica, en el respeto por el diseño y, sobre todo, en el valor de la palabra empeñada.
          </p>
          <div className="flex flex-wrap gap-12 border-t border-white/10 pt-12">
            {[
              { val: "15", label: "Arquitectos & Ings" },
              { val: "24/7", label: "Soporte Obra" },
              { val: "Gold", label: "Categoría Mutual" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="text-4xl font-serif text-stark-white italic">{stat.val}</div>
                <div className="text-[9px] label-caps text-on-surface-variant tracking-[0.2em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  return (
    <section id="contacto" className="py-32 px-6 bg-obsidian-deep">
      <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-40">
        <div className="space-y-16">
          <h2 className="font-serif text-5xl md:text-7xl leading-none">Visita <br /><span className="italic font-light opacity-40">Técnica</span></h2>
          <div className="space-y-12">
            <div className="flex items-center gap-8 group">
              <div className="w-16 h-16 flex items-center justify-center border border-white/10 group-hover:border-white transition-colors"><Smartphone className="w-5 h-5 text-on-surface-variant group-hover:text-white transition-colors" /></div>
              <span className="text-xl font-mono tracking-widest">+56 9 1234 5678</span>
            </div>
            <div className="flex items-center gap-8 group">
              <div className="w-16 h-16 flex items-center justify-center border border-white/10 group-hover:border-white transition-colors"><Mail className="w-5 h-5 text-on-surface-variant group-hover:text-white transition-colors" /></div>
              <span className="text-xl font-mono tracking-widest">hola@donec.cl</span>
            </div>
            <div className="flex items-center gap-8 group">
              <div className="w-16 h-16 flex items-center justify-center border border-white/10 group-hover:border-white transition-colors"><MapPin className="w-5 h-5 text-on-surface-variant group-hover:text-white transition-colors" /></div>
              <span className="text-xl font-mono tracking-widest">Av. El Golf 400, Las Condes.</span>
            </div>
          </div>
        </div>
        <div>
          <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div className="flex flex-col space-y-4">
                <label className="label-caps text-[9px] text-on-surface-variant">Nombre</label>
                <input className="bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-white transition-colors font-mono uppercase text-xs tracking-widest" type="text" />
              </div>
              <div className="flex flex-col space-y-4">
                <label className="label-caps text-[9px] text-on-surface-variant">Teléfono</label>
                <input className="bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-white transition-colors font-mono uppercase text-xs tracking-widest" type="tel" />
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <label className="label-caps text-[9px] text-on-surface-variant">Comuna</label>
              <input className="bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-white transition-colors font-mono uppercase text-xs tracking-widest" type="text" />
            </div>
            <div className="flex flex-col space-y-4">
              <label className="label-caps text-[9px] text-on-surface-variant">Tipo de Reforma</label>
              <input className="bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-white transition-colors font-mono uppercase text-xs tracking-widest" placeholder="EJ: COCINA, DEPTO COMPLETO..." type="text" />
            </div>
            <div className="flex flex-col space-y-4">
              <label className="label-caps text-[9px] text-on-surface-variant">Mensaje</label>
              <textarea className="bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-white transition-colors resize-none font-mono uppercase text-xs tracking-widest" rows={4}></textarea>
            </div>
            <button className="w-full border border-white text-stark-white py-8 label-caps tracking-[0.5em] hover:bg-stark-white hover:text-obsidian transition-all">
              Solicitar Visita Técnica
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-obsidian-deep text-stark-white pt-32 pb-16 px-6 border-t border-white/5">
      <div className="container-wide grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
        <div className="space-y-10">
          <div className="w-12 h-12 border-2 border-white flex items-center justify-center font-bold text-2xl">D</div>
          <p className="text-on-surface-variant font-serif italic text-lg pr-12 leading-relaxed tracking-tight">Arquitectura y Reformas de Alta Precisión.</p>
          <div className="flex gap-8 opacity-40 divide-x divide-white/10">
            <Instagram className="w-5 h-5 cursor-pointer hover:text-white transition-all pl-0" />
            <Facebook className="w-5 h-5 cursor-pointer hover:text-white transition-all pl-3" />
          </div>
        </div>
        {[
          { 
            title: "Servicios", 
            links: ["Residencial", "Comercial", "Interiorismo"] 
          },
          { 
            title: "Compañía", 
            links: ["Nosotros", "Proceso", "Contacto"] 
          },
          { 
            title: "Legal", 
            links: ["Aviso Legal", "Privacidad"] 
          }
        ].map((col, i) => (
          <div key={i} className="space-y-10">
            <h4 className="label-caps tracking-[0.5em] text-[9px] text-white/20">{col.title}</h4>
            <ul className="space-y-6">
              {col.links.map(link => (
                <li key={link}>
                  <a href="#" className="font-mono text-sm uppercase tracking-widest text-on-surface-variant hover:text-white transition-all duration-300 flex items-center gap-2 group">
                    <div className="w-0 h-[1px] bg-white group-hover:w-4 transition-all duration-300" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container-wide mt-32 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12">
        <span className="text-white/10 label-caps tracking-[0.4em] text-[8px] font-mono">ESTABLISHED 2024 / SANTIAGO, CHCL</span>
        <div className="flex gap-12">
          <span className="text-white/10 label-caps tracking-[0.4em] text-[8px] font-mono">© 2024 DONEC ARQ GROUP</span>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TrustBar />
      <ValueProp />
      <Services />
      <Projects />
      <Process />
      <WhyUs />
      <Testimonials />
      <Calculator />
      <FAQ />
      <About />
      <ContactForm />
      <Footer />
    </div>
  );
}
