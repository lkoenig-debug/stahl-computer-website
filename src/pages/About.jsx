import { motion } from 'framer-motion';

const VALUES = [
  { label: 'Präzision', value: 'Jedes Detail zählt. Wir liefern technische Exzellenz, keine Kompromisse.' },
  { label: 'Zuverlässigkeit', value: 'Unsere Kunden können sich jederzeit auf uns verlassen — pünktlich, konsistent und mit höchster Servicequalität.' },
  { label: 'Transparenz', value: 'Klare Kommunikation, ehrliche Einschätzungen, messbare Ergebnisse.' },
];

export default function About() {
  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-mono text-xs text-primary tracking-widest uppercase mb-4">
              // Das Kollektiv
            </p>
            <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl tracking-tighter text-foreground leading-none">
              ÜBER UNS
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Large Typography Section */}
      <section className="px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-semibold text-2xl md:text-4xl lg:text-5xl text-foreground tracking-tight leading-tight max-w-4xl"
          >
            Wir sind ein Kollektiv aus <span className="text-primary">3 IT Fachkräften </span>, 
            die glauben, dass digitale Infrastruktur mehr sein kann als nur{' '}
            <span className="text-primary">funktional</span>.
          </motion.p>
        </div>
      </section>

      {/* Image */}
      <section className="px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden"
          >
            <img
              src="https://media.base44.com/images/public/69e098da45036498ae153306/c012c9d3f_WIN_20260417_09_39_56_Pro.jpg"
              alt="Team Mitglied von Stahl Computer Systemhaus"
              className="w-full object-contain opacity-100 max-h-none"
            />
            
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-12">
            // Unsere Werte
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-t border-border/30 pt-6"
              >
                <h3 className="font-heading font-semibold text-xl text-foreground tracking-tight mb-2">
                  {v.label}
                </h3>
                <p className="font-mono text-xs text-muted-foreground leading-relaxed">
                  {v.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-12">
            // Unser Standort
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-border/30 overflow-hidden"
          >
            <iframe
              title="Stahl Computer Systemhaus Standort"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.3!2d8.4034!3d49.0069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47970097d0c3de1b%3A0x6e0dba48e2f8c6e8!2sKriegsstra%C3%9Fe%20132%2C%2076133%20Karlsruhe!5e0!3m2!1sde!2sde!4v1713340000000!5m2!1sde!2sde"
              width="100%"
              height="400"
              style={{ border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: 'Adresse', value: 'Kriegsstraße 132, 76133 Karlsruhe' },
              { label: 'Telefon', value: '+49 721 - 234 65' },
              { label: 'E-Mail', value: 'info@stahlcomputer.de' },
            ].map((item) => (
              <div key={item.label} className="border-t border-border/30 pt-4">
                <p className="font-mono text-xs text-primary tracking-widest uppercase mb-1">{item.label}</p>
                <p className="font-heading font-semibold text-sm text-foreground">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geschichte als Fließtext */}
      <section className="px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-12">
            // Unsere Geschichte
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl space-y-5"
          >
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              Stahl Computer Systemhaus wurde von Boris Stahl in Karlsruhe gegründet und blickt auf über 20 Jahre Erfahrung als IT-Systemhaus zurück. Was als kleines Einzelunternehmen begann, hat sich zu einem verlässlichen IT-Dienstleister und Managed Service Provider für den Mittelstand in der Region Karlsruhe entwickelt.
            </p>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              Über die Jahre haben wir unsere IT-Infrastruktur-Kompetenz kontinuierlich ausgebaut — von klassischer Netzwerktechnik und Server-Wartung bis hin zu modernen Cloud-Lösungen, IT-Sicherheit und Datensicherung. Als externer IT-Administrator übernehmen wir die vollständige IT-Betreuung Ihres Unternehmens — verlässlich, persönlich und mit klarer IT-Strategie.
            </p>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              Heute betreuen wir über 100 Kunden in Karlsruhe und Umgebung. Als eingespieltes Team aus 3 IT-Fachkräften bieten wir schnellen IT-Support, maßgeschneiderte Managed Services und nachhaltige IT-Beratung — alles aus einer Hand.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}