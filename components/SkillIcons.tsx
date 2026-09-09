"use client";

import { useApp } from "@/lib/app-context";

type SkillKey =
  | "flutter"
  | "react"
  | "dotnet"
  | "firebase"
  | "uiux"
  | "ai";

const SKILL_KEYS: SkillKey[] = [
  "flutter",
  "react",
  "dotnet",
  "firebase",
  "uiux",
  "ai",
];

function ElegantIcon({ skill }: { skill: SkillKey }) {
  switch (skill) {
    case "flutter":
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden>
          <path
            fill="currentColor"
            d="M14.314 0 4.5 9.814l3.186 3.186L20.686 0zM4.5 14.186 14.314 24H20.7l-9.814-9.814zm9.814-3.186 3.186 3.186L20.7 11.0h-6.386z"
          />
        </svg>
      );
    case "react":
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden>
          <circle cx="12" cy="12" r="2.2" fill="currentColor" />
          <g fill="none" stroke="currentColor" strokeWidth="1.4">
            <ellipse cx="12" cy="12" rx="10" ry="4.2" />
            <ellipse
              cx="12"
              cy="12"
              rx="10"
              ry="4.2"
              transform="rotate(60 12 12)"
            />
            <ellipse
              cx="12"
              cy="12"
              rx="10"
              ry="4.2"
              transform="rotate(120 12 12)"
            />
          </g>
        </svg>
      );
    case "dotnet":
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden>
          <rect
            x="2"
            y="2"
            width="20"
            height="20"
            rx="4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <text
            x="12"
            y="16"
            textAnchor="middle"
            fontSize="11"
            fontWeight="700"
            fill="currentColor"
            fontFamily="system-ui, sans-serif"
          >
            C#
          </text>
        </svg>
      );
    case "firebase":
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden>
          <path
            fill="currentColor"
            d="M5.2 17.6 7.1 4.8c.1-.7.9-.9 1.3-.3l2.5 3.9 3.1-5.9c.3-.6 1.2-.4 1.3.3L18.8 19.2 12 22.4z"
          />
          <path
            fill="currentColor"
            opacity="0.55"
            d="M5.2 17.6 12 22.4l6.8-3.2-2.9-13.4-3.4 6.5z"
          />
        </svg>
      );
    case "uiux":
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden>
          <circle cx="8" cy="9" r="3.2" fill="currentColor" />
          <circle cx="16.5" cy="7.5" r="2.4" fill="currentColor" opacity="0.75" />
          <circle cx="15.5" cy="15" r="3" fill="currentColor" opacity="0.55" />
          <path
            d="M4 19.5c1.8-2.4 4-3.6 6.5-3.6 1.4 0 2.6.3 3.6.9"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "ai":
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden>
          <rect
            x="5"
            y="7"
            width="14"
            height="11"
            rx="3"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <circle cx="9.2" cy="12.2" r="1.3" fill="currentColor" />
          <circle cx="14.8" cy="12.2" r="1.3" fill="currentColor" />
          <path
            d="M9 16h6M12 4v3M8 5.5 9.5 7M16 5.5 14.5 7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    default: {
      const _exhaustive: never = skill;
      return _exhaustive;
    }
  }
}

/** 16×16 crisp pixel glyphs */
function PixelIcon({ skill }: { skill: SkillKey }) {
  const c = "currentColor";
  switch (skill) {
    case "flutter":
      return (
        <svg
          viewBox="0 0 16 16"
          width="22"
          height="22"
          shapeRendering="crispEdges"
          aria-hidden
        >
          <rect x="2" y="2" width="4" height="2" fill={c} />
          <rect x="4" y="4" width="4" height="2" fill={c} />
          <rect x="6" y="6" width="4" height="2" fill={c} />
          <rect x="4" y="8" width="4" height="2" fill={c} />
          <rect x="2" y="10" width="4" height="2" fill={c} />
          <rect x="8" y="6" width="6" height="2" fill={c} />
          <rect x="8" y="8" width="4" height="2" fill={c} />
          <rect x="8" y="10" width="2" height="2" fill={c} />
        </svg>
      );
    case "react":
      return (
        <svg
          viewBox="0 0 16 16"
          width="22"
          height="22"
          shapeRendering="crispEdges"
          aria-hidden
        >
          <rect x="7" y="7" width="2" height="2" fill={c} />
          <rect x="3" y="4" width="2" height="2" fill={c} />
          <rect x="11" y="4" width="2" height="2" fill={c} />
          <rect x="1" y="7" width="2" height="2" fill={c} />
          <rect x="13" y="7" width="2" height="2" fill={c} />
          <rect x="3" y="10" width="2" height="2" fill={c} />
          <rect x="11" y="10" width="2" height="2" fill={c} />
          <rect x="7" y="2" width="2" height="2" fill={c} />
          <rect x="7" y="12" width="2" height="2" fill={c} />
          <rect x="5" y="5" width="2" height="2" fill={c} />
          <rect x="9" y="5" width="2" height="2" fill={c} />
          <rect x="5" y="9" width="2" height="2" fill={c} />
          <rect x="9" y="9" width="2" height="2" fill={c} />
        </svg>
      );
    case "dotnet":
      return (
        <svg
          viewBox="0 0 16 16"
          width="22"
          height="22"
          shapeRendering="crispEdges"
          aria-hidden
        >
          <rect x="2" y="2" width="12" height="2" fill={c} />
          <rect x="2" y="12" width="12" height="2" fill={c} />
          <rect x="2" y="2" width="2" height="12" fill={c} />
          <rect x="12" y="2" width="2" height="12" fill={c} />
          <rect x="5" y="5" width="2" height="6" fill={c} />
          <rect x="9" y="5" width="2" height="6" fill={c} />
          <rect x="5" y="7" width="6" height="2" fill={c} />
          <rect x="11" y="5" width="2" height="2" fill={c} />
          <rect x="11" y="9" width="2" height="2" fill={c} />
        </svg>
      );
    case "firebase":
      return (
        <svg
          viewBox="0 0 16 16"
          width="22"
          height="22"
          shapeRendering="crispEdges"
          aria-hidden
        >
          <rect x="7" y="1" width="2" height="2" fill={c} />
          <rect x="6" y="3" width="4" height="2" fill={c} />
          <rect x="5" y="5" width="6" height="2" fill={c} />
          <rect x="4" y="7" width="8" height="2" fill={c} />
          <rect x="3" y="9" width="10" height="2" fill={c} />
          <rect x="2" y="11" width="12" height="2" fill={c} />
          <rect x="3" y="13" width="10" height="2" fill={c} />
        </svg>
      );
    case "uiux":
      return (
        <svg
          viewBox="0 0 16 16"
          width="22"
          height="22"
          shapeRendering="crispEdges"
          aria-hidden
        >
          <rect x="2" y="3" width="4" height="4" fill={c} />
          <rect x="9" y="2" width="4" height="4" fill={c} />
          <rect x="7" y="8" width="5" height="5" fill={c} />
          <rect x="3" y="11" width="3" height="2" fill={c} />
        </svg>
      );
    case "ai":
      return (
        <svg
          viewBox="0 0 16 16"
          width="22"
          height="22"
          shapeRendering="crispEdges"
          aria-hidden
        >
          <rect x="7" y="1" width="2" height="2" fill={c} />
          <rect x="4" y="3" width="8" height="2" fill={c} />
          <rect x="3" y="5" width="10" height="8" fill={c} />
          <rect x="5" y="7" width="2" height="2" fill="var(--pf-bg)" />
          <rect x="9" y="7" width="2" height="2" fill="var(--pf-bg)" />
          <rect x="5" y="11" width="6" height="1" fill="var(--pf-bg)" />
        </svg>
      );
    default: {
      const _exhaustive: never = skill;
      return _exhaustive;
    }
  }
}

export function SkillIcon({ index }: { index: number }) {
  const { theme } = useApp();
  const skill = SKILL_KEYS[index % SKILL_KEYS.length]!;

  if (theme === "pixel") {
    return <PixelIcon skill={skill} />;
  }
  return <ElegantIcon skill={skill} />;
}
