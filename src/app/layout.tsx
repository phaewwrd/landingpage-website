import type { Metadata } from "next";
import type { ReactNode } from "react";

import { site } from "@/content/site";
import { LanguageProvider } from "@/hooks/use-language";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Premium Salon Landing Page`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: ["Salon", "Hair", "Landing page", "Next.js", "Tailwind CSS"],
  metadataBase: new URL(site.url),
  openGraph: {
    title: `${site.name} | Premium Salon Landing Page`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Premium Salon Landing Page`,
    description: site.description,
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
