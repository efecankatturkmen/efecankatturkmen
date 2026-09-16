"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  translations,
  type ColorMode,
  type Lang,
  type ThemeStyle,
  type Translations,
} from "@/lib/content/site";

interface AppContextValue {
  theme: ThemeStyle;
  setTheme: (t: ThemeStyle) => void;
  toggleTheme: () => void;
  mode: ColorMode;
  setMode: (m: ColorMode) => void;
  toggleMode: () => void;
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  t: Translations;
}

const AppContext = createContext<AppContextValue | null>(null);

function readStored<T extends string>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  return (localStorage.getItem(key) as T) || fallback;
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeStyle>("elegant");
  const [mode, setMode] = useState<ColorMode>("dark");
  const [lang, setLang] = useState<Lang>("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTheme(readStored("pf.theme", "elegant"));
    setMode(readStored("pf.mode", "dark"));
    setLang(readStored("pf.lang", "en"));
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem("pf.theme", theme);
    localStorage.setItem("pf.mode", mode);
    localStorage.setItem("pf.lang", lang);
    const root = document.documentElement;
    root.dataset.theme = theme;
    root.dataset.mode = mode;
    root.dataset.lang = lang;
  }, [theme, mode, lang, ready]);

  const toggleTheme = useCallback(
    () =>
      setTheme((v) => {
        switch (v) {
          case "elegant":
            return "pixel";
          case "pixel":
            return "ai";
          case "ai":
            return "elegant";
          default: {
            const _exhaustive: never = v;
            return _exhaustive;
          }
        }
      }),
    [],
  );
  const toggleMode = useCallback(
    () => setMode((v) => (v === "dark" ? "light" : "dark")),
    [],
  );
  const toggleLang = useCallback(
    () => setLang((v) => (v === "en" ? "tr" : "en")),
    [],
  );

  const t = useMemo(() => translations[lang], [lang]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme,
      mode,
      setMode,
      toggleMode,
      lang,
      setLang,
      toggleLang,
      t,
    }),
    [theme, mode, lang, t, toggleTheme, toggleMode, toggleLang],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside AppProvider");
  return ctx;
}
