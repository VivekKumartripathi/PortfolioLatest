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

export const metadata = {
  title: "Vivek Kumar - API Integration & HubSpot CRM Engineer | AI-ML Automation | Full-Stack",
  description:
    "Vivek Kumar — Software Developer building API integrations, HubSpot CRM sync pipelines and queue-based backend systems with .NET, Python, Node.js and Next.js.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }) {
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
