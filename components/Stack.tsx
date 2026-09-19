"use client";

import type { ReactNode } from "react";
import { useApp } from "@/lib/app-context";
import { StackGlyph } from "@/components/GridGlyphs";
import {
  stackCategories,
  type SkillRarity,
} from "@/lib/content/site";

const RARITY_ORDER: SkillRarity[] = [
  "experienced",
  "comfortable",
  "familiar",
  "learning",
];

function rarityClass(rarity: SkillRarity): string {
  switch (rarity) {
    case "experienced":
      return "pf-rarity--experienced";
    case "comfortable":
      return "pf-rarity--comfortable";
    case "familiar":
      return "pf-rarity--familiar";
    case "learning":
      return "pf-rarity--learning";
    default: {
      const _exhaustive: never = rarity;
      return _exhaustive;
    }
  }
}

function SketchCorner({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 22 22" aria-hidden>
      <path
        d="M11.2 3.2c-3.1.3-4.8 2.2-4.2 4.4.5 1.7 2 2.1 3 .6.8-1.2-.4-2.2-1.5-1.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
      <path
        d="M10.4 8.6H22M8.8 9.4V22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
    </svg>
  );
}

function RarityBadge({
  elegant,
  className,
  children,
}: {
  elegant: boolean;
  className: string;
  children: ReactNode;
}) {
  if (!elegant) {
    return <span className={`pf-rarity ${className}`}>{children}</span>;
  }

  return (
    <span className={`pf-sketch ${className}`}>
      <SketchCorner className="pf-sketch__c pf-sketch__c--tl" />
      <SketchCorner className="pf-sketch__c pf-sketch__c--tr" />
      <SketchCorner className="pf-sketch__c pf-sketch__c--bl" />
      <SketchCorner className="pf-sketch__c pf-sketch__c--br" />
      <span className="pf-sketch__edge pf-sketch__edge--top" />
      <span className="pf-sketch__edge pf-sketch__edge--right" />
      <span className="pf-sketch__edge pf-sketch__edge--bottom" />
      <span className="pf-sketch__edge pf-sketch__edge--left" />
      <span className="pf-sketch__text">{children}</span>
    </span>
  );
}

export function Stack() {
  const { t, lang, theme } = useApp();
  const elegant = theme === "elegant";

  return (
    <section id="toolkit" className="pf-section pf-section--alt">
      <div className="pf-section__head">
        <span className="pf-eyebrow">{t.stack.label}</span>
        <h2 className="pf-section__title">{t.stack.title}</h2>
        <p className="pf-section__sub">{t.stack.subtitle}</p>
      </div>

      <div className="pf-rarity-legend" aria-label={t.stack.rarityLegend}>
        <span className="pf-rarity-legend__label">{t.stack.rarityLegend}:</span>
        <div className="pf-rarity-legend__items">
          {RARITY_ORDER.map((key) => (
            <RarityBadge key={key} elegant={elegant} className={rarityClass(key)}>
              {t.stack.rarity[key]}
            </RarityBadge>
          ))}
        </div>
      </div>

      <div className="pf-stack-cats">
        {stackCategories.map((cat) => (
          <article key={cat.id} className="pf-stack-cat">
            <header className="pf-stack-cat__head">
              <div className="pf-stack-cat__icon">
                <StackGlyph id={cat.iconId} />
              </div>
              <h3 className="pf-stack-cat__title">{cat.title[lang]}</h3>
              <span className="pf-stack-cat__count">x{cat.skills.length}</span>
            </header>
            <ul className="pf-stack-cat__list">
              {cat.skills.map((skill) => (
                <li key={skill.id} className="pf-stack-cat__row">
                  <span className="pf-stack-cat__name">{skill.label[lang]}</span>
                  <RarityBadge
                    elegant={elegant}
                    className={rarityClass(skill.rarity)}
                  >
                    {t.stack.rarity[skill.rarity]}
                  </RarityBadge>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
