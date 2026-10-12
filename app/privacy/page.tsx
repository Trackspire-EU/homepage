import { LegalLayout } from "@/components/legal/legal-layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung — Trackspire",
  description: "Datenschutzerklärung von Trackspire gemäß DSGVO.",
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Datenschutzerklärung" lastUpdated="Oktober 2026">
      <h2>1. Verantwortlicher</h2>
      <p>
        Luka Dev Studio, Inh. Luka Liebenthal<br />
        Koppenstraße 13, 31785 Hameln<br />
        E-Mail: <a href="mailto:info@luka-lta.dev">info@luka-lta.dev</a>
      </p>

      <h2>2. Erhobene Daten und Verarbeitungszwecke</h2>

      <h3>2.1 Registrierung und Nutzerkonto</h3>
      <p>
        Bei der Registrierung erheben wir E-Mail-Adresse und ein verschlüsselt gespeichertes
        Passwort. Diese Daten sind zur Vertragserfüllung erforderlich (Art. 6 Abs. 1 lit. b
        DSGVO).
      </p>

      <h3>2.2 Analysedaten (Trackspire-Tracking-Script)</h3>
      <p>
        Trackspire erhebt auf den Websites unserer Kunden anonyme Nutzungsdaten wie
        aufgerufene Seiten, Geräteinformationen (Browser, Betriebssystem,
        Bildschirmauflösung), ungefähre Geolocation (Land, Region, Stadt und ungefähre
        Koordinaten auf Basis der IP-Adresse) sowie Ladezeiten und Web Vitals. Der Standort
        wird auf unseren eigenen Servern anhand einer lokal gespeicherten Geodatenbank
        (GeoLite2 von MaxMind) ermittelt; die IP-Adresse wird dafür nicht an Dritte
        übermittelt. Die IP-Adresse wird nicht im Klartext
        gespeichert: Zur Wiedererkennung innerhalb eines Tages wird aus IP-Adresse und
        User-Agent ein täglich wechselnder Hash gebildet. Es werden keine Cookies gesetzt.
        Die Verarbeitung erfolgt im Auftrag unserer Kunden; diese sind die
        Verantwortlichen nach Art. 4 Nr. 7 DSGVO. Wir verarbeiten die Daten als
        Auftragsverarbeiter nach Art. 28 DSGVO. Die Rechtsgrundlage liegt beim jeweiligen
        Kunden (in der Regel Art. 6 Abs. 1 lit. f DSGVO).
      </p>

      <h3>2.3 Zahlungsabwicklung</h3>
      <p>
        Zahlungen werden über Stripe Payments Europe, Ltd. (1 Grand Canal Street Lower,
        Grand Canal Dock, Dublin, D02 H210, Irland) abgewickelt. Stripe kann Daten an die
        Stripe, Inc. (USA) übermitteln. Wir speichern keine vollständigen Zahlungsdaten.
        Stripe verarbeitet Daten gemäß seiner eigenen Datenschutzrichtlinie (
        <a href="https://stripe.com/de/privacy" target="_blank" rel="noopener noreferrer">
          stripe.com/de/privacy
        </a>
        ). Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.
      </p>

      <h3>2.4 E-Mail-Kommunikation</h3>
      <p>
        Wir versenden transaktionale E-Mails (z. B. Einladungen, Passwort-Reset).
        Der Versand erfolgt über Resend (Plus Five Five, Inc., USA), an die dafür Ihre
        E-Mail-Adresse und der Nachrichteninhalt übermittelt werden. Mit dem Anbieter
        besteht ein Auftragsverarbeitungsvertrag nach Art. 28 DSGVO. Die Übermittlung in
        die USA stützt sich auf den Angemessenheitsbeschluss zum EU-US Data Privacy
        Framework (Art. 45 DSGVO), dem der Anbieter beigetreten ist, sowie ergänzend auf
        Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO). Rechtsgrundlage ist Art. 6 Abs. 1 lit. b
        DSGVO.
      </p>

      <h3>2.5 Server-Logs</h3>
      <p>
        Unser Webserver speichert automatisch Zugriffslogs (IP-Adresse, Zeitstempel,
        aufgerufene URL, HTTP-Statuscode). Rechtsgrundlage ist Art. 6 Abs. 1 lit. f
        DSGVO. Logs werden nach spätestens 30 Tagen gelöscht.
      </p>

      <h3>2.6 Reichweitenmessung auf dieser Website</h3>
      <p>
        Auf dieser Website setzen wir unsere eigene Analysesoftware Trackspire ein. Sie
        erfasst aufgerufene Seiten, Referrer, Browser, Betriebssystem, Gerätetyp,
        Bildschirmgröße und das Land des Besuchers. Es werden keine Cookies gesetzt und
        keine Informationen auf Ihrem Endgerät gespeichert oder ausgelesen. IP-Adressen
        werden nicht im Klartext gespeichert. Die Daten werden ausschließlich auf unseren
        Servern in Deutschland verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO;
        unser berechtigtes Interesse liegt in der statistischen Auswertung der Nutzung
        unseres Angebots. Sie können der Verarbeitung jederzeit widersprechen (siehe
        Abschnitt 6).
      </p>

      <h3>2.7 Kontaktaufnahme</h3>
      <p>
        Wenn Sie uns per E-Mail kontaktieren, speichern wir Ihre Angaben zur Bearbeitung
        der Anfrage und für Anschlussfragen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b oder
        lit. f DSGVO. Die Daten werden gelöscht, sobald sie nicht mehr erforderlich sind.
      </p>

      <h2>3. Speicherdauer</h2>
      <p>
        Kontodaten werden für die Dauer des Vertragsverhältnisses gespeichert und nach
        Vertragsende innerhalb von 90 Tagen gelöscht, sofern keine gesetzlichen
        Aufbewahrungspflichten bestehen. Analysedaten werden je nach gebuchtem Tarif bis zu
        12 Monate aufbewahrt.
      </p>

      <h2>4. Weitergabe an Dritte</h2>
      <p>
        Daten werden nur weitergegeben, soweit dies zur Vertragserfüllung erforderlich ist
        oder gesetzliche Pflichten bestehen. Folgende Auftragsverarbeiter setzen wir ein:
      </p>
      <ul>
        <li>
          <strong>Stripe Payments Europe, Ltd.</strong> — Zahlungsabwicklung (Irland; bei
          Übermittlung an Stripe, Inc. in den USA auf Grundlage von
          Standardvertragsklauseln gemäß Art. 46 Abs. 2 lit. c DSGVO)
        </li>
        <li>
          <strong>Plus Five Five, Inc. (Resend)</strong> — Versand transaktionaler E-Mails
          (USA; EU-US Data Privacy Framework und Standardvertragsklauseln gemäß
          Art. 46 Abs. 2 lit. c DSGVO)
        </li>
        <li>
          <strong>ZAP-Hosting GmbH &amp; Co. KG</strong> — Server-Hosting (Deutschland)
        </li>
        <li>
          <strong>Functional Software, Inc. (Sentry)</strong> — Fehlerüberwachung unserer
          API und des Dashboards (technische Fehlerberichte, Speicherung in der
          EU-Region des Anbieters). Bildschirmaufzeichnungen (Session Replay) setzen wir
          nicht ein.
        </li>
        <li>
          <strong>Telegram Messenger Inc.</strong> — Zustellung interner
          Fehlerbenachrichtigungen an unser Betriebsteam (technische Fehlermeldungen samt
          Kontext der fehlgeschlagenen Anfrage)
        </li>
        <li>
          <strong>Google Ireland Limited</strong> und <strong>GitHub, Inc.</strong> — nur
          wenn Sie sich über „Mit Google anmelden“ bzw. „Mit GitHub anmelden“ einloggen
          (Abgleich Ihrer Identität beim jeweiligen Anbieter)
        </li>
      </ul>
      <p>
        Zur Standortbestimmung nutzen wir GeoLite2-Daten von MaxMind, verfügbar unter{" "}
        <a href="https://www.maxmind.com" target="_blank" rel="noopener noreferrer">
          https://www.maxmind.com
        </a>
        . Die Datenbank wird ausschließlich lokal auf unseren Servern abgefragt; an MaxMind
        werden dabei keine Daten übermittelt.
      </p>

      <h2>5. Cookies und lokaler Speicher</h2>
      <p>
        Trackspire setzt keine Tracking-Cookies. Zur Sitzungsverwaltung wird ein
        Authentifizierungs-Token im localStorage des Browsers gespeichert. Dieser ist
        technisch notwendig und enthält keine weiteren personenbezogenen Daten.
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.
      </p>

      <h2>6. Ihre Rechte</h2>
      <p>Sie haben nach der DSGVO folgende Rechte:</p>
      <ul>
        <li><strong>Auskunft</strong> (Art. 15 DSGVO)</li>
        <li><strong>Berichtigung</strong> (Art. 16 DSGVO)</li>
        <li><strong>Löschung</strong> (Art. 17 DSGVO)</li>
        <li><strong>Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)</li>
        <li><strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
        <li>
          <strong>Widerspruch</strong> (Art. 21 DSGVO) gegen auf berechtigtem Interesse
          beruhende Verarbeitungen
        </li>
      </ul>
      <p>
        Zur Ausübung Ihrer Rechte:{" "}
        <a href="mailto:info@luka-lta.dev">info@luka-lta.dev</a>
      </p>

      <h2>7. Pflicht zur Bereitstellung, automatisierte Entscheidungen</h2>
      <p>
        Die Angabe von E-Mail-Adresse und Passwort bei der Registrierung ist für den
        Vertragsschluss erforderlich. Eine automatisierte Entscheidungsfindung einschließlich
        Profiling nach Art. 22 DSGVO findet nicht statt.
      </p>

      <h2>8. Beschwerderecht</h2>
      <p>
        Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.
        Zuständig für Niedersachsen ist die Landesbeauftragte für den Datenschutz
        Niedersachsen (LfD Niedersachsen), Prinzenstraße 5, 30159 Hannover.
      </p>
    </LegalLayout>
  );
}
