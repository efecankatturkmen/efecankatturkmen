"use client";

/** Elegant ECT with a gold arc that rotates around the mark. */
export function EctMarkElegant() {
  return (
    <div className="pf-ect pf-ect--elegant" aria-hidden>
      <svg
        className="pf-ect__svg"
        viewBox="0 0 512 512"
        role="img"
        focusable="false"
      >
        <rect width="512" height="512" rx="28" fill="var(--pf-ect-bg, #121212)" />
        <g>
          <circle
            className="pf-ect__arc"
            cx="256"
            cy="256"
            r="168"
            fill="none"
            stroke="var(--pf-accent)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="640 420"
            pathLength="1060"
          >
            {/* SMIL is more reliable than CSS transform on SVG <g> (avoids stuck spins) */}
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 256 256"
              to="360 256 256"
              dur="18s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
        <text
          x="256"
          y="286"
          textAnchor="middle"
          className="pf-ect__letters"
        >
          <tspan fill="var(--pf-fg)">E</tspan>
          <tspan fill="var(--pf-accent)">C</tspan>
          <tspan fill="var(--pf-fg)">T</tspan>
        </text>
      </svg>
    </div>
  );
}

/** Pixel ECT with a diamond frame whose accents orbit. */
export function EctMarkPixel() {
  return (
    <div className="pf-ect pf-ect--pixel" aria-hidden>
      <svg
        className="pf-ect__svg"
        viewBox="0 0 512 512"
        role="img"
        focusable="false"
        shapeRendering="crispEdges"
      >
        <rect width="512" height="512" fill="var(--pf-ect-bg, #0f0d1a)" />
        <g>
          <g>
            <polygon
              points="256,48 464,256 256,464 48,256"
              fill="none"
              stroke="var(--pf-border)"
              strokeWidth="6"
            />
            <polygon
              points="256,48 464,256 256,464 48,256"
              fill="none"
              stroke="var(--pf-accent-2, #ff5edb)"
              strokeWidth="6"
              strokeDasharray="180 700"
              strokeDashoffset="0"
            />
            <polygon
              points="256,48 464,256 256,464 48,256"
              fill="none"
              stroke="var(--pf-accent)"
              strokeWidth="6"
              strokeDasharray="180 700"
              strokeDashoffset="440"
            />
            <rect
              x="118"
              y="118"
              width="18"
              height="18"
              fill="var(--pf-accent-2, #ff5edb)"
            />
            <rect x="376" y="376" width="18" height="18" fill="var(--pf-accent)" />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 256 256"
              to="360 256 256"
              dur="10s"
              repeatCount="indefinite"
            />
          </g>
        </g>
        <text
          x="256"
          y="292"
          textAnchor="middle"
          className="pf-ect__letters pf-ect__letters--pixel"
        >
          <tspan fill="var(--pf-fg)">E</tspan>
          <tspan fill="var(--pf-accent)">C</tspan>
          <tspan fill="var(--pf-fg)">T</tspan>
        </text>
      </svg>
    </div>
  );
}
