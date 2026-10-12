import { LegalLayout } from "@/components/legal/legal-layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGB — Trackspire",
  description: "Allgemeine Geschäftsbedingungen von Trackspire.",
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <LegalLayout title="Allgemeine Geschäftsbedingungen" lastUpdated="Oktober 2026">
      <h2>1. Geltungsbereich</h2>
      <p>
        Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen
        Luka Dev Studio, Inh. Luka Liebenthal, Koppenstraße 13, 31785 Hameln
        (nachfolgend „Anbieter"), und den Nutzern der Web-Analytics-Plattform Trackspire
        (nachfolgend „Kunde"). Kunden können Verbraucher (§ 13 BGB) oder Unternehmer
        (§ 14 BGB) sein. Abweichende AGB des Kunden werden nicht anerkannt.
      </p>

      <h2>2. Leistungsbeschreibung</h2>
      <p>
        Trackspire ist eine datenschutzfreundliche Web-Analytics-Plattform. Der Anbieter
        stellt dem Kunden einen Zugang zur Plattform sowie ein JavaScript-Tracking-Script
        bereit, das auf den Websites des Kunden eingebunden werden kann, um anonyme
        Nutzungsdaten zu erfassen und auszuwerten. Der Funktionsumfang richtet sich nach
        dem jeweiligen Tarif (Free, Pro). Die Self-Hosted-Variante wird unter einer
        Open-Source-Lizenz bereitgestellt und ist nicht Gegenstand dieser AGB.
      </p>

      <h2>3. Vertragsschluss</h2>
      <p>
        Der Vertrag kommt durch die Registrierung des Kunden und Bestätigung per E-Mail
        zustande. Die Nutzung des kostenpflichtigen Pro-Tarifs setzt zusätzlich den
        Abschluss eines Abonnements über den Zahlungsdienstleister Stripe voraus. Der
        Vertragstext wird nicht gesondert gespeichert; diese AGB können jederzeit auf
        dieser Seite abgerufen werden.
      </p>

      <h2>4. Preise und Zahlung</h2>
      <p>
        Die aktuellen Preise sind auf der Website und auf der Billing-Seite innerhalb der
        Plattform einsehbar. Alle Preise verstehen sich in Euro und sind Endpreise. Gemäß
        § 19 UStG wird keine Umsatzsteuer berechnet (Kleinunternehmerregelung).
      </p>
      <p>
        Die Zahlung des Pro-Abonnements erfolgt monatlich oder jährlich im Voraus per
        Kreditkarte oder einem anderen von Stripe unterstützten Zahlungsmittel. Bei
        Zahlungsverzug behält sich der Anbieter vor, den Zugang nach Vorankündigung
        einzuschränken.
      </p>

      <h2>5. Laufzeit und Kündigung</h2>
      <p>
        Das Free-Abonnement ist kostenlos und läuft auf unbestimmte Zeit. Es kann von
        beiden Seiten jederzeit beendet werden. Das Pro-Abonnement verlängert sich
        automatisch um den gebuchten Zeitraum (monatlich oder jährlich), sofern es nicht
        vor Ablauf des aktuellen Abrechnungszeitraums gekündigt wird. Die Kündigung ist
        über die Billing-Seite der Plattform oder per E-Mail an{" "}
        <a href="mailto:info@luka-lta.dev">info@luka-lta.dev</a> möglich. Nach einer
        Kündigung bleibt der Pro-Zugang bis zum Ende des bezahlten Zeitraums aktiv.
      </p>
      <p>
        Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.
      </p>

      <h2>6. Widerrufsrecht für Verbraucher</h2>
      <h3>Widerrufsbelehrung</h3>
      <p>
        <strong>Widerrufsrecht:</strong> Sie haben das Recht, binnen vierzehn Tagen ohne
        Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt
        vierzehn Tage ab dem Tag des Vertragsabschlusses.
      </p>
      <p>
        Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (Luka Dev Studio, Inh. Luka
        Liebenthal, Koppenstraße 13, 31785 Hameln,{" "}
        <a href="mailto:info@luka-lta.dev">info@luka-lta.dev</a>) mittels einer
        eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder eine E-Mail)
        über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür
        das beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben
        ist. Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die
        Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.
      </p>
      <p>
        <strong>Folgen des Widerrufs:</strong> Wenn Sie diesen Vertrag widerrufen, haben
        wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, unverzüglich und
        spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung
        über Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese
        Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen
        Transaktion eingesetzt haben; in keinem Fall werden Ihnen wegen dieser
        Rückzahlung Entgelte berechnet.
      </p>
      <p>
        Haben Sie verlangt, dass die Dienstleistung während der Widerrufsfrist beginnen
        soll, so haben Sie uns einen angemessenen Betrag zu zahlen, der dem Anteil der
        bis zu dem Zeitpunkt, zu dem Sie uns von der Ausübung des Widerrufsrechts
        hinsichtlich dieses Vertrags unterrichten, bereits erbrachten Dienstleistungen im
        Vergleich zum Gesamtumfang der im Vertrag vorgesehenen Dienstleistungen entspricht.
      </p>
      <p>
        <strong>Vorzeitiges Erlöschen:</strong> Das Widerrufsrecht erlischt bei einem
        Vertrag über die Erbringung von Dienstleistungen, wenn wir die Dienstleistung
        vollständig erbracht haben und mit der Ausführung der Dienstleistung erst
        begonnen haben, nachdem Sie dazu Ihre ausdrückliche Zustimmung gegeben haben und
        gleichzeitig Ihre Kenntnis davon bestätigt haben, dass Sie Ihr Widerrufsrecht
        bei vollständiger Vertragserfüllung durch uns verlieren.
      </p>

      <h3>Muster-Widerrufsformular</h3>
      <p>
        (Wenn Sie den Vertrag widerrufen wollen, füllen Sie bitte dieses Formular aus und
        senden Sie es zurück.)
      </p>
      <p>
        — An Luka Dev Studio, Inh. Luka Liebenthal, Koppenstraße 13, 31785 Hameln,{" "}
        <a href="mailto:info@luka-lta.dev">info@luka-lta.dev</a>:<br />
        — Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag
        über die Erbringung der folgenden Dienstleistung (*):<br />
        — Bestellt am (*) / erhalten am (*):<br />
        — Name des/der Verbraucher(s):<br />
        — Anschrift des/der Verbraucher(s):<br />
        — Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier):<br />
        — Datum:<br />
        <br />
        (*) Unzutreffendes streichen.
      </p>

      <h2>7. Nutzungsrechte</h2>
      <p>
        Der Anbieter räumt dem Kunden für die Dauer des Vertragsverhältnisses ein
        nicht-exklusives, nicht übertragbares Recht ein, die Plattform im Rahmen dieser
        AGB zu nutzen. Der Kunde darf die Plattform nicht für illegale Zwecke verwenden
        und technische Schutzmechanismen nicht umgehen.
      </p>

      <h2>8. Datenschutz und Auftragsverarbeitung</h2>
      <p>
        Der Kunde ist für die ordnungsgemäße Einbindung des Tracking-Scripts auf seinen
        Websites sowie für die Information seiner eigenen Nutzer nach der DSGVO
        verantwortlich. Der Anbieter verarbeitet die über das Tracking-Script erfassten
        Daten als Auftragsverarbeiter gemäß Art. 28 DSGVO. Ein
        Auftragsverarbeitungsvertrag (AVV) kann auf Anfrage abgeschlossen werden.
        Einzelheiten zur Verarbeitung eigener Daten des Anbieters finden sich in der{" "}
        <a href="/privacy">Datenschutzerklärung</a>.
      </p>

      <h2>9. Haftung</h2>
      <p>
        Der Anbieter haftet unbeschränkt bei Vorsatz und grober Fahrlässigkeit, bei
        Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit, bei
        Übernahme einer Garantie sowie nach dem Produkthaftungsgesetz. Bei leichter
        Fahrlässigkeit haftet der Anbieter nur bei Verletzung wesentlicher
        Vertragspflichten (Pflichten, deren Erfüllung die ordnungsgemäße Durchführung des
        Vertrags erst ermöglicht und auf deren Einhaltung der Kunde regelmäßig vertrauen
        darf), beschränkt auf den vertragstypischen, vorhersehbaren Schaden. Im Übrigen
        ist die Haftung für leichte Fahrlässigkeit ausgeschlossen.
      </p>

      <h2>10. Verfügbarkeit</h2>
      <p>
        Der Anbieter bemüht sich um eine hohe Verfügbarkeit der Plattform, übernimmt
        jedoch keine Garantie für ununterbrochene Verfügbarkeit. Geplante
        Wartungsarbeiten werden nach Möglichkeit angekündigt.
      </p>

      <h2>11. Änderungen der AGB</h2>
      <p>
        Der Anbieter kann diese AGB mit Wirkung für die Zukunft ändern, wenn dies aus
        sachlichen Gründen erforderlich ist (z. B. Gesetzesänderungen oder Änderungen des
        Leistungsumfangs) und die Änderung den Kunden nicht unangemessen benachteiligt.
        Änderungen werden dem Kunden mindestens 30 Tage vor Inkrafttreten per E-Mail
        mitgeteilt. Bei Unternehmern gilt die Änderung als genehmigt, wenn sie nicht
        innerhalb der Frist widersprochen haben. Bei Verbrauchern werden Änderungen, die
        die vertraglichen Hauptleistungen oder das Verhältnis von Leistung und
        Gegenleistung betreffen, nur mit ausdrücklicher Zustimmung wirksam. Im
        Widerspruchsfall hat der Kunde das Recht zur ordentlichen Kündigung.
      </p>

      <h2>12. Anwendbares Recht und Gerichtsstand</h2>
      <p>
        Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts. Bei Verbrauchern
        gilt diese Rechtswahl nur, soweit dadurch nicht zwingende Bestimmungen des
        Rechts des Staates entzogen werden, in dem der Verbraucher seinen gewöhnlichen
        Aufenthalt hat. Gerichtsstand für Kaufleute ist Hameln.
      </p>

      <h2>13. Salvatorische Klausel</h2>
      <p>
        Sollten einzelne Bestimmungen dieser AGB unwirksam sein, berührt dies die
        Wirksamkeit der übrigen Bestimmungen nicht.
      </p>
    </LegalLayout>
  );
}
