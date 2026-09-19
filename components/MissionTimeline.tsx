"use client";

import {
  Briefcase,
  Check,
  ChevronDown,
  Loader2,
  MapPin,
  School,
  Star,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { useApp } from "@/lib/app-context";
import type {
  MilestoneCourse,
  MilestoneIcon,
  MilestoneItem,
  MilestoneProject,
  MilestoneStatus,
} from "@/lib/content/site";

const PAGE_SIZE = 5;

function statusLabel(
  status: MilestoneStatus,
  t: {
    cleared: string;
    inProgress: string;
    upcoming: string;
  },
): string {
  switch (status) {
    case "cleared":
      return t.cleared;
    case "in_progress":
      return t.inProgress;
    case "upcoming":
      return t.upcoming;
    default: {
      const _exhaustive: never = status;
      return _exhaustive;
    }
  }
}

function StatusIcon({ status }: { status: MilestoneStatus }) {
  switch (status) {
    case "cleared":
      return <Check size={12} />;
    case "in_progress":
      return <Loader2 size={12} className="pf-mission__spin" />;
    case "upcoming":
      return <MapPin size={12} />;
    default: {
      const _exhaustive: never = status;
      return _exhaustive;
    }
  }
}

function DotIcon({ icon }: { icon?: MilestoneIcon }) {
  switch (icon) {
    case "school":
      return <School size={12} />;
    case "briefcase":
    case undefined:
      return <Briefcase size={12} />;
    default: {
      const _exhaustive: never = icon;
      return _exhaustive;
    }
  }
}

function PaginatedProjects({
  projects,
  open,
}: {
  projects: MilestoneProject[];
  open: boolean;
}) {
  const { lang, t } = useApp();
  const [visible, setVisible] = useState(PAGE_SIZE);

  useEffect(() => {
    if (!open) setVisible(PAGE_SIZE);
  }, [open]);

  const shown = projects.slice(0, visible);
  const hasMore = visible < projects.length;

  return (
    <div className="pf-mission__projects">
      <div className="pf-mission__projects-label">
        {t.progression.projectsHeading}
      </div>
      <ul>
        {shown.map((p) => (
          <li key={p.name}>
            <strong>{p.name}</strong>
            <span>{p.detail[lang]}</span>
          </li>
        ))}
      </ul>
      {hasMore && (
        <button
          type="button"
          className="pf-mission__load-more"
          onClick={() => setVisible((n) => n + PAGE_SIZE)}
        >
          {t.progression.loadMore}
        </button>
      )}
    </div>
  );
}

function PaginatedCourses({
  courses,
  degreeCompletedNote,
  open,
}: {
  courses: MilestoneCourse[];
  degreeCompletedNote?: MilestoneItem["degreeCompletedNote"];
  open: boolean;
}) {
  const { lang, t } = useApp();
  const [visible, setVisible] = useState(PAGE_SIZE);

  useEffect(() => {
    if (!open) setVisible(PAGE_SIZE);
  }, [open]);

  const shown = courses.slice(0, visible);
  const hasMore = visible < courses.length;

  return (
    <div className="pf-mission__courses">
      <div className="pf-mission__projects-label">
        {t.progression.classesHeading}
      </div>
      <ul>
        {shown.map((c) => (
          <li key={`${c.code}-${c.title}`}>
            <strong>{c.code}</strong>
            <span>{c.title}</span>
          </li>
        ))}
      </ul>
      {hasMore && (
        <button
          type="button"
          className="pf-mission__load-more"
          onClick={() => setVisible((n) => n + PAGE_SIZE)}
        >
          {t.progression.loadMore}
        </button>
      )}
      {degreeCompletedNote && (
        <div className="pf-mission__degree-done">
          <Check size={12} />
          {degreeCompletedNote[lang]}
        </div>
      )}
    </div>
  );
}

function MissionCard({
  item,
  open,
  onToggle,
  youAreHereId,
}: {
  item: MilestoneItem;
  open: boolean;
  onToggle: () => void;
  youAreHereId?: string;
}) {
  const { lang, t } = useApp();
  const isCurrent = item.status === "in_progress";
  const showHere = Boolean(youAreHereId && item.id === youAreHereId);
  const courses = item.courses ?? [];

  return (
    <div
      className={`pf-mission ${isCurrent ? "pf-mission--current" : ""} ${open ? "pf-mission--open" : ""}`}
    >
      <button
        type="button"
        className="pf-mission__header"
        onClick={onToggle}
        aria-expanded={open}
      >
        <div className="pf-mission__meta">
          <span className="pf-mission__level">{item.levelLabel[lang]}</span>
          <span className={`pf-mission__badge pf-mission__badge--${item.status}`}>
            <StatusIcon status={item.status} />
            {statusLabel(item.status, t.progression)}
          </span>
        </div>
        <div className="pf-mission__title-row">
          <h3 className="pf-mission__title">{item.title[lang]}</h3>
          <ChevronDown
            size={18}
            className={`pf-mission__chevron ${open ? "pf-mission__chevron--open" : ""}`}
          />
        </div>
        <div className="pf-mission__co">
          {item.company} · {item.year}
        </div>
      </button>

      {open && (
        <div className="pf-mission__body">
          <p className="pf-mission__summary">{item.summary[lang]}</p>
          {item.projects.length > 0 && (
            <PaginatedProjects projects={item.projects} open={open} />
          )}
          {courses.length > 0 && (
            <PaginatedCourses
              courses={courses}
              degreeCompletedNote={item.degreeCompletedNote}
              open={open}
            />
          )}
          {showHere && (
            <div className="pf-mission__here">
              <Star size={12} />
              {t.progression.youAreHere}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

interface MissionTimelineProps {
  items: MilestoneItem[];
  youAreHereId?: string;
  defaultOpenId?: string | null;
  /** @deprecated Prefer per-item `icon` on MilestoneItem */
  dotIcon?: ReactNode;
}

export function MissionTimeline({
  items,
  youAreHereId,
  defaultOpenId,
  dotIcon,
}: MissionTimelineProps) {
  const initial =
    defaultOpenId ??
    items.find((m) => m.status === "in_progress")?.id ??
    items[0]?.id ??
    null;
  const [openId, setOpenId] = useState<string | null>(initial);

  return (
    <div className="pf-missions">
      {items.map((item) => (
        <div key={item.id} className="pf-missions__item">
          <div className="pf-missions__dot" aria-hidden>
            {item.icon ? (
              <DotIcon icon={item.icon} />
            ) : (
              (dotIcon ?? <Briefcase size={12} />)
            )}
          </div>
          <MissionCard
            item={item}
            open={openId === item.id}
            onToggle={() =>
              setOpenId((cur) => (cur === item.id ? null : item.id))
            }
            youAreHereId={youAreHereId}
          />
        </div>
      ))}
    </div>
  );
}
