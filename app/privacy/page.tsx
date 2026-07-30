import { LegalLayout } from "@/components/legal/legal-layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung — Trackspire",
  description: "Datenschutzerklärung von Trackspire gemäß DSGVO.",
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Datenschutzerklärung" lastUpdated="Juli 2026">
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
        Bildschirmauflösung), ungefähre Geolocation (Land, Region, Stadt auf Basis der
        IP-Adresse) sowie Ladezeiten und Web Vitals. Die IP-Adresse wird nicht dauerhaft
        gespeichert. Es werden keine Cookies gesetzt. Die Verarbeitung erfolgt im Auftrag
        unserer Kunden; diese sind die Verantwortlichen nach Art. 4 Nr. 7 DSGVO.
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
      </p>

      <h3>2.3 Zahlungsabwicklung</h3>
      <p>
        Zahlungen werden über Stripe, Inc. (354 Oyster Point Blvd, South San Francisco,
        CA 94080, USA) abgewickelt. Wir speichern keine vollständigen Zahlungsdaten.
        Stripe verarbeitet Daten gemäß seiner eigenen Datenschutzrichtlinie (
        <a href="https://stripe.com/de/privacy" target="_blank" rel="noopener noreferrer">
          stripe.com/de/privacy
        </a>
        ). Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.
      </p>

      <h3>2.4 E-Mail-Kommunikation</h3>
      <p>
        Wir versenden transaktionale E-Mails (z. B. Einladungen, Passwort-Reset).
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.
      </p>

      <h3>2.5 Server-Logs</h3>
      <p>
        Unser Webserver speichert automatisch Zugriffslogs (IP-Adresse, Zeitstempel,
        aufgerufene URL, HTTP-Statuscode). Rechtsgrundlage ist Art. 6 Abs. 1 lit. f
        DSGVO. Logs werden nach spätestens 30 Tagen gelöscht.
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
          <strong>Stripe, Inc.</strong> — Zahlungsabwicklung (USA; Standardvertragsklauseln
          gemäß Art. 46 Abs. 2 lit. c DSGVO)
        </li>
        <li>
          <strong>ZAP-Hosting GmbH &amp; Co. KG</strong> — Server-Hosting (Deutschland)
        </li>
      </ul>

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

      <h2>7. Beschwerderecht</h2>
      <p>
        Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.
        Zuständig für Niedersachsen ist die Landesbeauftragte für den Datenschutz
        Niedersachsen (LfD Niedersachsen), Prinzenstraße 5, 30159 Hannover.
      </p>
    </LegalLayout>
  );
}
