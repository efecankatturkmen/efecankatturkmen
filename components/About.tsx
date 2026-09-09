"use client";

import { Briefcase } from "lucide-react";
import { useApp } from "@/lib/app-context";
import { experience } from "@/lib/content/site";
import { EctMarkElegant, EctMarkPixel } from "@/components/EctMarks";

export function About() {
  const { theme, lang, t } = useApp();

  return (
    <section id="about" className="pf-section">
      <div className="pf-section__head">
        <span className="pf-eyebrow">{t.about.label}</span>
        <h2 className="pf-section__title">{t.about.title}</h2>
      </div>

      <div className="pf-about__grid">
        <div className="pf-about__card">
          {theme === "pixel" ? <EctMarkPixel /> : <EctMarkElegant />}
        </div>

        <div className="pf-about__text">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>

          <div className="pf-stats">
            {t.about.stats.map((s) => (
              <div key={s.label} className="pf-stat">
                <div className="pf-stat__value">{s.value}</div>
                <div className="pf-stat__label">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="pf-timeline">
            {experience.map((e) => (
              <div key={e.company + e.year} className="pf-timeline__item">
                <div className="pf-timeline__dot">
                  <Briefcase size={12} />
                </div>
                <div className="pf-timeline__body">
                  <div className="pf-timeline__year">{e.year}</div>
                  <div className="pf-timeline__role">{e.role[lang]}</div>
                  <div className="pf-timeline__co">{e.company}</div>
                  <p className="pf-timeline__desc">{e.desc[lang]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
