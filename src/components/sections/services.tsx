"use client";

import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { getSectionText, getSiteContent } from "@/content/site";
import { useLanguage } from "@/hooks/use-language";

export function Services() {
  const { language } = useLanguage();
  const { services } = getSiteContent(language);
  const t = getSectionText(language).services;

  return (
    <section id="services" className="py-24 sm:py-28">
      <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="max-w-xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#556b2f]">{t.heading}</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
            {t.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-stone-600">
            {t.description}
          </p>

          <div className="mt-8 rounded-xl border border-[#d8c7ae] bg-linear-to-br from-[#edf2e3] to-[#f1e8d9] p-6">
            <p className="text-sm font-medium text-stone-900">{t.why}</p>
            <ul className="mt-4 space-y-3 text-sm text-stone-600">
              {t.bullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#556b2f]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button href="#cta" variant="secondary" size="sm" className="mt-6">
              {t.book}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid gap-4">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="rounded-xl border border-stone-200 bg-white p-6 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-stone-50"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-sm font-medium text-[#556b2f]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold text-stone-900">
                    {service.title}
                  </h3>
                </div>
                <span className="rounded-lg border border-stone-200 bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600">
                  {t.popular}
                </span>
              </div>
              <p className="mt-4 leading-7 text-stone-600">{service.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-stone-200 bg-stone-100 px-3 py-1 text-xs font-medium text-stone-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}