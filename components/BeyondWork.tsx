"use client";

import { Users } from "lucide-react";
import { useApp } from "@/lib/app-context";
import { beyondItems, beyondMilestones } from "@/lib/content/site";
import { BeyondGlyph } from "@/components/GridGlyphs";
import { MissionTimeline } from "@/components/MissionTimeline";

export function BeyondWork() {
  const { t, lang } = useApp();

  return (
    <section id="beyond" className="pf-section">
      <div className="pf-section__head">
        <span className="pf-eyebrow">{t.beyond.label}</span>
        <h2 className="pf-section__title">{t.beyond.title}</h2>
      </div>

      <div className="pf-icon-grid">
        {beyondItems.map((item) => (
          <div key={item.id} className="pf-icon-card">
            <div className="pf-icon-card__icon">
              <BeyondGlyph id={item.id} />
            </div>
            <div className="pf-icon-card__label">{item.label[lang]}</div>
          </div>
        ))}
      </div>

      <div className="pf-beyond-missions">
        <div className="pf-beyond-missions__head">
          <h3 className="pf-beyond-missions__title">
            {t.beyond.milestonesTitle}
          </h3>
          <p className="pf-beyond-missions__sub">{t.beyond.milestonesSub}</p>
        </div>
        <MissionTimeline
          items={beyondMilestones}
          defaultOpenId="leadership"
          dotIcon={<Users size={12} />}
        />
      </div>
    </section>
  );
}
