"use client";

import type { ReactNode } from "react";
import { useApp } from "@/lib/app-context";

function PixelBox({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width="28"
      height="28"
      shapeRendering="crispEdges"
      aria-hidden
    >
      {children}
    </svg>
  );
}

const c = "currentColor";

export function StackGlyph({ id }: { id: string }) {
  const { theme } = useApp();
  const pixel = theme === "pixel";

  if (pixel) {
    switch (id) {
      case "flutter":
        return (
          <PixelBox>
            <rect x="2" y="2" width="4" height="2" fill={c} />
            <rect x="4" y="4" width="4" height="2" fill={c} />
            <rect x="6" y="6" width="6" height="2" fill={c} />
            <rect x="4" y="8" width="4" height="2" fill={c} />
            <rect x="2" y="10" width="4" height="2" fill={c} />
            <rect x="8" y="8" width="4" height="2" fill={c} />
          </PixelBox>
        );
      case "react":
        return (
          <PixelBox>
            <rect x="7" y="7" width="2" height="2" fill={c} />
            <rect x="3" y="4" width="2" height="2" fill={c} />
            <rect x="11" y="4" width="2" height="2" fill={c} />
            <rect x="1" y="7" width="2" height="2" fill={c} />
            <rect x="13" y="7" width="2" height="2" fill={c} />
            <rect x="3" y="10" width="2" height="2" fill={c} />
            <rect x="11" y="10" width="2" height="2" fill={c} />
            <rect x="7" y="2" width="2" height="2" fill={c} />
            <rect x="7" y="12" width="2" height="2" fill={c} />
          </PixelBox>
        );
      case "firebase":
        return (
          <PixelBox>
            <rect x="7" y="1" width="2" height="2" fill={c} />
            <rect x="5" y="3" width="6" height="2" fill={c} />
            <rect x="4" y="5" width="8" height="2" fill={c} />
            <rect x="3" y="7" width="10" height="2" fill={c} />
            <rect x="2" y="9" width="12" height="2" fill={c} />
            <rect x="3" y="11" width="10" height="2" fill={c} />
          </PixelBox>
        );
      case "docker":
        return (
          <PixelBox>
            <rect x="2" y="7" width="3" height="3" fill={c} />
            <rect x="6" y="7" width="3" height="3" fill={c} />
            <rect x="10" y="7" width="3" height="3" fill={c} />
            <rect x="6" y="3" width="3" height="3" fill={c} />
            <rect x="1" y="11" width="14" height="2" fill={c} />
          </PixelBox>
        );
      case "git":
        return (
          <PixelBox>
            <rect x="7" y="2" width="2" height="10" fill={c} />
            <rect x="3" y="6" width="10" height="2" fill={c} />
            <rect x="3" y="3" width="2" height="2" fill={c} />
            <rect x="11" y="3" width="2" height="2" fill={c} />
            <rect x="3" y="11" width="2" height="2" fill={c} />
            <rect x="11" y="11" width="2" height="2" fill={c} />
          </PixelBox>
        );
      default:
        return (
          <PixelBox>
            <rect x="3" y="3" width="10" height="2" fill={c} />
            <rect x="3" y="7" width="10" height="2" fill={c} />
            <rect x="3" y="11" width="10" height="2" fill={c} />
            <rect x="3" y="3" width="2" height="10" fill={c} />
            <rect x="11" y="3" width="2" height="10" fill={c} />
          </PixelBox>
        );
    }
  }

  // Elegant: simple monoline / brand-tint glyphs
  switch (id) {
    case "flutter":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
          <path
            fill="currentColor"
            d="M14.314 0 4.5 9.814l3.186 3.186L20.686 0zM4.5 14.186 14.314 24H20.7l-9.814-9.814zm9.814-3.186 3.186 3.186L20.7 11h-6.386z"
          />
        </svg>
      );
    case "dart":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
          <path
            fill="currentColor"
            d="M4.2 12 9 3.5h7.5L21 8.2v7.6L16.5 20.5H9L4.2 12zm5.3-6.8L6.3 12l3.2 6.8h6.2L19 15.5V8.5L15.7 5.2H9.5z"
          />
        </svg>
      );
    case "react":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <g fill="none" stroke="currentColor" strokeWidth="1.4">
            <ellipse cx="12" cy="12" rx="10" ry="4" />
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
          </g>
        </svg>
      );
    case "nextjs":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M8 16V8h2.2l5.3 7.2V8H18v8h-2.1L10.5 8.7V16H8z" fill="currentColor" />
        </svg>
      );
    case "firebase":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
          <path
            fill="currentColor"
            d="M5 18 7.2 4.5c.2-1 1.4-1.2 1.9-.3L12 10l3.2-6.2c.4-.8 1.6-.6 1.8.3L20 18 12 22z"
          />
        </svg>
      );
    case "dotnet":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
          <rect x="3" y="3" width="18" height="18" rx="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="700" fill="currentColor">
            C#
          </text>
        </svg>
      );
    case "javascript":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
          <rect x="2" y="2" width="20" height="20" rx="3" fill="currentColor" opacity="0.15" />
          <text x="12" y="16" textAnchor="middle" fontSize="11" fontWeight="700" fill="currentColor">
            JS
          </text>
        </svg>
      );
    case "typescript":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
          <rect x="2" y="2" width="20" height="20" rx="3" fill="currentColor" opacity="0.15" />
          <text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="700" fill="currentColor">
            TS
          </text>
        </svg>
      );
    case "python":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
          <path
            fill="currentColor"
            d="M12 2c-3 0-5 1.5-5 4v2h8V7c0-2-1.5-3.5-3-4.5C11.3 2.2 11.6 2 12 2zm-7 7v6c0 2.5 2 4.5 5 4.5h1v-3H9V9H5zm14 0h-4v5.5h2V19h2c2.2 0 4-1.8 4-4v-3c0-1.7-1.3-3-2-3z"
          />
        </svg>
      );
    case "laravel":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
          <path
            fill="currentColor"
            fillOpacity="0.9"
            d="M3 7.5 8 5l5 2.5v5L8 15.5 3 13zm8 .8 5-2.5 5 2.5v5l-5 2.5-5-2.5z"
          />
        </svg>
      );
    case "sql":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
          <ellipse cx="12" cy="6" rx="7" ry="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M5 6v8c0 1.7 3.1 3 7 3s7-1.3 7-3V6" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M5 10c0 1.7 3.1 3 7 3s7-1.3 7-3" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "nosql":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
          <circle cx="8" cy="8" r="3" fill="currentColor" />
          <circle cx="16" cy="8" r="3" fill="currentColor" opacity="0.7" />
          <circle cx="12" cy="16" r="3" fill="currentColor" opacity="0.5" />
          <path d="M10.5 9.5 11 14M13.5 9.5 13 14M10 8h4" stroke="currentColor" strokeWidth="1.2" fill="none" />
        </svg>
      );
    case "docker":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
          <rect x="3" y="11" width="4" height="4" fill="currentColor" />
          <rect x="8" y="11" width="4" height="4" fill="currentColor" />
          <rect x="13" y="11" width="4" height="4" fill="currentColor" />
          <rect x="8" y="6" width="4" height="4" fill="currentColor" />
          <path d="M2 16h18c1 2 1 4-2 4H6c-3 0-4-2-4-4z" fill="currentColor" opacity="0.35" />
        </svg>
      );
    case "git":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
          <circle cx="6" cy="6" r="2.2" fill="currentColor" />
          <circle cx="18" cy="6" r="2.2" fill="currentColor" />
          <circle cx="12" cy="18" r="2.2" fill="currentColor" />
          <path d="M6 8v4c0 2 2 4 6 4M18 8v2" stroke="currentColor" strokeWidth="1.6" fill="none" />
        </svg>
      );
    case "graphene":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
          <path
            d="M4 17 12 4l8 13H4z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <circle cx="12" cy="14" r="2" fill="currentColor" />
        </svg>
      );
    case "n8n":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
          <circle cx="6" cy="12" r="3" fill="currentColor" />
          <circle cx="18" cy="7" r="3" fill="currentColor" />
          <circle cx="18" cy="17" r="3" fill="currentColor" />
          <path d="M9 12h5M14 9.5l2-1.2M14 14.5l2 1.2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      );
    case "htmlcss":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
          <path d="M4 4h16l-1.5 14L12 21 5.5 18z" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 9h8M9 13h6" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "vscode":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
          <path
            fill="currentColor"
            d="M17 3 9.5 8.5 5 5.5 3 7v10l2 1.5 4.5-3L17 21l4-2V5z"
          />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
          <rect x="4" y="4" width="16" height="16" rx="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
  }
}

export function BeyondGlyph({ id }: { id: string }) {
  const { theme } = useApp();
  const pixel = theme === "pixel";

  if (pixel) {
    switch (id) {
      case "powerlifting":
        return (
          <PixelBox>
            <rect x="1" y="7" width="14" height="2" fill={c} />
            <rect x="2" y="5" width="2" height="6" fill={c} />
            <rect x="12" y="5" width="2" height="6" fill={c} />
            <rect x="5" y="6" width="2" height="4" fill={c} />
            <rect x="9" y="6" width="2" height="4" fill={c} />
          </PixelBox>
        );
      case "calisthenics":
        return (
          <PixelBox>
            <rect x="7" y="1" width="2" height="2" fill={c} />
            <rect x="7" y="4" width="2" height="5" fill={c} />
            <rect x="3" y="5" width="10" height="2" fill={c} />
            <rect x="5" y="10" width="2" height="5" fill={c} />
            <rect x="9" y="10" width="2" height="5" fill={c} />
          </PixelBox>
        );
      case "dance":
        return (
          <PixelBox>
            <rect x="7" y="1" width="2" height="2" fill={c} />
            <rect x="6" y="4" width="4" height="4" fill={c} />
            <rect x="3" y="6" width="3" height="2" fill={c} />
            <rect x="10" y="7" width="3" height="2" fill={c} />
            <rect x="5" y="9" width="2" height="5" fill={c} />
            <rect x="9" y="9" width="2" height="5" fill={c} />
          </PixelBox>
        );
      case "chess":
        return (
          <PixelBox>
            <rect x="7" y="1" width="2" height="3" fill={c} />
            <rect x="5" y="4" width="6" height="2" fill={c} />
            <rect x="6" y="6" width="4" height="5" fill={c} />
            <rect x="4" y="12" width="8" height="3" fill={c} />
          </PixelBox>
        );
      case "basketball":
      case "volleyball":
      case "football":
        return (
          <PixelBox>
            <rect x="5" y="2" width="6" height="2" fill={c} />
            <rect x="3" y="4" width="10" height="2" fill={c} />
            <rect x="2" y="6" width="12" height="4" fill={c} />
            <rect x="3" y="10" width="10" height="2" fill={c} />
            <rect x="5" y="12" width="6" height="2" fill={c} />
            <rect x="7" y="2" width="2" height="12" fill={c} />
          </PixelBox>
        );
      case "lol":
      case "marvelrivals":
      case "valorant":
        return (
          <PixelBox>
            <rect x="6" y="1" width="4" height="2" fill={c} />
            <rect x="4" y="3" width="8" height="2" fill={c} />
            <rect x="3" y="5" width="10" height="6" fill={c} />
            <rect x="5" y="12" width="6" height="3" fill={c} />
          </PixelBox>
        );
      case "travel":
        return (
          <PixelBox>
            <rect x="7" y="1" width="2" height="2" fill={c} />
            <rect x="5" y="3" width="6" height="2" fill={c} />
            <rect x="3" y="5" width="10" height="2" fill={c} />
            <rect x="1" y="7" width="14" height="2" fill={c} />
            <rect x="4" y="10" width="2" height="4" fill={c} />
            <rect x="10" y="10" width="2" height="4" fill={c} />
          </PixelBox>
        );
      case "vlogs":
        return (
          <PixelBox>
            <rect x="2" y="4" width="9" height="8" fill={c} />
            <rect x="12" y="6" width="3" height="4" fill={c} />
          </PixelBox>
        );
      case "creator":
        return (
          <PixelBox>
            <rect x="5" y="1" width="6" height="14" fill={c} />
            <rect x="7" y="5" width="2" height="4" fill="#0a0a0a" opacity="0.35" />
            <rect x="7" y="12" width="2" height="1" fill="#0a0a0a" opacity="0.35" />
          </PixelBox>
        );
      default:
        return (
          <PixelBox>
            <rect x="3" y="3" width="10" height="2" fill={c} />
            <rect x="3" y="7" width="10" height="2" fill={c} />
            <rect x="3" y="11" width="10" height="2" fill={c} />
          </PixelBox>
        );
    }
  }

  switch (id) {
    case "powerlifting":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            d="M3 12h18M6 8v8M18 8v8M8 10v4M16 10v4"
            strokeLinecap="round"
          />
        </svg>
      );
    case "calisthenics":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
          <circle cx="12" cy="5" r="2" fill="currentColor" />
          <path
            d="M12 7v5M8 10l4 2 4-2M10 20 12 12l2 8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "dance":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
          <circle cx="12" cy="4.5" r="2" fill="currentColor" />
          <path
            d="M12 7v4M9 21l3-10 3 10M7 12l5-1 5 3"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "chess":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
          <path
            fill="currentColor"
            d="M10 3h4v2h-1v2h3l-1 3h-6l-1-3h3V5h-1zm-3 9h10l1 8H6z"
          />
        </svg>
      );
    case "basketball":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 3v18M3 12h18M6 6c3 3 9 3 12 0M6 18c3-3 9-3 12 0" fill="none" stroke="currentColor" strokeWidth="1.3" />
        </svg>
      );
    case "volleyball":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M7 5c4 3 6 8 6 14M17 5c-2 4-2 9 1 14M4 13c5-1 10-1 16 2" fill="none" stroke="currentColor" strokeWidth="1.3" />
        </svg>
      );
    case "football":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 8l3 2-1 3h-4l-1-3zm-3 5 1 3 2 1m4-4-1 3-2 1" fill="none" stroke="currentColor" strokeWidth="1.3" />
        </svg>
      );
    case "lol":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
          <path d="M6 4v16h4V8h8V4zm0 0L4 8m14-4 2 4" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="12" cy="14" r="2" fill="currentColor" />
        </svg>
      );
    case "marvelrivals":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
          <path d="M4 19 8 5h3l2 8 2-8h3l4 14h-3l-2-8-2 8h-3l-2-8-2 8z" fill="currentColor" />
        </svg>
      );
    case "valorant":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
          <path d="M4 19 12 4l8 15h-4L12 10 8 19z" fill="currentColor" />
        </svg>
      );
    case "travel":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
          <path
            d="M3 11h7l2-6 2 6h7l-5.5 4 2 7L12 17l-5.5 5 2-7z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "vlogs":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
          <rect x="3" y="6" width="14" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M17 10l4-2v8l-4-2z" fill="currentColor" />
        </svg>
      );
    case "creator":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
          <rect x="7" y="2" width="10" height="20" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="19" r="1" fill="currentColor" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
          <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
  }
}
