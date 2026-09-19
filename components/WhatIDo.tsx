"use client";

import { useApp } from "@/lib/app-context";

export function WhatIDo() {
  const { t } = useApp();

  return (
    <section id="capabilities" className="pf-section pf-section--alt">
      <div className="pf-section__head">
        <span className="pf-eyebrow">{t.whatIDo.label}</span>
        <h2 className="pf-section__title">{t.whatIDo.title}</h2>
      </div>

      <div className="pf-skills">
        {t.whatIDo.skills.map((s, i) => (
          <div
            key={s.name}
            className="pf-skill"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="pf-skill__index">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="pf-skill__name">{s.name}</h3>
            <p className="pf-skill__desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
