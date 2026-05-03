import { useRef, useEffect } from 'react';
import { Globe, ArrowRight, Instagram, Facebook } from 'lucide-react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.style.opacity = '0';

    const fadeIn = (duration: number) => {
      const start = performance.now();
      const from = parseFloat(video.style.opacity) || 0;
      const raf = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        video.style.opacity = String(from + (1 - from) * t);
        if (t < 1) requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    };

    const fadeOut = (duration: number, cb?: () => void) => {
      const start = performance.now();
      const from = parseFloat(video.style.opacity) || 1;
      const raf = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        video.style.opacity = String(from * (1 - t));
        if (t < 1) requestAnimationFrame(raf);
        else cb?.();
      };
      requestAnimationFrame(raf);
    };

    const onCanPlay = () => { video.play().then(() => fadeIn(500)); };
    const onTimeUpdate = () => {
      if (video.duration - video.currentTime <= 0.55) fadeOut(500);
    };
    const onEnded = () => {
      video.style.opacity = '0';
      setTimeout(() => {
        video.currentTime = 0;
        video.play().then(() => fadeIn(500));
      }, 100);
    };

    video.addEventListener('canplay', onCanPlay);
    video.addEventListener('timeupdate', onTimeUpdate);
    video.addEventListener('ended', onEnded);
    return () => {
      video.removeEventListener('canplay', onCanPlay);
      video.removeEventListener('timeupdate', onTimeUpdate);
      video.removeEventListener('ended', onEnded);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col bg-black">
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover object-bottom"
        muted
        autoPlay
        playsInline
        preload="auto"
        style={{ opacity: 0 }}
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-black/40" />

      {/* Navbar */}
      <nav className="relative z-20 px-6 py-6">
        <div className="liquid-glass rounded-full max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <Globe className="w-6 h-6 text-white" />
            <span
              className="ml-2 text-white font-semibold text-lg tracking-tight"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              DONEC
            </span>
            <div className="hidden md:flex items-center gap-8 ml-8">
              {['Propiedades', 'Servicios', 'Nosotros'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-white/80 hover:text-white text-sm font-medium transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:block text-white text-sm font-medium cursor-pointer hover:text-white/70 transition-colors">
              Ver propiedades
            </span>
            <button className="liquid-glass rounded-full px-6 py-2 text-white text-sm font-medium hover:bg-white/5 transition-colors">
              Contacto
            </button>
          </div>
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[10%]">
        <h1
          className="text-6xl md:text-8xl lg:text-9xl text-white tracking-tight mb-8 leading-[0.95]"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Tu espacio,
          <br />
          tu <em>historia</em>.
        </h1>

        <div className="max-w-xl w-full mb-6">
          <div className="liquid-glass rounded-full pl-6 pr-2 py-2 flex items-center gap-3">
            <input
              type="email"
              placeholder="Ingresa tu correo"
              className="flex-1 bg-transparent text-white placeholder:text-white/40 outline-none text-sm"
            />
            <button className="bg-white rounded-full p-3 text-black flex-shrink-0 hover:bg-white/90 transition-colors">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <p className="text-white/70 text-sm leading-relaxed px-4 max-w-md mb-8">
          Encuentra la propiedad que siempre imaginaste. Te acompañamos en cada
          paso del proceso, desde la búsqueda hasta las llaves en tu mano.
        </p>

        <button className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors">
          Explorar propiedades
        </button>
      </div>

      {/* Social icons */}
      <div className="relative z-10 flex justify-center gap-4 pb-12">
        {([Instagram, Facebook, Globe] as const).map((Icon, i) => (
          <button
            key={i}
            className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all"
          >
            <Icon className="w-5 h-5" />
          </button>
        ))}
      </div>
    </section>
  );
}
