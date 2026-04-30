// ============================================================
// NODE.JS BACKEND — läuft NICHT im Browser 
// Deployment: docker-compose up -d --build
// Benötigt: server/.env (siehe server/.env.example)
// ============================================================

import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

// eslint-disable-next-line no-undef
const env = process.env;

const app = express();
app.use(express.json());
app.use(cors({ origin: env.FRONTEND_URL || '*' }));

const transporter = nodemailer.createTransport({
  host: env.SMTP_HOST,
  port: Number(env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: env.SMTP_USER,
    pass: env.SMTP_PASS,
  },
});

app.post('/contact', async (req, res) => {
  const { name, email, company, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Pflichtfelder fehlen.' });
  }

  try {
    await transporter.sendMail({
      from: `"Stahl Computer Website" <${env.SMTP_USER}>`,
      to: env.CONTACT_EMAIL || 'info@stahlcomputer.de',
      subject: `Neue Anfrage von ${name}`,
      text: `Name: ${name}\nE-Mail: ${email}\nUnternehmen: ${company || '—'}\n\nNachricht:\n${message}`,
    });
    res.json({ success: true });
  } catch (err) {
    console.error('E-Mail Fehler:', err);
    res.status(500).json({ error: 'E-Mail konnte nicht gesendet werden.' });
  }
});

const PORT = env.PORT || 3001;
app.listen(PORT, () => console.log(`Backend läuft auf Port ${PORT}`));
