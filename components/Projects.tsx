"use client";

import { useEffect, useMemo, useState } from "react";
import {
  BookOpen,
  Bot,
  ChefHat,
  Code2,
  Dumbbell,
  ExternalLink,
  Fish,
  GraduationCap,
  HeartPulse,
  MonitorPlay,
  type LucideIcon,
} from "lucide-react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useApp } from "@/lib/app-context";
import { getDb } from "@/lib/firebase";
import {
  fallbackProjects,
  type ProjectItem,
} from "@/lib/content/site";

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  ChefHat,
  GraduationCap,
  Bot,
  HeartPulse,
  MonitorPlay,
  Code2,
  Dumbbell,
  Fish,
};

const COLORS = [
  "#F59E0B",
  "#EF4444",
  "#10B981",
  "#8B5CF6",
  "#3B82F6",
  "#EC4899",
  "#06B6D4",
];

function categoryFromTech(tech: string[]): string {
  const joined = tech.join(" ").toLowerCase();
  if (joined.includes("flutter") || joined.includes("dart") || joined.includes("mobile")) {
    return "Mobile";
  }
  if (joined.includes("ai") || joined.includes("rag") || joined.includes("n8n")) {
    return "AI";
  }
  return "Web";
}

function mapFirestoreDoc(
  id: string,
  data: Record<string, unknown>,
  index: number,
): ProjectItem {
  const languages = Array.isArray(data.languages)
    ? (data.languages as string[])
    : typeof data.languages === "string"
      ? (data.languages as string).split(",").map((s) => s.trim()).filter(Boolean)
      : [];

  const start = data.start_date as { toDate?: () => Date } | string | undefined;
  let year = new Date().getFullYear().toString();
  if (start && typeof start === "object" && typeof start.toDate === "function") {
    year = String(start.toDate().getFullYear());
  } else if (typeof start === "string" && start.length >= 4) {
    year = start.slice(0, 4);
  }

  const title = String(data.label ?? data.title ?? "Project");
  const description = String(data.description ?? "");

  return {
    id,
    title,
    category: String(data.category ?? categoryFromTech(languages)),
    year: String(data.year ?? year),
    tagline: {
      en: description || title,
      tr: description || title,
    },
    tech: languages.length ? languages : ["Flutter"],
    color: String(data.color ?? COLORS[index % COLORS.length]),
    icon: String(data.icon ?? "Code2"),
    githubUrl: data.githubUrl ? String(data.githubUrl) : undefined,
    websiteUrl: data.websiteUrl ? String(data.websiteUrl) : undefined,
    imageUrl: data.imageUrl ? String(data.imageUrl) : undefined,
  };
}

function mergeProjects(remote: ProjectItem[]): ProjectItem[] {
  if (!remote.length) return fallbackProjects;

  const byTitle = new Map(
    remote.map((p) => [p.title.toLowerCase(), p] as const),
  );

  const merged = [...remote];
  for (const fb of fallbackProjects) {
    if (!byTitle.has(fb.title.toLowerCase())) {
      merged.push(fb);
    }
  }
  return merged;
}

export function Projects() {
  const { lang, t } = useApp();
  const [projects, setProjects] = useState<ProjectItem[]>(fallbackProjects);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>(t.projects.all);

  useEffect(() => {
    setFilter(t.projects.all);
  }, [t.projects.all]);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const q = query(
          collection(getDb(), "projects"),
          where("isActive", "==", true),
        );
        const snap = await getDocs(q);
        if (cancelled) return;
        const remote = snap.docs.map((d, i) =>
          mapFirestoreDoc(d.id, d.data() as Record<string, unknown>, i),
        );
        setProjects(mergeProjects(remote));
      } catch {
        if (!cancelled) setProjects(fallbackProjects);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    void load();
    return () => {
      cancelled = true;
    };
  }, []);

  const cats = useMemo(
    () => [t.projects.all, ...Array.from(new Set(projects.map((p) => p.category)))],
    [projects, t.projects.all],
  );

  const list =
    filter === t.projects.all
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="pf-section">
      <div className="pf-section__head">
        <span className="pf-eyebrow">{t.projects.label}</span>
        <h2 className="pf-section__title">{t.projects.title}</h2>
        <p className="pf-section__sub">{t.projects.subtitle}</p>
      </div>

      <div className="pf-filters">
        {cats.map((c) => (
          <button
            key={c}
            type="button"
            className={`pf-chip ${filter === c ? "pf-chip--active" : ""}`}
            onClick={() => setFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>

      {loading && <p className="pf-section__sub">{t.projects.loading}</p>}

      {!loading && !list.length && (
        <p className="pf-section__sub">{t.projects.empty}</p>
      )}

      <div className="pf-projects">
        {list.map((p) => {
          const Icon = iconMap[p.icon] ?? Code2;
          return (
            <article
              key={p.id}
              className="pf-project"
              style={{ ["--accent" as string]: p.color }}
            >
              <div className="pf-project__cover">
                <div className="pf-project__cover-bg" />
                {p.imageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={p.imageUrl}
                    alt=""
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      opacity: 0.35,
                    }}
                  />
                ) : null}
                <div className="pf-project__icon">
                  <Icon size={40} />
                </div>
                <span className="pf-project__year">{p.year}</span>
              </div>
              <div className="pf-project__body">
                <div className="pf-project__cat">{p.category}</div>
                <h3 className="pf-project__title">{p.title}</h3>
                <p className="pf-project__desc">{p.tagline[lang]}</p>
                <div className="pf-project__tech">
                  {p.tech.map((tech) => (
                    <span key={tech} className="pf-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="pf-project__links">
                  {p.githubUrl ? (
                    <a
                      className="pf-mini"
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Code2 size={14} />
                      {t.projects.viewCode}
                    </a>
                  ) : null}
                  {p.websiteUrl ? (
                    <a
                      className="pf-mini"
                      href={p.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={14} />
                      {t.projects.viewLive}
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
