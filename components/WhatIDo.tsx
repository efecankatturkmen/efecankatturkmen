"use client";

import { useApp } from "@/lib/app-context";
import { SkillIcon } from "@/components/SkillIcons";

export function WhatIDo() {
  const { t } = useApp();

  return (
    <section id="what-i-do" className="pf-section pf-section--alt">
      <div className="pf-section__head">
        <span className="pf-eyebrow">{t.whatIDo.label}</span>
        <h2 className="pf-section__title">{t.whatIDo.title}</h2>
        <p className="pf-section__sub">{t.whatIDo.subtitle}</p>
      </div>

      <div className="pf-skills">
        {t.whatIDo.skills.map((s, i) => (
          <div
            key={s.name}
            className="pf-skill"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="pf-skill__icon">
              <SkillIcon index={i} />
            </div>
            <h3 className="pf-skill__name">{s.name}</h3>
            <p className="pf-skill__desc">{s.desc}</p>
            <div className="pf-skill__bar">
              <div
                className="pf-skill__fill"
                style={{ width: `${75 + ((i * 7) % 20)}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
