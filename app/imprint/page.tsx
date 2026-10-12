import { LegalLayout } from "@/components/legal/legal-layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum — Trackspire",
  description: "Impressum von Trackspire — Luka Dev Studio, Inh. Luka Liebenthal.",
  robots: { index: false },
};

export default function ImprintPage() {
  return (
    <LegalLayout title="Impressum" lastUpdated="Oktober 2026">
      <h2>Angaben gemäß § 5 DDG</h2>
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

      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p>
        Luka Liebenthal<br />
        Koppenstraße 13, 31785 Hameln
      </p>

      <h2>Verbraucherstreitbeilegung</h2>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen (§ 36 VSBG).
      </p>
    </LegalLayout>
  );
}
