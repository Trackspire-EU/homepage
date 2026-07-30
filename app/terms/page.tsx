import { LegalLayout } from "@/components/legal/legal-layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGB — Trackspire",
  description: "Allgemeine Geschäftsbedingungen von Trackspire.",
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <LegalLayout title="Allgemeine Geschäftsbedingungen" lastUpdated="Juli 2026">
      <h2>1. Geltungsbereich</h2>
      <p>
        Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen
        Luka Dev Studio, Inh. Luka Liebenthal, Koppenstraße 13, 31785 Hameln
        (nachfolgend „Anbieter"), und den Nutzern der Web-Analytics-Plattform Trackspire
        (nachfolgend „Kunde"). Abweichende AGB des Kunden werden nicht anerkannt.
      </p>

      <h2>2. Leistungsbeschreibung</h2>
      <p>
        Trackspire ist eine datenschutzfreundliche Web-Analytics-Plattform. Der Anbieter
        stellt dem Kunden einen Zugang zur Plattform sowie ein JavaScript-Tracking-Script
        bereit, das auf den Websites des Kunden eingebunden werden kann, um anonyme
        Nutzungsdaten zu erfassen und auszuwerten. Der Funktionsumfang richtet sich nach
        dem jeweiligen Tarif (Free, Pro).
      </p>

      <h2>3. Vertragsschluss</h2>
      <p>
        Der Vertrag kommt durch die Registrierung des Kunden und Bestätigung per E-Mail
        zustande. Die Nutzung des kostenpflichtigen Pro-Tarifs setzt zusätzlich den
        Abschluss eines Abonnements über den Zahlungsdienstleister Stripe voraus.
      </p>

      <h2>4. Preise und Zahlung</h2>
      <p>
        Die aktuellen Preise sind auf der Billing-Seite innerhalb der Plattform einsehbar.
        Alle Preise verstehen sich in Euro. Gemäß § 19 UStG wird keine Umsatzsteuer
        berechnet (Kleinunternehmerregelung).
      </p>
      <p>
        Die Zahlung des Pro-Abonnements erfolgt monatlich oder jährlich im Voraus per
        Kreditkarte oder einem anderen von Stripe unterstützten Zahlungsmittel. Bei
        Zahlungsverzug behält sich der Anbieter vor, den Zugang nach Vorankündigung
        einzuschränken.
      </p>

      <h2>5. Laufzeit und Kündigung</h2>
      <p>
        Das Free-Abonnement ist kostenlos und läuft auf unbestimmte Zeit. Das
        Pro-Abonnement verlängert sich automatisch um den gebuchten Zeitraum (monatlich
        oder jährlich), sofern es nicht vor Ablauf des aktuellen Abrechnungszeitraums
        über die Billing-Seite gekündigt wird. Nach einer Kündigung bleibt der
        Pro-Zugang bis zum Ende des bezahlten Zeitraums aktiv.
      </p>
      <p>
        Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.
      </p>

      <h2>6. Nutzungsrechte</h2>
      <p>
        Der Anbieter räumt dem Kunden für die Dauer des Vertragsverhältnisses ein
        nicht-exklusives, nicht übertragbares Recht ein, die Plattform im Rahmen dieser
        AGB zu nutzen. Der Kunde darf die Plattform nicht für illegale Zwecke verwenden
        und technische Schutzmechanismen nicht umgehen.
      </p>

      <h2>7. Datenschutz und Auftragsverarbeitung</h2>
      <p>
        Der Kunde ist für die ordnungsgemäße Einbindung des Tracking-Scripts auf seinen
        Websites sowie für die Information seiner eigenen Nutzer nach der DSGVO
        verantwortlich. Der Anbieter verarbeitet die über das Tracking-Script erfassten
        Daten als Auftragsverarbeiter gemäß Art. 28 DSGVO. Ein
        Auftragsverarbeitungsvertrag (AVV) kann auf Anfrage abgeschlossen werden.
      </p>

      <h2>8. Haftung</h2>
      <p>
        Der Anbieter haftet unbeschränkt bei Vorsatz und grober Fahrlässigkeit sowie bei
        Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit. Bei
        leichter Fahrlässigkeit haftet der Anbieter nur bei Verletzung wesentlicher
        Vertragspflichten, beschränkt auf den vertragstypischen, vorhersehbaren Schaden.
        Im Übrigen ist die Haftung für leichte Fahrlässigkeit ausgeschlossen.
      </p>

      <h2>9. Verfügbarkeit</h2>
      <p>
        Der Anbieter bemüht sich um eine hohe Verfügbarkeit der Plattform, übernimmt
        jedoch keine Garantie für ununterbrochene Verfügbarkeit. Geplante
        Wartungsarbeiten werden nach Möglichkeit angekündigt.
      </p>

      <h2>10. Änderungen der AGB</h2>
      <p>
        Der Anbieter behält sich vor, diese AGB mit einer Ankündigungsfrist von 30 Tagen
        per E-Mail anzukündigen. Widerspricht der Kunde nicht innerhalb der Frist, gilt
        die Änderung als akzeptiert. Im Widerspruchsfall hat der Kunde das Recht zur
        ordentlichen Kündigung.
      </p>

      <h2>11. Anwendbares Recht und Gerichtsstand</h2>
      <p>
        Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts. Gerichtsstand für
        Kaufleute ist Hameln.
      </p>

      <h2>12. Salvatorische Klausel</h2>
      <p>
        Sollten einzelne Bestimmungen dieser AGB unwirksam sein, berührt dies die
        Wirksamkeit der übrigen Bestimmungen nicht.
      </p>
    </LegalLayout>
  );
}
