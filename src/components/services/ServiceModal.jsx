import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function ServiceModal({ service, onClose }) {
  if (!service) return null;

  const Icon = service.icon;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.97 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative z-10 w-full max-w-xl border border-border/40 bg-card/90 backdrop-blur-xl p-8 md:p-10"
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Schließen"
          >
            <X size={18} />
          </button>

          {/* Icon */}
          <div className="w-12 h-12 flex items-center justify-center border border-primary/30 mb-6">
            <Icon size={22} className="text-primary" />
          </div>

          {/* Category tag */}
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-2">
            // {service.category}
          </p>

          {/* Title */}
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground tracking-tight mb-4">
            {service.title}
          </h2>

          {/* Short description */}
          <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-6">
            {service.description}
          </p>

          {/* Detailed bullets */}
          <div className="space-y-3">
            <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3">
              // Leistungsumfang
            </p>
            {service.details.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-primary font-mono text-xs mt-0.5">→</span>
                <p className="font-mono text-xs text-muted-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}