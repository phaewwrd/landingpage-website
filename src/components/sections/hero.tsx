"use client";

import { ArrowRight, CheckCircle2, PhoneCall, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { getSectionText, getSiteContent } from "@/content/site";
import { useLanguage } from "@/hooks/use-language";

export function Hero() {
  const { language } = useLanguage();
  const { site, heroStats } = getSiteContent(language);
  const t = getSectionText(language).hero;

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-24"
    >
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-6 inline-flex items-center gap-2 rounded-lg border border-[#cfd8b8] bg-[#edf2e3] px-4 py-2 text-sm text-[#556b2f]"
          >
            <Sparkles className="h-4 w-4" />
            {t.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="max-w-xl text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl lg:text-5xl"
          >
            {t.heading}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-5 max-w-lg text-base leading-7 text-stone-600"
          >
            {t.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Button href={site.phoneHref} size="lg" className="group">
              <PhoneCall className="mr-2 h-4 w-4 text-white" />
              <span className="text-white">
                {t.call} {site.phoneDisplay}
              </span>
              <ArrowRight className="ml-2 h-4 w-4 text-white transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button href="#features" variant="secondary" size="lg">
              {t.explore}
            </Button>
          </motion.div>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-stone-600">
            <span className="inline-flex items-center gap-2 rounded-lg border border-[#d8c7ae] bg-[#fffdfa] px-3 py-1.5">
              <CheckCircle2 className="h-4 w-4 text-[#556b2f]" />
              {t.walkInChip}
            </span>
            <span className="inline-flex items-center gap-2 rounded-lg border border-[#d8c7ae] bg-[#fffdfa] px-3 py-1.5">
              <CheckCircle2 className="h-4 w-4 text-[#556b2f]" />
              {t.reserveChip}
            </span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute inset-0 -z-10 rounded-2xl bg-linear-to-br from-[#e9efdb]/70 via-[#f1e5d2]/35 to-transparent blur-3xl" />
          <div className="rounded-2xl border border-[#d8c7ae] bg-[#fffdfa] p-3 shadow-xl shadow-[#6f4e37]/10">
            <div className="relative overflow-hidden rounded-xl border border-[#e4d7c2] bg-[#f9f3e9]">
              <div className="overflow-hidden bg-white">
                <Image
                  src="/images/hero1.jpg"
                  alt="Salon interior and styling atmosphere"
                  width={1200}
                  height={700}
                  className="h-105 w-full object-cover lg:h-130"
                  priority
                />
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="rounded-lg border border-white/70 bg-white/85 px-4 py-2 backdrop-blur">
                  <p className="text-base font-semibold text-stone-900">
                    {heroStats[1]?.value}+
                    <span className="ml-2 text-sm font-medium text-stone-600">
                      {heroStats[1]?.label}
                    </span>
                  </p>
                </div>
                <div className="rounded-lg border border-white/70 bg-white/85 px-4 py-2 backdrop-blur">
                  <p className="text-base font-semibold text-stone-900">
                    {heroStats[0]?.value}
                    <span className="ml-2 text-sm font-medium text-stone-600">
                      {t.ratingLabel}
                    </span>
                  </p>
                  <p className="text-xs text-[#556b2f]">{t.open}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
