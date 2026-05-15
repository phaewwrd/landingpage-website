"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { getSectionText, getSiteContent } from "@/content/site";
import { useLanguage } from "@/hooks/use-language";

export function Pricing() {
  const { language } = useLanguage();
  const { pricingPlans } = getSiteContent(language);
  const t = getSectionText(language).pricing;

  return (
    <section id="pricing" className="py-24 sm:py-28">
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

        <div className="mt-12 grid gap-5 xl:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className={
                plan.featured
                  ? "relative rounded-xl border border-[#cfd8b8] bg-linear-to-b from-[#edf2e3] to-[#f1e8d9] p-6 shadow-xl shadow-stone-800/10"
                  : "rounded-xl border border-stone-200 bg-white p-6"
              }
            >
              {plan.featured ? (
                <div className="absolute right-6 top-6 rounded-lg bg-[#556b2f] px-3 py-1 text-xs font-semibold text-white">
                  {t.mostBooked}
                </div>
              ) : null}
              <p className="text-sm font-medium text-[#556b2f]">{plan.name}</p>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-4xl font-semibold tracking-tight text-stone-900">
                  {plan.price}
                </span>
                <span className="pb-1 text-sm text-stone-500">
                  {t.startingAt}
                </span>
              </div>
              <p className="mt-3 leading-7 text-stone-600">
                {plan.description}
              </p>

              <ul className="mt-6 space-y-3 border-t border-stone-200 pt-6 text-sm text-stone-600">
                {plan.features.map((feature) => (
                  <li key={feature.label} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#556b2f]" />
                    <span>{feature.label}</span>
                  </li>
                ))}
              </ul>

              <Button
                href="#cta"
                variant={plan.featured ? "primary" : "secondary"}
                className="mt-8 w-full "
              >
                <p className={plan.featured ? "text-white" : "text-[#556b2f]"}>
                  {t.book} {plan.name}
                </p>
              </Button>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
