"use client";

import { useState } from "react";

import { Menu, PhoneCall, X } from "lucide-react";

import { getSectionText, getSiteContent } from "@/content/site";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { site, navigationLinks } = getSiteContent(language);
  const t = getSectionText(language).navbar;

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/90 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between gap-6">
        <a href="#top" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-lime-700 via-lime-600 to-amber-700 text-sm font-semibold text-white shadow-lg shadow-lime-700/20 transition-transform duration-200 group-hover:-rotate-6">
            N
          </span>
          <div>
            <p className="text-sm font-semibold tracking-wide text-stone-900">
              {site.name}
            </p>
            <p className="text-xs text-stone-500">{t.subtitle}</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-stone-600 transition-colors hover:text-stone-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <div className="inline-flex rounded-lg border border-stone-200 bg-white p-1">
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={cn(
                "rounded-lg px-3 py-1 text-xs font-semibold transition",
                language === "en"
                  ? "bg-stone-800 text-white"
                  : "text-stone-600 hover:bg-stone-100",
              )}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage("th")}
              className={cn(
                "rounded-lg px-3 py-1 text-xs font-semibold transition",
                language === "th"
                  ? "bg-stone-800 text-white"
                  : "text-stone-600 hover:bg-stone-100",
              )}
            >
              TH
            </button>
          </div>
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 text-sm font-medium text-lime-800 transition-colors hover:text-lime-900"
          >
            <PhoneCall className="h-4 w-4" />
            {site.phoneDisplay}
          </a>
          <Button href="#pricing" variant="secondary" size="sm">
            {t.viewServices}
          </Button>
          <Button href="#cta" size="sm">
            <p className="text-white">{t.bookNow}</p>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-stone-300 bg-white text-stone-700 transition hover:bg-stone-100 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <div
        id="mobile-navigation"
        className={cn(
          "border-t border-stone-200 bg-white md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <Container className="flex flex-col gap-5 py-6">
          <nav className="flex flex-col gap-4" aria-label="Mobile primary">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-stone-700 transition-colors hover:text-stone-900"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="inline-flex rounded-lg border border-stone-200 bg-white p-1">
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={cn(
                  "rounded-lg px-3 py-1 text-xs font-semibold transition",
                  language === "en"
                    ? "bg-stone-800 text-white"
                    : "text-stone-600 hover:bg-stone-100",
                )}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage("th")}
                className={cn(
                  "rounded-lg px-3 py-1 text-xs font-semibold transition",
                  language === "th"
                    ? "bg-stone-800 text-white"
                    : "text-stone-600 hover:bg-stone-100",
                )}
              >
                TH
              </button>
            </div>
            <Button href={site.phoneHref} variant="ghost" className="w-full">
              {t.call} {site.phoneDisplay}
            </Button>
            <Button href="#pricing" variant="secondary" className="w-full">
              {t.viewServices}
            </Button>
            <Button href="#cta" className="w-full">
              {t.bookNow}
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
