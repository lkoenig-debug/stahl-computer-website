# Stahl Computer Systemhaus - IONOS Webhosting Version

## Überblick

Diese Version wurde speziell für IONOS Webhosting optimiert und funktioniert ohne Docker oder Node.js Backend.

## Änderungen für IONOS

### Entfernt:
- Base44 SDK Dependencies
- Docker Konfigurationen
- Node.js Backend
- Vite Base44 Plugin

### Hinzugefügt:
- PHP Kontaktformular (`/public/contact.php`)
- IONOS Deploy Now Konfiguration
- GitHub Actions Workflow
- Statische Build-Konfiguration

## Funktionsweise

### React Frontend
- Statische Site mit React Router
- Alle Seiten werden als statische HTML/CSS/JS Dateien gebuildet
- Responsive Design bleibt erhalten

### PHP Backend
- Kontaktformular funktioniert mit PHP `mail()` Funktion
- CORS Headers für Cross-Origin Requests
- Formularvalidierung auf Server-Seite

## Deployment auf IONOS

### 1. GitHub Repository
```bash
git init
git add .
git commit -m "Initial IONOS setup"
git remote add origin <your-repo>
git push -u origin main
```

### 2. IONOS Deploy Now
1. GitHub Repository mit IONOS verbinden
2. Branch `main` auswählen
3. Automatische Framework-Erkennung (React)
4. Build-Kommando: `npm run build`
5. Output-Verzeichnis: `dist`

### 3. PHP Konfiguration
- Stelle sicher, dass PHP auf dem IONOS Webspace aktiviert ist
- `contact.php` wird automatisch erkannt
- E-Mail-Funktion muss konfiguriert sein

## Funktionsverluste

### Was nicht mehr funktioniert:
- **React Router Navigation**: Nur noch statische Seiten
- **Single Page Application**: Full Page Reloads
- **State Management**: Formular-Daten bei Reload verloren
- **Docker Container**: Keine Container-Infrastruktur

### Was weiterhin funktioniert:
- **Statische Inhalte**: Alle Texte und Bilder
- **Responsive Design**: Mobile Ansicht bleibt
- **Kontaktformular**: Mit PHP Alternative
- **SEO**: Alle Seiten sind indexierbar

## Dateistruktur

```
stahl-computer-systemhaus-copy-main/
|-- public/
|   |-- contact.php          # PHP Kontaktformular
|-- src/
|   |-- pages/               # React Komponenten
|-- .github/workflows/
|   |-- deploy.yml           # GitHub Actions
|-- ionos-deploy.json        # IONOS Konfiguration
|-- package.json             # Ohne Base44
|-- vite.config.js           # Ohne Base44 Plugin
```

## Kosten

- **IONOS Deploy Now:** ~$4-8/Monat
- **Keine zusätzlichen Kosten** für Backend
- **Keine Wartung** erforderlich

## Support

Bei Problemen mit dem Deployment:
1. GitHub Actions Log prüfen
2. IONOS Deploy Now Status überprüfen
3. PHP Fehler-Logs im IONOS Dashboard

## Alternative

Wenn Sie alle React Features behalten möchten:
- Hetzner Cloud Server CPX11 (5.95/Monat)
- Volle Funktionalität erhalten
- Docker Unterstützung
