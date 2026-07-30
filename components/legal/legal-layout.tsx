import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <div className="mx-auto max-w-3xl px-6 py-32 lg:py-40">
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-3.5" aria-hidden="true" />
            Back to Trackspire
          </Link>

          <div className="mb-12">
            <h1 className="text-3xl font-display tracking-tight lg:text-4xl">
              {title}
            </h1>
            <p className="mt-2 text-sm text-muted-foreground font-mono">Stand: {lastUpdated}</p>
          </div>

          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:opacity-70 [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:text-base [&_h2]:font-semibold [&_h2]:text-foreground [&_h3]:mb-2 [&_h3]:mt-6 [&_h3]:text-sm [&_h3]:font-semibold [&_h3]:text-foreground/80 [&_p]:mb-3 [&_ul]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 first:[&_h2]:mt-0">
            {children}
          </div>

          <div className="mt-16 flex flex-wrap gap-x-6 gap-y-2 border-t border-foreground/10 pt-8 text-xs text-muted-foreground">
            <Link href="/imprint" className="transition-colors hover:text-foreground">Imprint</Link>
            <Link href="/privacy" className="transition-colors hover:text-foreground">Privacy Policy</Link>
            <Link href="/terms" className="transition-colors hover:text-foreground">Terms of Service</Link>
          </div>
        </div>
      </main>
      <FooterSection />
    </>
  );
}
