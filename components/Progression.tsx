"use client";

import { useApp } from "@/lib/app-context";
import { milestones } from "@/lib/content/site";
import { MissionTimeline } from "@/components/MissionTimeline";

export function Progression() {
  const { t } = useApp();

  return (
    <section id="progression" className="pf-section pf-section--alt">
      <div className="pf-section__head">
        <span className="pf-eyebrow">{t.progression.label}</span>
        <h2 className="pf-section__title">{t.progression.title}</h2>
      </div>

      <MissionTimeline items={milestones} youAreHereId="bu-its" />
    </section>
  );
}
