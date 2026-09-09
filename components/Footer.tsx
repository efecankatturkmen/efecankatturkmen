"use client";

import { Heart } from "lucide-react";
import { useApp } from "@/lib/app-context";
import { personalInfo } from "@/lib/content/site";

export function Footer() {
  const { t } = useApp();
  const year = new Date().getFullYear();

  return (
    <footer className="pf-footer">
      <div className="pf-footer__inner">
        <div className="pf-footer__brand">
          <span className="pf-logo__mark" style={{ width: 34, height: 28, fontSize: 10 }}>
            ECT
          </span>
          {personalInfo.shortName}
        </div>
        <div className="pf-footer__note">
          {t.footer.built}
          <Heart className="pf-footer__heart" size={14} />
        </div>
        <div className="pf-footer__copy">
          © {year} {personalInfo.name}. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
