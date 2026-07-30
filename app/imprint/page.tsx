import { LegalLayout } from "@/components/legal/legal-layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum — Trackspire",
  description: "Impressum von Trackspire — Luka Dev Studio, Inh. Luka Liebenthal.",
  robots: { index: false },
};

export default function ImprintPage() {
  return (
    <LegalLayout title="Impressum" lastUpdated="Juli 2026">
      <h2>Angaben gemäß § 5 TMG</h2>
      <p>
        Luka Dev Studio<br />
        Inh. Luka Liebenthal<br />
        Koppenstraße 13<br />
        31785 Hameln<br />
        Deutschland
      </p>

      <h2>Kontakt</h2>
      <p>
        E-Mail:{" "}
        <a href="mailto:info@luka-lta.dev">info@luka-lta.dev</a>
      </p>

      <h2>Umsatzsteuer</h2>
      <p>
        Gemäß § 19 UStG wird keine Umsatzsteuer berechnet (Kleinunternehmerregelung).
      </p>

      <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
      <p>
        Luka Liebenthal<br />
        Koppenstraße 13, 31785 Hameln
      </p>

      <h2>EU-Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
        bereit:{" "}
        <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
          https://ec.europa.eu/consumers/odr/
        </a>
        . Unsere E-Mail-Adresse finden Sie oben.
      </p>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    </LegalLayout>
  );
}
