"use client";

import { useApp } from "@/lib/app-context";
import { EctMarkElegant, EctMarkPixel } from "@/components/EctMarks";

export function About() {
  const { theme, t } = useApp();

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
        </div>
      </div>
    </section>
  );
}
