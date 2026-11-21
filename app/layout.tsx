import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { themeInitScript } from "@/components/theme";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const SITE_URL = "https://vivektripathi.netlify.app";
const TITLE = "Vivek Kumar - API Integration & HubSpot CRM Engineer | AI-ML Automation | Full-Stack";
const DESCRIPTION =
  "Vivek Kumar — Software Developer building API integrations, HubSpot CRM sync pipelines and queue-based backend systems — primarily C# / ASP.NET Core Web APIs, plus Python, Node.js and Next.js.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  icons: { icon: "/favicon.svg" },
  // Link previews on LinkedIn, Slack, WhatsApp, X, etc.
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Vivek Kumar — Portfolio",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/og-portfolio.png", width: 1200, height: 630, alt: "Vivek Kumar — API Integration & HubSpot CRM Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-portfolio.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    // Font variables go on <html> so the :root tokens in globals.css can read them.
    // suppressHydrationWarning: the inline script may set data-theme before React hydrates.
    <html lang="en" className={`${manrope.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
