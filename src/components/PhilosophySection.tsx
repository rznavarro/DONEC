import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

export default function PhilosophySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="propiedades" className="bg-black py-28 md:py-40 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.h2
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tight mb-16 md:mb-24"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Inversión{' '}
          <em className="italic text-white/40">×</em>{' '}
          Visión
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left: video */}
          <motion.div
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-3xl overflow-hidden aspect-[4/3]"
          >
            <video
              className="w-full h-full object-cover"
              muted
              autoPlay
              loop
              playsInline
              preload="auto"
            >
              <source
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
                type="video/mp4"
              />
            </video>
          </motion.div>

          {/* Right: text blocks */}
          <motion.div
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col justify-center gap-12"
          >
            <div>
              <p className="text-white/40 text-xs tracking-widest uppercase mb-4">
                Elige tu propiedad
              </p>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                Cada inversión inmobiliaria comienza en la intersección entre
                estrategia financiera sólida y visión de vida extraordinaria.
                Operamos en ese cruce, transformando decisiones inteligentes
                en patrimonio que crece y espacios que inspiran.
              </p>
            </div>

            <div className="w-full h-px bg-white/10" />

            <div>
              <p className="text-white/40 text-xs tracking-widest uppercase mb-4">
                Define tu patrimonio
              </p>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                Creemos que el mejor resultado emerge cuando la curiosidad del
                cliente se une a la convicción del experto. Nuestro proceso
                está diseñado para descubrir oportunidades ocultas y
                traducirlas en propiedades que superen cada expectativa.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
