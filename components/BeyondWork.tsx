"use client";

import { useApp } from "@/lib/app-context";
import { beyondItems } from "@/lib/content/site";
import { IconGrid } from "@/components/IconGrid";
import { BeyondGlyph } from "@/components/GridGlyphs";

export function BeyondWork() {
  const { t, lang } = useApp();

  return (
    <IconGrid
      id="beyond"
      label={t.beyond.label}
      title={t.beyond.title}
      items={beyondItems}
      lang={lang}
      renderIcon={(id) => <BeyondGlyph id={id} />}
    />
  );
}
