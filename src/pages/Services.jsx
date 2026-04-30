import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Shield, Database, Wrench, Headphones, MonitorSmartphone } from 'lucide-react';
import ServiceCard from '../components/services/ServiceCard';
import ServiceModal from '../components/services/ServiceModal';
import ServiceFAQ from '../components/services/ServiceFAQ';

const SERVICES = [
  {
    icon: Phone,
    category: 'Kommunikation',
    title: 'Telefon Komplettlösungen',
    description: 'Moderne Telefon- und Kommunikationssysteme für Ihr Unternehmen — von klassischen Anlagen bis zu vollständig cloudbasierten VoIP-Lösungen.',
    details: [
      'Planung, Installation und Einrichtung von Starface-Telefonanlagen (Cloud, On-Premise & Hybrid)',
      'Starface UCC-Client: Einrichtung für Desktop, Browser und Smartphone',
      'Migration bestehender analoger oder ISDN-Anlagen zu Starface oder vergleichbaren Systemen',
      'Anbieterwechsel & Providerwechsel: Wir überwachen und begleiten den gesamten Wechselprozess',
      'Portierung bestehender Rufnummern — ohne Unterbrechung des Geschäftsbetriebs',
      'SIP-Trunk-Anbindung und Konfiguration neuer Telefonprovider',
      'Einrichtung von Softphones, Headsets und mobilen Nebenstellen',
      'Anbindung an Microsoft Teams Phone und weitere Kommunikationsplattformen',
      'Konferenzlösungen und automatische Anrufverteilung (ACD)',
      'Laufende Betreuung, Wartung und Erweiterung der Telefonanlage',
      'u.v.m.',
    ],
  },
  {
    icon: Shield,
    category: 'Sicherheit',
    title: 'IT-Sicherheit & Cybersecurity',
    description: 'Zuverlässiger Schutz Ihrer IT-Infrastruktur vor digitalen Bedrohungen — durch moderne Sicherheitslösungen und proaktives Monitoring.',
    details: [
      'Einrichtung und Verwaltung von Firewalls, VPNs und Antivirenlösungen',
      'Regelmäßige Sicherheitsanalysen und Schwachstellenprüfungen',
      'Schutz vor Ransomware, Phishing und unbefugten Zugriffen',
      'Zwei-Faktor-Authentifizierung und sicheres Identitätsmanagement',
      'Sicherheits-Schulungen und Sensibilisierung für Ihre Mitarbeiter',
      'Schnelle Reaktion und Unterstützung im Sicherheitsvorfall',
      'u.v.m.',
    ],
  },
  {
    icon: Database,
    category: 'Datensicherheit',
    title: 'Datensicherheit & Backup-Lösungen',
    description: 'Strukturiertes Datenmanagement und automatisierte Backup-Strategien, damit Ihre Unternehmensdaten jederzeit sicher und wiederherstellbar sind.',
    details: [
      'Konzeption und Einrichtung automatischer Backup-Lösungen (lokal & Cloud)',
      'Regelmäßige Überprüfung und Testwiederherstellung gesicherter Daten',
      'Netzwerkgebundene Speicherlösungen für zentrale Datenhaltung',
      'DSGVO-konforme Datensicherung und Archivierung',
      'Disaster Recovery: schnelle Wiederherstellung im Ernstfall',
      'Monitoring des Speicherplatzes und frühzeitige Warnmeldungen',
      'u.v.m.',
    ],
  },
  {
    icon: Wrench,
    category: 'Hardware',
    title: 'Hardware & Verkabelung',
    description: 'Professionelle Installation von Hardware und strukturierter Verkabelung — sauber, dokumentiert und für die Zukunft ausgelegt.',
    details: [
      'Aufbau und Inbetriebnahme von PCs, Servern, Switches und Routern',
      'Strukturierte Netzwerkverkabelungs Beratung',
      'WLAN-Planung, Ausleuchtung und Installation in Gewerbe Einheiten auch WLAN Brücken',
      'Rack-Aufbau und Kabelmanagement',
      'Drucker, Scanner und Peripheriegeräte einrichten und einbinden',
      'Dokumentation aller installierten Komponenten und Netzwerkpläne',
      'u.v.m.',
    ],
  },
  {
    icon: Headphones,
    category: 'Support',
    title: 'IT-Support & Managed Services',
    description: 'Schnelle und kompetente Hilfe bei IT-Problemen — vor Ort, remote oder telefonisch. Wir sind da, wenn Sie uns brauchen.',
    details: [
      'Vor-Ort-Support bei Ihnen im Büro oder Betrieb (on-premise)',
      'Remote-Support per Fernwartung für schnelle Problemlösung ohne Anfahrt',
      'Telefonischer Support für Individuelle Lösungen',
      'First- und Second-Level-Support für Ihre Mitarbeiter',
      'Reaktionszeiten nach vereinbartem Service Level Agreement (SLA)',
      'Proaktive Wartung und regelmäßige System-Checks zur Fehlerprävention',
      'u.v.m.',
    ],
  },
  {
    icon: MonitorSmartphone,
    category: 'Software',
    title: 'Software Installation & Betreuung',
    description: 'Wir installieren, konfigurieren und betreuen die Software in Ihrem Unternehmen — von Betriebssystemen bis zu Fachanwendungen.',
    details: [
      'Installation und Konfiguration von Betriebssystemen (Windows, macOS, Linux)',
      'Einrichtung von Microsoft 365, Google Workspace und weiteren Cloud-Diensten',
      'Deployment und Pflege von Unternehmenssoftware und Fachanwendungen',
      'Lizenzmanagement und Update-Verwaltung',
      'Einrichtung und Absicherung von Remote-Desktop-Umgebungen (RDS, Citrix)',
      'Laufende Softwarebetreuung und Anwenderunterstützung',
      'Windows 365 Integration: Einrichtung und Verwaltung cloudbasierter Windows-Desktops',
      'Datenmigration: sicherer Umzug von Daten, Postfächern und Anwendungen auf neue Systeme',
      'u.v.m.',
    ],
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

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
              // Das Ökosystem
            </p>
            <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl tracking-tighter text-foreground leading-none">
              LEISTUNGEN
            </h1>
            <p className="font-mono text-sm text-muted-foreground mt-6 max-w-xl leading-relaxed">
              Sechs Disziplinen. Ein Ziel. Wir verbinden modernste Technologien 
              zu nahtlosen Lösungen, die Ihr Unternehmen voranbringen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/20">
            {SERVICES.map((service, i) => (
              <ServiceCard
                key={service.title}
                {...service}
                index={i}
                onClick={() => setSelectedService(service)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ServiceFAQ />



      {/* Service Detail Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
}