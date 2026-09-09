"use client";

import { useToast } from "@/hooks/use-toast";

export function Toaster() {
  const { toasts, dismiss } = useToast();

  if (!toasts.length) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 100,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        maxWidth: 360,
      }}
    >
      {toasts.map((t) => (
        <button
          key={t.id}
          type="button"
          onClick={() => dismiss(t.id)}
          style={{
            textAlign: "left",
            padding: "14px 16px",
            borderRadius: "var(--pf-radius)",
            border: "1px solid var(--pf-border)",
            background:
              t.variant === "destructive"
                ? "color-mix(in oklab, #ef4444 20%, var(--pf-bg-2))"
                : "var(--pf-bg-2)",
            color: "var(--pf-fg)",
            boxShadow: "var(--pf-shadow)",
            cursor: "pointer",
            fontFamily: "inherit",
            fontSize: 14,
          }}
        >
          {t.title}
        </button>
      ))}
    </div>
  );
}
