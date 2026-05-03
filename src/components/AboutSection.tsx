import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="nosotros"
      ref={ref}
      className="bg-black pt-32 md:pt-44 pb-10 md:pb-14 px-6 overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at top, rgba(255,255,255,0.03) 0%, transparent 70%), black',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.p
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-white/40 text-sm tracking-widest uppercase mb-8"
        >
          Quiénes Somos
        </motion.p>

        <motion.h2
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Conectamos personas{' '}
          <em className="italic text-white/60">con espacios que</em>
          <br className="hidden md:block" />
          <em className="italic text-white/60">
            definen, enriquecen e inspiran.
          </em>
        </motion.h2>
      </div>
    </section>
  );
}
