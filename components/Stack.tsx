"use client";

import { useApp } from "@/lib/app-context";
import { stackItems } from "@/lib/content/site";
import { IconGrid } from "@/components/IconGrid";
import { StackGlyph } from "@/components/GridGlyphs";

export function Stack() {
  const { t, lang } = useApp();

  return (
    <IconGrid
      id="stack"
      label={t.stack.label}
      title={t.stack.title}
      items={stackItems}
      lang={lang}
      alt
      renderIcon={(id) => <StackGlyph id={id} />}
    />
  );
}
