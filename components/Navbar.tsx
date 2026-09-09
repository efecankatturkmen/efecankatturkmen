"use client";

import { useEffect, useState } from "react";
import {
  Gamepad2,
  Languages,
  Menu,
  Moon,
  Sparkles,
  Sun,
  X,
} from "lucide-react";
import { useApp } from "@/lib/app-context";
import { personalInfo } from "@/lib/content/site";

const SECTIONS = ["about", "what-i-do", "projects", "contact"] as const;

export function Navbar() {
  const { theme, toggleTheme, mode, toggleMode, lang, toggleLang, t } =
    useApp();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const labels: Record<(typeof SECTIONS)[number], string> = {
    about: t.nav.about,
    "what-i-do": t.nav.whatIDo,
    projects: t.nav.projects,
    contact: t.nav.contact,
  };

  return (
    <header className={`pf-nav ${scrolled ? "pf-nav--scrolled" : ""}`}>
      <div className="pf-nav__inner">
        <button
          type="button"
          className="pf-logo"
          onClick={() => scrollTo("home")}
          aria-label="Home"
        >
          <span className="pf-logo__mark">CT</span>
          <span className="pf-logo__text">{personalInfo.shortName}</span>
        </button>

        <nav className="pf-nav__links" aria-label="Primary">
          {SECTIONS.map((id) => (
            <button
              key={id}
              type="button"
              className="pf-navlink"
              onClick={() => scrollTo(id)}
            >
              {labels[id]}
            </button>
          ))}
          <a
            className="pf-navlink"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.nav.resume}
          </a>
        </nav>

        <div className="pf-nav__actions">
          <button
            type="button"
            className="pf-iconbtn"
            onClick={toggleTheme}
            aria-label="Toggle theme style"
          >
            {theme === "elegant" ? <Gamepad2 size={16} /> : <Sparkles size={16} />}
            <span className="pf-iconbtn__label">
              {theme === "elegant" ? t.themeSwitch.pixel : t.themeSwitch.elegant}
            </span>
          </button>
          <button
            type="button"
            className="pf-iconbtn"
            onClick={toggleMode}
            aria-label="Toggle color mode"
          >
            {mode === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            <span className="pf-iconbtn__label">
              {mode === "dark" ? t.themeSwitch.light : t.themeSwitch.dark}
            </span>
          </button>
          <button
            type="button"
            className="pf-iconbtn"
            onClick={toggleLang}
            aria-label="Toggle language"
          >
            <Languages size={16} />
            <span className="pf-iconbtn__label">{lang.toUpperCase()}</span>
          </button>
          <button
            type="button"
            className="pf-iconbtn pf-mobile-only"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="pf-mobile-menu">
          {SECTIONS.map((id) => (
            <button
              key={id}
              type="button"
              className="pf-mobile-menu__link"
              onClick={() => scrollTo(id)}
            >
              {labels[id]}
            </button>
          ))}
          <a
            className="pf-mobile-menu__link"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.nav.resume}
          </a>
        </div>
      )}
    </header>
  );
}
