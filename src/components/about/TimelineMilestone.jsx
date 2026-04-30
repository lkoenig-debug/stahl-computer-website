import { motion } from 'framer-motion';

export default function TimelineMilestone({ year, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative pl-8 md:pl-12 pb-12 last:pb-0 group"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border/30 group-hover:bg-primary/50 transition-colors duration-700" />
      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 w-px h-px">
        <div className="w-2 h-2 rounded-full bg-border group-hover:bg-primary -translate-x-[3.5px] transition-colors duration-500" />
      </div>
      <span className="font-mono text-xs text-primary tracking-widest">{year}</span>
      <h3 className="font-heading font-semibold text-lg text-foreground mt-1 tracking-tight">
        {title}
      </h3>
      <p className="font-mono text-xs text-muted-foreground mt-2 leading-relaxed max-w-md">
        {description}
      </p>
    </motion.div>
  );
}