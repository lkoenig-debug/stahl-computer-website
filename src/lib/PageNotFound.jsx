import { useLocation } from 'react-router-dom';

export default function PageNotFound() {
  const location = useLocation();
  const pageName = location.pathname.substring(1);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-background">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-7xl font-heading font-bold text-muted-foreground">404</h1>
        <div className="h-px w-16 bg-border mx-auto" />
        <h2 className="text-2xl font-heading font-semibold text-foreground">Seite nicht gefunden</h2>
        <p className="font-mono text-sm text-muted-foreground">
          Die Seite <span className="text-primary">"{pageName}"</span> existiert nicht.
        </p>
        <button
          onClick={() => window.location.href = '/'}
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 font-heading font-semibold text-sm tracking-wide hover:bg-primary/90 transition-all"
        >
          Zur Startseite
        </button>
      </div>
    </div>
  );
}