"use client";

import type { ReactNode } from "react";
import type { Lang } from "@/lib/content/site";
import type { GridItem } from "@/lib/content/site";

interface IconGridProps {
  id: string;
  label: string;
  title: string;
  items: GridItem[];
  lang: Lang;
  alt?: boolean;
  renderIcon: (id: string) => ReactNode;
}

export function IconGrid({
  id,
  label,
  title,
  items,
  lang,
  alt = false,
  renderIcon,
}: IconGridProps) {
  return (
    <section
      id={id}
      className={`pf-section ${alt ? "pf-section--alt" : ""}`}
    >
      <div className="pf-section__head">
        <span className="pf-eyebrow">{label}</span>
        <h2 className="pf-section__title">{title}</h2>
      </div>
      <div className="pf-icon-grid">
        {items.map((item) => (
          <div key={item.id} className="pf-icon-card">
            <div className="pf-icon-card__icon">{renderIcon(item.id)}</div>
            <div className="pf-icon-card__label">{item.label[lang]}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
