# Deployment-Anleitung — Stahl Computer Systemhaus

## Voraussetzungen
- Git
- Docker & Docker Compose

---

## 1. Repository klonen

```bash
git clone https://github.com/dein-repo/stahl-computer.git
cd stahl-computer
```

---

## 2. Umgebungsvariablen erstellen

Wechsle in den `server/`-Ordner und erstelle die `.env` Datei:

```bash
cd server
nano .env
```

Folgenden Inhalt einfügen und **Werte anpassen**:

```env
SMTP_HOST=mail.deinprovider.de
SMTP_PORT=587
SMTP_USER=info@stahlcomputer.de
SMTP_PASS=DeinPasswort
CONTACT_EMAIL=info@stahlcomputer.de
FRONTEND_URL=https://deine-domain.de
PORT=3001
```

Speichern: `Ctrl+O` → `Enter` → `Ctrl+X`

---

## 3. Docker starten

Zurück ins Root-Verzeichnis und Container starten:

```bash
cd ..
docker-compose up -d --build
```

---

## Projektstruktur

```
stahl-computer/
├── server/
│   ├── .env          ← Diese Datei manuell erstellen ✅
│   ├── server.js
│   ├── package.json
│   ├── Dockerfile
│   └── DEPLOYMENT.md
└── docker-compose.yml
```

---

## Hinweise

- Die `.env` Datei wird **nie** in Git eingecheckt (steht in `.gitignore`) — sie muss bei jedem neuen Server manuell angelegt werden.
- Nach Änderungen an der `.env` müssen die Container neu gestartet werden: `docker-compose restart