import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const scrollToContent = () => {
  window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
};

const STATS = [
  { value: '100+', label: 'Kunden' },
  { value: '99%', label: 'Uptime' },
  { value: '20+', label: 'Jahre Erfahrung' },
  { value: '  3', label: 'IT-Fachkräfte' },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full pt-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-mono text-xs text-primary tracking-widest uppercase mb-6">
              // IT-Systemhaus & Managed Service Provider · Karlsruhe
            </p>
            <p className="font-heading font-bold text-2xl md:text-3xl tracking-tight text-foreground mb-4">
              STAHL<span className="text-primary">.</span>COMPUTER SYSTEMHAUS
            </p>
            <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tighter leading-none text-foreground">
              WE ARCHITECT
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 flex justify-end"
          >
            <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tighter leading-none text-foreground">
              THE <span className="text-primary">INVISIBLE</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 max-w-lg"
          >
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              Stahl Computer Systemhaus ist Ihr IT-Systemhaus & Managed Service Provider in Karlsruhe. 
              IT-Support, IT-Sicherheit, Cloud-Lösungen und IT-Infrastruktur — 
              alles aus einer Hand.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 font-heading font-semibold text-sm tracking-wide hover:bg-primary/90 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Entdecken
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-3.5 font-heading font-semibold text-sm tracking-wide hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              Kontakt aufnehmen
            </Link>
            <Link
              to="/fernwartung"
              className="inline-flex items-center gap-2 border border-primary/40 text-primary px-8 py-3.5 font-heading font-semibold text-sm tracking-wide hover:bg-primary/10 transition-all duration-300"
            >
              Fernwartung
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={scrollToContent}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer hover:text-primary transition-colors duration-300 focus:outline-none"
          aria-label="Nach unten scrollen"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={20} className="text-muted-foreground" />
          </motion.div>
        </motion.button>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="border-t border-border/30 pt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <p className="font-heading font-bold text-4xl md:text-5xl text-foreground tracking-tighter">
                  {stat.value}
                </p>
                <p className="font-mono text-xs text-muted-foreground mt-2 uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image/Feature Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-sm"
          >
            <img
              src="https://media.base44.com/images/public/69e098da45036498ae153306/02ba76791_generated_2005ce80.png"
              alt="Fiber optic cables with neon glow representing digital infrastructure"
              className="w-full h-64 md:h-96 object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="font-mono text-xs text-primary tracking-widest uppercase mb-2">
                // Unsere Philosophie
              </p>
              <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground tracking-tight">
                Zuverlässigkeit, Beständigkeit und Sicherheit 
              </h2>
              <p className="font-mono text-sm text-muted-foreground mt-3 max-w-md leading-relaxed">
                Jeder Service, jede Architekturentscheidung — 
                wir Kümmern uns um Jede Aufgabe mit vollem Einsatz.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}