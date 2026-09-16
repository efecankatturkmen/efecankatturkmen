"use client";

import { useApp } from "@/lib/app-context";
import {
  stackCategories,
  type SkillRarity,
} from "@/lib/content/site";
import { StackGlyph } from "@/components/GridGlyphs";

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

export function Stack() {
  const { t, lang } = useApp();

  return (
    <section id="stack" className="pf-section pf-section--alt">
      <div className="pf-section__head">
        <span className="pf-eyebrow">{t.stack.label}</span>
        <h2 className="pf-section__title">{t.stack.title}</h2>
      </div>

      <div className="pf-rarity-legend" aria-label={t.stack.rarityLegend}>
        <span className="pf-rarity-legend__label">{t.stack.rarityLegend}:</span>
        <div className="pf-rarity-legend__items">
          {RARITY_ORDER.map((key) => (
            <span key={key} className={`pf-rarity ${rarityClass(key)}`}>
              {t.stack.rarity[key]}
            </span>
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
                  <span className={`pf-rarity ${rarityClass(skill.rarity)}`}>
                    {t.stack.rarity[skill.rarity]}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
