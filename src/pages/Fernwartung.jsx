import { motion } from 'framer-motion';
import { Monitor, Smartphone, Apple, Download, Shield, Zap, Lock } from 'lucide-react';

const DOWNLOADS = [
{
  id: 'windows',
  icon: Monitor,
  title: 'Windows',
  subtitle: 'TeamViewer für Windows',
  description: 'Kompatibel mit Windows 10 / 11 (32 & 64 Bit)',
  version: 'TeamViewer 15',
  badge: 'Most Popular',
  url: 'http://get.teamviewer.com/aa4gecr',
  color: 'from-blue-500/10 to-blue-600/5',
  borderColor: 'border-blue-500/20',
  accentColor: 'text-blue-400'
},
{
  id: 'windows-server',
  icon: Monitor,
  title: 'Windows Server',
  subtitle: 'TeamViewer für Windows Server',
  description: 'Kompatibel mit Windows Server 2016 / 2019 / 2022',
  version: 'TeamViewer QuickSupport',
  badge: 'Server Edition',
  url: 'http://get.teamviewer.com/vv8us46',
  color: 'from-green-500/10 to-green-600/5',
  borderColor: 'border-green-500/20',
  accentColor: 'text-green-400'
},
{
  id: 'macos',
  icon: Apple,
  title: 'macOS',
  subtitle: 'TeamViewer für Mac',
  description: 'Kompatibel mit macOS 10.15 und neuer',
  version: 'TeamViewer 15',
  badge: 'Apple Silicon & Intel',
  url: 'http://stahlcomputer.de/downloads/Systemhaus%20STAHL%20(Apple-Fernwartung).zip',
  color: 'from-zinc-500/10 to-zinc-600/5',
  borderColor: 'border-zinc-500/20',
  accentColor: 'text-zinc-300'
}];


const FEATURES = [
{ icon: Shield, label: 'Ende-zu-Ende verschlüsselt' },
{ icon: Zap, label: 'Blitzschnelle Verbindung' },
{ icon: Lock, label: 'Sicher & DSGVO-konform' }];


export default function Fernwartung() {
  return (
    <div className="min-h-screen px-6 lg:px-8 pt-32 pb-24">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-6">
            // Remote Support · Fernwartung
          </p>
          <h1 className="font-heading font-bold text-5xl md:text-6xl tracking-tighter text-foreground">
            FERNWARTUNG
          </h1>
          <p className="font-mono text-sm text-muted-foreground mt-6 max-w-xl leading-relaxed">
            Unser Support-Team kann Ihren Computer sicher und schnell per Fernzugriff unterstützen.
            Laden Sie TeamViewer herunter und teilen Sie uns Ihre ID sowie das Kennwort mit.
          </p>
        </motion.div>

        {/* Feature pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-wrap gap-3">
          
          {FEATURES.map(({ icon: Icon, label }) =>
          <div
            key={label}
            className="flex items-center gap-2 border border-border/40 bg-card/50 px-4 py-2 rounded-sm">
            
              <Icon size={13} className="text-primary" />
              <span className="font-mono text-xs text-muted-foreground">{label}</span>
            </div>
          )}
        </motion.div>

        {/* Divider */}
        <div className="border-t border-border/30 mt-14 mb-14" />

        {/* TeamViewer Logo area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-4 mb-12">
          
          <div className="bg-[#0E8EE9]/10 border border-[#0E8EE9]/20 px-5 py-2.5 rounded-sm">
            <span className="font-heading font-bold text-xl tracking-tight text-[#0E8EE9]">TeamViewer</span>
          </div>
          <span className="font-mono text-xs text-muted-foreground">Unsere verwendete Fernwartungssoftware</span>
        </motion.div>

        {/* Download Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DOWNLOADS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`relative group border ${item.borderColor} bg-gradient-to-br ${item.color} backdrop-blur-sm p-6 rounded-sm hover:border-primary/40 transition-all duration-300`}>
                
                {/* Badge */}
                <div className="mb-5 flex items-start justify-between">
                  <div className={`w-12 h-12 rounded-sm bg-background/60 border border-border/30 flex items-center justify-center`}>
                    <Icon size={22} className={item.accentColor} />
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground border border-border/30 px-2 py-0.5 rounded-sm bg-background/40">
                    {item.badge}
                  </span>
                </div>

                {/* Info */}
                <h3 className="font-heading font-bold text-xl tracking-tight text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="font-mono text-xs text-muted-foreground mb-1">{item.subtitle}</p>
                <p className="font-mono text-xs text-muted-foreground/60 mb-6 leading-relaxed">{item.description}</p>

                {/* Version tag */}
                <p className={`font-mono text-[10px] ${item.accentColor} mb-4 tracking-widest uppercase`}>
                  {item.version}
                </p>

                {/* Download Button */}
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 font-heading font-semibold text-sm tracking-wide hover:bg-primary/90 transition-all duration-300 rounded-sm group-hover:gap-3">
                  
                  <Download size={14} />
                  Download
                </a>
              </motion.div>);

          })}
        </div>

        {/* Info box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 border border-border/30 bg-card/30 p-6 rounded-sm">
          
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3">// So funktioniert es</p>
          <ol className="space-y-2">
            {[
            'Laden Sie TeamViewer für Ihr Betriebssystem herunter.',
            'Starten Sie die Anwendung — keine Installation erforderlich.',
            'Teilen Sie uns Ihre angezeigte ID und das Kennwort telefonisch oder per E-Mail mit.',
            'Unser Techniker verbindet sich sicher mit Ihrem Gerät.'].
            map((step, i) =>
            <li key={i} className="flex items-start gap-3">
                <span className="font-mono text-xs text-primary mt-0.5 shrink-0">{String(i + 1).padStart(2, '0')}.</span>
                <span className="font-mono text-xs text-muted-foreground leading-relaxed">{step}</span>
              </li>
            )}
          </ol>
        </motion.div>

      </div>
    </div>);

}