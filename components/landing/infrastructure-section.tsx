"use client";

import { useEffect, useState, useRef } from "react";

const highlights = [
  { value: "100%", label: "EU hosting", description: "Servers located in Germany." },
  { value: "0", label: "Third-country transfers", description: "Analytics data stays in the EU." },
];

export function InfrastructureSection() {
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
    <section id="infra" ref={sectionRef} className="relative py-32 lg:py-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20">
          <span className={`inline-flex items-center gap-4 text-sm font-mono text-muted-foreground mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
            <span className="w-12 h-px bg-foreground/20" />
            Infrastructure
          </span>

          <h2 className={`text-6xl md:text-7xl lg:text-[128px] font-display tracking-tight leading-[0.9] transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            Hosted in
            <br />
            <span className="text-muted-foreground">the EU.</span>
          </h2>

          <p className={`mt-8 text-xl text-muted-foreground leading-relaxed max-w-lg transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
            Trackspire runs on servers in Germany. Prefer full control? Self-host it
            with Docker Compose on your own infrastructure.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid sm:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <div
              key={item.label}
              className={`p-8 lg:p-12 border border-foreground/10 bg-foreground/[0.02] transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span className="text-7xl lg:text-8xl font-display leading-none">{item.value}</span>
              <span className="block text-lg mt-4">{item.label}</span>
              <span className="block text-sm text-muted-foreground mt-2">{item.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
