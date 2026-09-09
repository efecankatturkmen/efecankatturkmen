"use client";

import { useState, type FormEvent } from "react";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useApp } from "@/lib/app-context";
import { personalInfo } from "@/lib/content/site";
import { getDb } from "@/lib/firebase";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { t } = useApp();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: t.contact.error, variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(getDb(), "messages"), {
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
        timestamp: serverTimestamp(),
        read: false,
      });
      toast({ title: t.contact.sent });
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast({ title: t.contact.fail, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="pf-section pf-section--alt">
      <div className="pf-section__head">
        <span className="pf-eyebrow">{t.contact.label}</span>
        <h2 className="pf-section__title">{t.contact.title}</h2>
        <p className="pf-section__sub">{t.contact.subtitle}</p>
      </div>

      <div className="pf-contact">
        <div className="pf-contact__info">
          <div className="pf-info-item">
            <Mail size={18} />
            <a href={personalInfo.socials.email}>
              {personalInfo.socials.emailDisplay}
            </a>
          </div>
          <div className="pf-info-item">
            <MapPin size={18} />
            <span>{personalInfo.location}</span>
          </div>
          <div className="pf-info-socials">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={personalInfo.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        <form className="pf-form" onSubmit={submit}>
          <div className="pf-field">
            <input
              type="text"
              name="name"
              placeholder={t.contact.name}
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              autoComplete="name"
              required
            />
          </div>
          <div className="pf-field">
            <input
              type="email"
              name="email"
              placeholder={t.contact.email}
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              autoComplete="email"
              required
            />
          </div>
          <div className="pf-field">
            <textarea
              name="message"
              rows={6}
              placeholder={t.contact.message}
              value={form.message}
              onChange={(e) =>
                setForm((f) => ({ ...f, message: e.target.value }))
              }
              required
            />
          </div>
          <button
            type="submit"
            className="pf-btn pf-btn--primary pf-btn--wide"
            disabled={loading}
          >
            <Send size={16} />
            {loading ? t.contact.sending : t.contact.send}
          </button>
        </form>
      </div>
    </section>
  );
}
