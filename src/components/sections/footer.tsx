"use client";

import { Container } from "@/components/ui/container";
import { getSectionText, getSiteContent } from "@/content/site";
import { useLanguage } from "@/hooks/use-language";

export function Footer() {
  const { language } = useLanguage();
  const { footerGroups, navigationLinks, site } = getSiteContent(language);
  const t = getSectionText(language).footer;

  return (
    <footer className="border-t border-stone-200 py-12">
      <Container className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
        <div>
          <a href="#top" className="inline-flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-[#556b2f] via-[#6f4e37] to-[#8b5e3c] font-semibold text-white">
              N
            </span>
            <span className="text-base font-semibold text-stone-900">
              {site.name}
            </span>
          </a>
          <p className="mt-4 max-w-md text-sm leading-7 text-stone-600">
            {t.desc}
          </p>
          <a
            href={site.phoneHref}
            className="mt-4 inline-flex rounded-lg border border-[#cfd8b8] bg-[#edf2e3] px-4 py-2 text-sm font-semibold text-[#556b2f] transition-colors hover:bg-[#e4ebd5]"
          >
            {t.call}
          </a>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <p className="text-sm font-semibold text-stone-900">
                {group.title}
              </p>
              <ul className="mt-4 space-y-3 text-sm text-stone-600">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="transition-colors hover:text-stone-900"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <Container className="mt-10 flex flex-col gap-4 border-t border-stone-200 pt-8 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between">
        <p>{t.rights}</p>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-4">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-stone-800"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
