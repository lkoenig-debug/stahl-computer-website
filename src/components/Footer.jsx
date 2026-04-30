import { Link, useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-border/30 bg-background/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading font-bold text-lg text-foreground mb-3">
              STAHL<span className="text-primary">.</span>COMPUTER SYSTEMHAUS
            </h3>
            <p className="font-mono text-xs text-muted-foreground leading-relaxed max-w-xs">
              Ihr zuverlässiger IT-Dienstleister für Unternehmen — Stahl Computer Systemhaus. Präzision. Technologie.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-sm text-foreground mb-3 uppercase tracking-wider">Navigation</h4>
            <div className="flex flex-col gap-2">
              {[
              { label: 'Startseite', path: '/' },
              { label: 'Leistungen', path: '/services' },
              { label: 'Über Uns', path: '/about' },
              { label: 'Kontakt', path: '/contact' }].
              map((link) =>
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors text-left">
                  {link.label}
                </button>
              )}
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-sm text-foreground mb-3 uppercase tracking-wider">Kontakt</h4>
            <div className="flex flex-col gap-2 font-mono text-xs text-muted-foreground">
              <span>info@stahlcomputer.de</span>
              <span>+49 721 - 234 65</span>
              <span>Karlsruhe, Deutschland Kriegsstraße 132</span>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} STAHL COMPUTER SYSTEMHAUS — Alle Rechte vorbehalten.
          </span>
          <div className="flex gap-4">
            <Link to="/impressum" className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>);

}