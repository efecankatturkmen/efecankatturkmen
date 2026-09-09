"use client";

import { ArrowRight, Github, Instagram, Linkedin, Mail } from "lucide-react";
import { useApp } from "@/lib/app-context";
import { personalInfo } from "@/lib/content/site";

const HEART_PIXELS = Array.from({ length: 64 }, (_, i) => i);

export function Hero() {
  const { theme, t } = useApp();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="pf-hero">
      {theme === "pixel" && <div className="pf-scanlines" aria-hidden />}
      {theme === "pixel" && <div className="pf-pixel-grid" aria-hidden />}
      {theme === "elegant" && <div className="pf-elegant-glow" aria-hidden />}

      <div className="pf-hero__inner">
        <p className="pf-hero__greet">{t.hero.greeting}</p>
        <h1 className="pf-hero__title">
          {personalInfo.name}
          <span className="pf-caret" aria-hidden>
            |
          </span>
        </h1>
        <p className="pf-hero__role">{t.hero.role}</p>
        <p className="pf-hero__tag">{t.hero.tagline}</p>

        <div className="pf-hero__ctas">
          <button
            type="button"
            className="pf-btn pf-btn--primary"
            onClick={() => scrollTo("projects")}
          >
            {theme === "pixel" ? `▶ ${t.hero.pressStart}` : t.hero.cta1}
            <ArrowRight size={16} />
          </button>
          <button
            type="button"
            className="pf-btn pf-btn--ghost"
            onClick={() => scrollTo("contact")}
          >
            <Mail size={16} />
            {t.hero.cta2}
          </button>
        </div>

        <div className="pf-hero__socials">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={personalInfo.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a href={personalInfo.socials.email} aria-label="Email">
            <Mail size={20} />
          </a>
        </div>

        {theme === "pixel" && (
          <div className="pf-pixel-sprite" aria-hidden>
            <div className="pf-sprite">
              {HEART_PIXELS.map((i) => (
                <span key={i} className={`px px-${i}`} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
