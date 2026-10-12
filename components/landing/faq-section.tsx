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
    question: "Is Trackspire built for GDPR, CCPA, and PECR?",
    answer:
      "Trackspire is designed for privacy-friendly analytics: no cookies, no persistent identifiers, and no raw IP storage. Whether a cookie banner or other obligations apply to your site depends on your own setup, so please check with your data protection officer or legal counsel. We provide a data processing agreement (DPA) on request.",
  },
  {
    question: "What data do you actually collect?",
    answer:
      "Page URL, referrer, browser family, OS, device type, screen size, approximate location (country, region and city, looked up from the IP address on our own servers — the IP itself is never stored raw or sent to a third party), and custom events you explicitly define. No email addresses, no names, no persistent IDs. Because the daily hash is derived from IP address and User-Agent, we treat this data as personal data under the GDPR and process it on your behalf.",
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
      "You can export all your data as CSV or JSON at any time from the dashboard. After cancellation, your analytics data is retained for 30 days during which you can still export, then permanently deleted. Account data is deleted within 90 days unless legal retention duties apply.",
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
