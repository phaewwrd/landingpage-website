"use client";

import { ArrowRight, CheckCircle2, PhoneCall } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { getSectionText, getSiteContent } from "@/content/site";
import { useLanguage } from "@/hooks/use-language";

export function CTA() {
  const { language } = useLanguage();
  const { site } = getSiteContent(language);
  const t = getSectionText(language).cta;

  return (
    <section id="cta" className="py-24 sm:py-28">
      <Container>
        <div className="overflow-hidden rounded-2xl border border-[#d8c7ae] bg-linear-to-br from-[#edf2e3] via-[#fffdfa] to-[#f1e8d9] p-8 shadow-xl shadow-stone-800/10 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#556b2f]">
                {t.eyebrow}
              </p>
              <h2 className="mt-4 max-w-xl text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl lg:text-4xl">
                {t.title}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-stone-600">
                {t.desc}
              </p>

              <Button href={site.phoneHref} size="lg" className="mt-5 group">
                <PhoneCall className="mr-2 h-4 w-4 text-white" />
                <span className="text-white">{t.callNow}</span>
                <ArrowRight className="ml-2 h-4 w-4 text-white transition-transform group-hover:translate-x-0.5" />
              </Button>

              <ul className="mt-6 space-y-3 text-sm text-stone-600">
                {t.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#556b2f]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-stone-200 bg-white p-6">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#556b2f]">
                {t.phoneMainLabel}
              </p>
              <a
                href={site.phoneHref}
                className="mt-4 inline-flex items-center text-3xl font-semibold tracking-tight text-stone-900 transition-colors hover:text-[#6f4e37]"
              >
                {site.phoneDisplay}
              </a>
              <p className="mt-4 text-sm text-stone-600">{site.address}</p>
              <p className="mt-2 text-sm text-stone-600">{t.openHours}</p>

              <Button
                href={site.phoneHref}
                size="lg"
                className="mt-6 w-full group"
              >
                <PhoneCall className="mr-2 h-4 w-4 text-white" />
                <span className="text-white">{t.callNowShort}</span>
                <ArrowRight className="ml-2 h-4 w-4 text-white transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
