import { motion } from 'framer-motion';

export default function Datenschutz() {
  return (
    <div className="pt-24 pb-16">
      <section className="px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-mono text-xs text-primary tracking-widest uppercase mb-4">
              // Rechtliches
            </p>
            <h1 className="font-heading font-bold text-5xl md:text-7xl tracking-tighter text-foreground leading-none mb-12">
              DATENSCHUTZ
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-mono text-sm text-muted-foreground leading-relaxed space-y-8"
          >

            {/* 1 */}
            <div>
              <h2 className="font-heading font-semibold text-lg text-foreground mb-3">1. Datenschutz auf einen Blick</h2>

              <h3 className="font-heading font-semibold text-base text-foreground mb-2 mt-4">Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
                passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
                persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie
                unserer unter diesem Text aufgeführten Datenschutzerklärung.
              </p>

              <h3 className="font-heading font-semibold text-base text-foreground mb-2 mt-4">Datenerfassung auf dieser Website</h3>
              <p className="font-semibold text-foreground">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</p>
              <p className="mt-2">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
                können Sie dem Abschnitt „Verantwortliche Stelle" in dieser Datenschutzerklärung entnehmen.
              </p>

              <p className="font-semibold text-foreground mt-4">Wie erfassen wir Ihre Daten?</p>
              <p className="mt-2">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen — z.&nbsp;B. durch Eingabe
                in unser Kontaktformular. Andere Daten werden automatisch beim Besuch der Website durch unsere
                IT-Systeme erfasst (technische Daten wie Browser, Betriebssystem, Uhrzeit des Seitenaufrufs).
              </p>

              <p className="font-semibold text-foreground mt-4">Wofür nutzen wir Ihre Daten?</p>
              <p className="mt-2">
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten.
                Kontaktanfragen werden ausschließlich zur Bearbeitung Ihrer Anfrage genutzt.
              </p>

              <p className="font-semibold text-foreground mt-4">Welche Rechte haben Sie bezüglich Ihrer Daten?</p>
              <p className="mt-2">
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Herkunft, Empfänger und Zweck Ihrer
                gespeicherten personenbezogenen Daten sowie das Recht auf Berichtigung, Löschung oder Einschränkung
                der Verarbeitung. Außerdem steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              </p>
            </div>

            {/* 2 */}
            <div>
              <h2 className="font-heading font-semibold text-lg text-foreground mb-3">2. Verantwortliche Stelle</h2>
              <p>
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              </p>
              <p className="mt-3">
                Stahl Computer Systemhaus<br />
                Inh. Boris Stahl<br />
                Kriegsstraße 132<br />
                76133 Karlsruhe<br />
                Deutschland
              </p>
              <p className="mt-3">
                Telefon: +49 721 - 234 65<br />
                E-Mail: <a href="mailto:info@stahlcomputer.de" className="text-primary hover:underline">info@stahlcomputer.de</a>
              </p>
              <p className="mt-3">
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit
                anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
              </p>
            </div>

            {/* 3 */}
            <div>
              <h2 className="font-heading font-semibold text-lg text-foreground mb-3">3. Speicherdauer</h2>
              <p>
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben
                Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein
                berechtigtes Löschersuchen geltend machen oder eine Einwilligung widerrufen, werden Ihre Daten
                gelöscht, sofern keine anderen rechtlich zulässigen Gründe entgegenstehen (z.&nbsp;B. steuer- oder
                handelsrechtliche Aufbewahrungsfristen).
              </p>
            </div>

            {/* 4 */}
            <div>
              <h2 className="font-heading font-semibold text-lg text-foreground mb-3">4. Rechtsgrundlagen der Datenverarbeitung</h2>
              <p>
                Sofern Sie in die Datenverarbeitung eingewilligt haben, erfolgt die Verarbeitung auf Grundlage von
                Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;a DSGVO. Bei Vertragserfüllung oder vorvertraglichen Maßnahmen
                gilt Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b DSGVO. Zur Erfüllung rechtlicher Verpflichtungen dient
                Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;c DSGVO. Die Verarbeitung zur Wahrung berechtigter Interessen
                erfolgt auf Grundlage von Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO.
              </p>
            </div>

            {/* 5 */}
            <div>
              <h2 className="font-heading font-semibold text-lg text-foreground mb-3">5. Ihre Rechte</h2>

              <h3 className="font-heading font-semibold text-base text-foreground mb-2 mt-4">Auskunft, Löschung und Berichtigung</h3>
              <p>
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche
                Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger sowie den
                Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Wenden
                Sie sich hierfür jederzeit an uns.
              </p>

              <h3 className="font-heading font-semibold text-base text-foreground mb-2 mt-4">Recht auf Einschränkung der Verarbeitung</h3>
              <p>
                Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen,
                wenn die Richtigkeit der Daten bestritten wird, die Verarbeitung unrechtmäßig ist, wir die Daten
                nicht mehr benötigen oder Sie Widerspruch nach Art.&nbsp;21 DSGVO eingelegt haben.
              </p>

              <h3 className="font-heading font-semibold text-base text-foreground mb-2 mt-4">Recht auf Datenübertragbarkeit</h3>
              <p>
                Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder zur Vertragserfüllung
                automatisiert verarbeiten, in einem gängigen, maschinenlesbaren Format zu erhalten oder die
                Übertragung an einen anderen Verantwortlichen zu verlangen.
              </p>

              <h3 className="font-heading font-semibold text-base text-foreground mb-2 mt-4">Widerruf der Einwilligung</h3>
              <p>
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können
                eine bereits erteilte Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen. Bis zum Widerruf
                bleibt die Verarbeitung rechtmäßig.
              </p>

              <h3 className="font-heading font-semibold text-base text-foreground mb-2 mt-4">Widerspruchsrecht (Art. 21 DSGVO)</h3>
              <p className="border-l-2 border-primary pl-4">
                WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART.&nbsp;6 ABS.&nbsp;1 LIT.&nbsp;E ODER F DSGVO
                ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION
                ERGEBEN, WIDERSPRUCH GEGEN DIE VERARBEITUNG EINZULEGEN. WIR VERARBEITEN IHRE DATEN DANN NICHT MEHR,
                ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE NACHWEISEN, DIE IHRE INTERESSEN ÜBERWIEGEN,
                ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN.
              </p>

              <h3 className="font-heading font-semibold text-base text-foreground mb-2 mt-4">Beschwerderecht bei der Aufsichtsbehörde</h3>
              <p>
                Im Falle von Verstößen gegen die DSGVO haben Sie ein Beschwerderecht bei einer Datenschutz-
                Aufsichtsbehörde. Zuständige Behörde für Karlsruhe / Baden-Württemberg ist:
              </p>
              <p className="mt-3">
                Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg<br />
                Königstraße 10a, 70173 Stuttgart<br />
                Telefon: +49 711 615541-0<br />
                E-Mail: <a href="mailto:poststelle@lfdi.bwl.de" className="text-primary hover:underline">poststelle@lfdi.bwl.de</a><br />
                <a href="https://www.baden-wuerttemberg.datenschutz.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.baden-wuerttemberg.datenschutz.de</a>
              </p>
            </div>

            {/* 6 */}
            <div>
              <h2 className="font-heading font-semibold text-lg text-foreground mb-3">6. Datenerfassung auf dieser Website</h2>

              <h3 className="font-heading font-semibold text-base text-foreground mb-2 mt-4">Server-Logfiles</h3>
              <p>
                Der Hoster dieser Website erhebt und speichert automatisch Informationen in sogenannten
                Server-Logfiles, die Ihr Browser automatisch übermittelt. Dies sind: Browsertyp und -version,
                verwendetes Betriebssystem, Referrer-URL, Hostname des zugreifenden Rechners, Uhrzeit der
                Serveranfrage und IP-Adresse. Eine Zusammenführung dieser Daten mit anderen Datenquellen
                erfolgt nicht. Rechtsgrundlage ist Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO.
              </p>

              <h3 className="font-heading font-semibold text-base text-foreground mb-2 mt-4">Kontaktformular</h3>
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben (Name, E-Mail-Adresse,
                Unternehmen, Nachricht) zwecks Bearbeitung der Anfrage und für eventuelle Rückfragen bei uns
                gespeichert. Diese Daten geben wir ohne Ihre Einwilligung nicht weiter. Rechtsgrundlage ist
                Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b DSGVO (Vertragsanbahnung) bzw. Art.&nbsp;6 Abs.&nbsp;1
                lit.&nbsp;f DSGVO (berechtigtes Interesse an der Bearbeitung von Anfragen).
              </p>
              <p className="mt-3">
                Die Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung widerrufen
                oder der Zweck der Speicherung entfällt. Gesetzliche Aufbewahrungsfristen bleiben unberührt.
              </p>

              <h3 className="font-heading font-semibold text-base text-foreground mb-2 mt-4">Anfrage per E-Mail oder Telefon</h3>
              <p>
                Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus
                hervorgehenden personenbezogenen Daten zum Zwecke der Bearbeitung bei uns gespeichert. Diese Daten
                geben wir ohne Ihre Einwilligung nicht weiter. Rechtsgrundlage ist Art.&nbsp;6 Abs.&nbsp;1
                lit.&nbsp;b bzw. lit.&nbsp;f DSGVO.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="font-heading font-semibold text-lg text-foreground mb-3">7. Hosting</h2>
              <p>
                Diese Website wird auf eigenen Servern bzw. bei einem externen Hosting-Dienstleister betrieben.
                Personenbezogene Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters
                gespeichert. Das Hosting erfolgt zum Zweck der Vertragserfüllung gegenüber unseren Besuchern
                (Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b DSGVO) und im Interesse einer sicheren und effizienten
                Bereitstellung unseres Online-Angebots (Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO).
              </p>
            </div>

            {/* 8 */}
            <div>
              <h2 className="font-heading font-semibold text-lg text-foreground mb-3">8. SSL-/TLS-Verschlüsselung</h2>
              <p>
                Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte
                Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://"
                wechselt und an dem Schloss-Symbol in der Browserzeile. Wenn die Verschlüsselung aktiv ist, können
                die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
              </p>
            </div>

            {/* 9 */}
            <div>
              <h2 className="font-heading font-semibold text-lg text-foreground mb-3">9. Schriftarten (Google Fonts)</h2>
              <p>
                Diese Website verwendet Schriftarten von Google Fonts. Die Einbindung erfolgt durch einen lokalen
                Import, sodass beim Aufruf der Website keine Verbindung zu Servern von Google hergestellt wird und
                keine personenbezogenen Daten übertragen werden.
              </p>
              <p className="mt-3">
                Weitere Informationen zu Google Fonts:{' '}
                <a href="https://developers.google.com/fonts/faq" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  developers.google.com/fonts/faq
                </a>
              </p>
            </div>

            {/* 10 */}
            <div>
              <h2 className="font-heading font-semibold text-lg text-foreground mb-3">10. Online-Streitbeilegung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="mt-3">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <div className="border-t border-border/30 pt-6 mt-12">
              <p className="text-xs text-muted-foreground/60">
                Stand: April 2026
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}