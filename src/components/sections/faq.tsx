"use client";

import { Container } from "@/components/ui/container";
import { getSectionText, getSiteContent } from "@/content/site";
import { useLanguage } from "@/hooks/use-language";

export function FAQ() {
  const { language } = useLanguage();
  const { faqs } = getSiteContent(language);
  const t = getSectionText(language).faq;

  return (
    <section id="faq" className="py-24 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#556b2f]">{t.heading}</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
            {t.title}
          </h2>
        </div>

        <div className="mt-12 grid items-start gap-4 lg:grid-cols-2">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group self-start rounded-xl border border-stone-200 bg-white p-6 open:bg-stone-50"
            >
              <summary className="cursor-pointer list-none text-base font-medium text-stone-900 focus-visible:outline-none">
                <div className="flex items-center justify-between gap-4">
                  <span>{item.question}</span>
                  <span className="text-[#556b2f] transition-transform group-open:rotate-45">
                    +
                  </span>
                </div>
              </summary>
              <p className="mt-4 leading-7 text-stone-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}