import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ_ITEMS = [
  {
    question: 'Wie schnell reagieren Sie auf IT-Probleme?',
    answer: 'Wir reagieren in der Regel innerhalb weniger Stunden — je nach vereinbartem Service Level Agreement (SLA). Für kritische Ausfälle bieten wir priorisierten Support mit kurzen Reaktionszeiten per Telefon, Remote-Zugriff oder Vor-Ort-Einsatz.',
  },
  {
    question: 'Was ist der Unterschied zwischen IT-Support und Managed Services?',
    answer: 'IT-Support bedeutet: Sie melden ein Problem, wir lösen es. Managed Services gehen weiter — wir übernehmen die proaktive Betreuung, Überwachung und Wartung Ihrer gesamten IT-Infrastruktur, bevor Probleme entstehen. So vermeiden wir Ausfälle statt sie nur zu beheben.',
  },
  {
    question: 'Betreuen Sie auch kleinere Unternehmen oder nur Mittelstand?',
    answer: 'Wir betreuen Unternehmen jeder Größe — vom Einzelbüro bis zum mittelständischen Betrieb. Unsere Lösungen passen wir individuell an Ihre Anforderungen und Ihr Budget an.',
  },
  {
    question: 'Können Sie unsere bestehende IT übernehmen, ohne alles neu aufzubauen?',
    answer: 'Ja. Wir analysieren zunächst Ihre bestehende Infrastruktur und integrieren uns nahtlos in Ihre vorhandenen Systeme. Ein Neuaufbau ist nur dort nötig, wo er wirklich Sinn ergibt.',
  },
  {
    question: 'Wie läuft die Fernwartung ab — ist das sicher?',
    answer: 'Wir nutzen TeamViewer mit Ende-zu-Ende-Verschlüsselung und DSGVO-konformer Datenverarbeitung. Eine Verbindung ist nur möglich, wenn Sie uns aktiv Zugriff gewähren — Sie haben jederzeit die volle Kontrolle.',
  },
  {
    question: 'Bieten Sie auch Unterstützung bei Microsoft 365 und Cloud-Diensten an?',
    answer: 'Ja. Wir richten Microsoft 365, Exchange Online, SharePoint und weitere Cloud-Dienste ein, migrieren bestehende Daten und betreuen die laufende Verwaltung — inklusive Benutzerverwaltung und Sicherheitskonfiguration.',
  },
];

export default function ServiceFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="px-6 lg:px-8 py-24">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-xs text-primary tracking-widest uppercase mb-4">
          // Häufige Fragen
        </p>
        <h2 className="font-heading font-bold text-4xl md:text-5xl tracking-tighter text-foreground mb-12">
          FAQ
        </h2>

        <div className="max-w-3xl space-y-px">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className="border border-border/30 bg-card/20">
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-card/40 transition-colors duration-200"
              >
                <span className="font-heading font-semibold text-sm md:text-base text-foreground tracking-tight">
                  {item.question}
                </span>
                <span className="shrink-0 text-primary">
                  {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="font-mono text-xs text-muted-foreground leading-relaxed px-6 pb-5">
                      {item.answer}
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
}