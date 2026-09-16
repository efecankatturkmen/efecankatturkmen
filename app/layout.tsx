import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Manrope,
  Orbitron,
  Press_Start_2P,
  Space_Grotesk,
  VT323,
} from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const pressStart = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-press-start",
  display: "swap",
});

const vt323 = VT323({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-vt323",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cankat T. | Front-End Web & Mobile Developer",
  description:
    "Portfolio of Efe Cankat Türkmen — Front-End Web & Mobile Developer. Flutter, React, Firebase, and AI automations.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="elegant"
      data-mode="dark"
      className={`${manrope.variable} ${cormorant.variable} ${pressStart.variable} ${vt323.variable} ${spaceGrotesk.variable} ${orbitron.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('pf.theme')||'elegant';var m=localStorage.getItem('pf.mode')||'dark';var l=localStorage.getItem('pf.lang')||'en';var r=document.documentElement;r.dataset.theme=t;r.dataset.mode=m;r.dataset.lang=l;}catch(e){}})();`,
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
:root[data-theme="elegant"] {
  --pf-font-body: var(--font-manrope), system-ui, sans-serif;
  --pf-font-display: var(--font-cormorant), 'Times New Roman', serif;
}
:root[data-theme="pixel"] {
  --pf-font-body: var(--font-vt323), monospace;
  --pf-font-display: var(--font-press-start), monospace;
}
:root[data-theme="ai"] {
  --pf-font-body: var(--font-space-grotesk), system-ui, sans-serif;
  --pf-font-display: var(--font-orbitron), system-ui, sans-serif;
}
`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
