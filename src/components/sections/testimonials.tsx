"use client";

import { Quote } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { getSectionText, getSiteContent } from "@/content/site";
import { useLanguage } from "@/hooks/use-language";

export function Testimonials() {
  const { language } = useLanguage();
  const { site, testimonials } = getSiteContent(language);
  const t = getSectionText(language).testimonials;

  return (
    <section id="testimonials" className="py-24 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#556b2f]">
            {t.heading}
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
            {t.title}
          </h2>
        </div>

        <div className="mt-8 rounded-xl border border-stone-200 bg-white p-6">
          <div className="grid gap-5 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <p className="text-base font-semibold text-stone-900">
                {site.name}
              </p>
              <p className="mt-1 text-sm text-stone-600">{site.address}</p>
              <p className="mt-3 text-sm text-[#8b5e3c]">{t.reviews}</p>
              <a
                href={site.phoneHref}
                className="mt-4 inline-flex rounded-lg border border-[#cfd8b8] bg-[#edf2e3] px-4 py-2 text-sm font-medium text-[#556b2f] transition-colors hover:bg-[#e4ebd5]"
              >
                {t.callToBook}
              </a>
            </div>
            <div className="rounded-lg border border-[#d8c7ae] bg-linear-to-br from-[#edf2e3] to-[#f1e8d9] p-4">
              <div className="h-40 overflow-hidden rounded-lg border border-stone-300 bg-white">
                <iframe
                  title={t.map}
                  src="https://www.google.com/maps?q=13.7563,100.5018&z=13&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="mt-3 text-xs text-stone-500">{t.pin}</p>
              <a
                href="https://maps.google.com/?q=13.7563,100.5018"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex text-xs font-medium text-[#556b2f] transition-colors hover:text-[#445725]"
              >
                {language === "th"
                  ? "เปิดใน Google Maps"
                  : "Open in Google Maps"}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-xl border border-stone-200 bg-white p-6"
            >
              <Quote className="h-6 w-6 text-[#8b5e3c]" />
              <p className="mt-5 text-base leading-7 text-stone-700">
                “{testimonial.quote}”
              </p>
              <div className="mt-6 flex items-center gap-4 border-t border-stone-200 pt-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br from-[#edf2e3] to-[#f1e8d9] text-sm font-semibold text-stone-800 ring-1 ring-stone-200">
                  {testimonial.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-medium text-stone-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-stone-500">
                    {testimonial.role} · {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
