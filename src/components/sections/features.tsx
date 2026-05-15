"use client";

import {
  BarChart3,
  CheckCircle2,
  Layers3,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

import { Container } from "@/components/ui/container";
import { getSectionText, getSiteContent } from "@/content/site";
import { useLanguage } from "@/hooks/use-language";
import type { IconKey } from "@/types/site";

const iconMap: Record<IconKey, typeof Sparkles> = {
  spark: Sparkles,
  shield: ShieldCheck,
  workflow: Workflow,
  analytics: BarChart3,
  support: CheckCircle2,
  layers: Layers3,
  rocket: Rocket,
  users: CheckCircle2,
  check: CheckCircle2,
  bolt: CheckCircle2,
};

export function Features() {
  const { language } = useLanguage();
  const { features } = getSiteContent(language);
  const t = getSectionText(language).features;

  return (
    <section id="features" className="py-24 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#556b2f]">
            {t.heading}
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
            {t.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-stone-600">
            {t.description}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { src: "/images/salon-chair.jpg", alt: t.photoLabels[0] },
            { src: "/images/salon-color.jpg", alt: t.photoLabels[1] },
            { src: "/images/salon-style.jpg", alt: t.photoLabels[2] },
          ].map((photo) => (
            <div
              key={photo.src}
              className="overflow-hidden rounded-xl border border-[#d8c7ae] bg-[#fffdfa]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={800}
                height={520}
                className="h-44 w-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];

            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="group rounded-xl border border-stone-200 bg-white p-6 shadow-md shadow-stone-800/10 transition-transform duration-200 hover:-translate-y-1 hover:bg-stone-50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br from-[#edf2e3] to-[#f1e8d9] text-[#556b2f] ring-1 ring-[#d8c7ae]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-stone-900">
                  {feature.title}
                </h3>
                <p className="mt-3 leading-7 text-stone-600">
                  {feature.description}
                </p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#556b2f] transition-transform group-hover:translate-x-0.5">
                  {t.explore} <span aria-hidden>→</span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
