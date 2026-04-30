

This project contains everything 

**Edit the code in your local development environment**

Stahl Computer Systemhaus — Website
Die offizielle Unternehmenswebsite von Stahl Computer Systemhaus, einem IT-Dienstleister aus Karlsruhe. Die Website präsentiert das Leistungsportfolio, Unternehmensinformationen und bietet ein Kontaktformular — alles in einem modernen, dunklen Design mit animierten Partikeleffekten.

Was ist das?
Eine vollständig selbst-hostbare Unternehmenswebsite, bestehend aus:

Frontend – React-Anwendung (Vite) mit Tailwind CSS, Framer Motion und IBM Plex Mono als Hausschrift
Backend – Node.js / Express-Server, der das Kontaktformular verarbeitet und E-Mails per SMTP versendet
Seiten
Seite	Beschreibung
/	Startseite mit Hero, Statistiken und Philosophie-Bereich
/services	Leistungsübersicht mit 6 Servicekategorien
/about	Unternehmensvorstellung, Team, Standortkarte & Timeline
/contact	Kontaktformular im Terminal-Stil
/impressum	Rechtliche Pflichtangaben
/datenschutz	Datenschutzerklärung (DSGVO)
Voraussetzungen
Git
Docker & Docker Compose
Installation & Start
# 1. Repository klonen
git clone (https://github.com/lkoenig-debug/kinetic-logic.git)
cd stahl-computer-website

# 2. Umgebungsvariablen für das Backend anlegen
cp server/.env.example server/.env
nano server/.env   # Werte anpassen (SMTP, E-Mail, etc.)

# 3. Container bauen und starten
docker-compose up -d --build

Die Website ist danach erreichbar unter:



Frontend: http://localhost:80

Backend API: http://localhost:3001

Umgebungsvariablen (server/.env)

Variable	Beschreibung	Beispiel

SMTP_HOST	SMTP-Server Ihres Mailanbieters	mail.provider.de

SMTP_PORT	SMTP-Port (meist 587 oder 465)	587

SMTP_USER	SMTP-Benutzername / Absender-E-Mail	info@stahlcomputer.de

SMTP_PASS	SMTP-Passwort	geheimesPasswort

CONTACT_EMAIL	Empfängeradresse für Kontaktanfragen	info@stahlcomputer.de


FRONTEND_URL	URL des Frontends (für CORS)	https://stahlcomputer.de

PORT	Port des Backend-Servers	3001

Anpassungen

Texte & Inhalte: Direkt in den jeweiligen Dateien unter src/pages/ bearbeiten

Farben & Design: Designsystem in src/index.css (CSS-Variablen) und tailwind.config.js

Kontaktdaten: In src/pages/Contact.jsx, src/pages/About.jsx und src/pages/Impressum.jsx

Projektstruktur

stahl-computer-website/

├── src/

│   ├── pages/          # Seitenkomponenten

│   ├── components/     # Wiederverwendbare UI-Komponenten

│   └── index.css       # Globale Styles & Design-Tokens

├── server/

│   ├── server.js       # Node.js Backend (Kontaktformular)

│   ├── .env.example    # Vorlage für Umgebungsvariablen

│   └── Dockerfile

├── docker-compose.yml

└── README.md

