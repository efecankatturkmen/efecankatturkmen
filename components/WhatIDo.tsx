"use client";

import {
  Bot,
  CodeXml,
  Database,
  Palette,
  Server,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { useApp } from "@/lib/app-context";

const ICONS: LucideIcon[] = [
  Smartphone,
  CodeXml,
  Server,
  Database,
  Palette,
  Bot,
];

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
        {t.whatIDo.skills.map((s, i) => {
          const Icon = ICONS[i % ICONS.length]!;
          return (
            <div
              key={s.name}
              className="pf-skill"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="pf-skill__icon">
                <Icon size={22} />
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
          );
        })}
      </div>
    </section>
  );
}
