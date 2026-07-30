"use client";

import { useEffect, useRef, useState } from "react";
import { Minus, Plus } from "lucide-react";

const faqs = [
  {
    question: "How does Trackspire work without cookies?",
    answer:
      "Instead of storing identifiers on devices, Trackspire derives a daily-rotating, anonymized hash from the visitor's IP address and User-Agent string. The raw values are never stored. The hash resets every 24 hours, making it technically impossible to track individual users across sessions.",
  },
  {
    question: "Is Trackspire GDPR, CCPA, and PECR compliant?",
    answer:
      "Yes. Since no personal data is collected and no cookies or persistent identifiers are set, Trackspire falls outside the scope of consent requirements under GDPR, CCPA, and PECR. Most teams can remove their cookie banners entirely when switching to Trackspire.",
  },
  {
    question: "What data do you actually collect?",
    answer:
      "Page URL, referrer, browser family, OS, device type, screen size, country (derived from anonymized IP — never stored raw), and custom events you explicitly define. No email addresses, no names, no persistent IDs.",
  },
  {
    question: "Can I self-host Trackspire?",
    answer:
      "Yes. Trackspire is fully open source. A single `docker compose up` gets you a production-ready instance in under 10 minutes. You own all data, choose your own storage region, and there is no vendor lock-in.",
  },
  {
    question: "How do I migrate from Google Analytics?",
    answer:
      "Remove the GA script tag and add the Trackspire script tag. Historical data does not migrate — Trackspire starts fresh from the day you switch. Most teams find the clean break worthwhile given the removal of consent overhead.",
  },
  {
    question: "What happens to my data if I cancel?",
    answer:
      "You can export all your data as CSV or JSON at any time from the dashboard. After cancellation, your data is retained for 30 days during which you can still export, then permanently deleted.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="faq" ref={sectionRef} className="relative py-32 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-8">
              <span className="w-12 h-px bg-foreground/30" />
              FAQ
            </span>
            <h2
              className={`text-5xl lg:text-6xl font-display tracking-tight leading-[0.9] transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Common
              <br />
              questions.
            </h2>
          </div>

          <div className="lg:col-span-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border-t border-foreground/10 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between gap-6 py-7 text-left group"
                >
                  <span className="text-lg font-medium group-hover:text-foreground/70 transition-colors">
                    {faq.question}
                  </span>
                  <span className="shrink-0 text-muted-foreground">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-64 pb-7" : "max-h-0"
                  }`}
                >
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
            <div className="border-t border-foreground/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
