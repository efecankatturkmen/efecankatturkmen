export type Lang = "en" | "tr";
export type ThemeStyle = "elegant" | "pixel";
export type ColorMode = "dark" | "light";

export type Localized<T> = { en: T; tr: T };

export interface PersonalInfo {
  name: string;
  shortName: string;
  location: string;
  socials: {
    github: string;
    linkedin: string;
    instagram: string;
    email: string;
    emailDisplay: string;
  };
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  year: string;
  tagline: Localized<string>;
  tech: string[];
  color: string;
  icon: string;
  githubUrl?: string;
  websiteUrl?: string;
  imageUrl?: string;
}

export interface ExperienceItem {
  year: string;
  role: Localized<string>;
  company: string;
  desc: Localized<string>;
}

export const personalInfo: PersonalInfo = {
  name: "Efe Cankat Türkmen",
  shortName: "Cankat T.",
  location: "Binghamton, NY",
  socials: {
    github: "https://github.com/efecankatturkmen",
    linkedin: "https://www.linkedin.com/in/efe-cankat-turkmen/",
    instagram: "https://www.instagram.com/cankatturkmen",
    email: "mailto:efecankat.96@gmail.com",
    emailDisplay: "efecankat.96@gmail.com",
  },
};

export const translations = {
  en: {
    nav: {
      about: "About",
      whatIDo: "What I Do",
      projects: "Projects",
      contact: "Contact",
      resume: "Resume",
    },
    hero: {
      greeting: "Hi, I'm",
      role: "Front-End Web & Mobile Developer",
      tagline: "I build delightful digital experiences that people love to use.",
      cta1: "View Projects",
      cta2: "Get in Touch",
      pressStart: "Press Start",
    },
    about: {
      label: "About Me",
      title: "I'm Efe Cankat Türkmen",
      p1: "I'm an experienced member of the ITS Innovation and Enterprise Applications team at Binghamton University, specializing in technology solutions and support — from campus-wide apps like bMobi to workflows, compliance systems, and internal tools.",
      p2: "I'm also the founder of Laplace Apps, where I ship playful, meaningful products. My latest work spans self-hosted AI, no-code automations, and mobile apps that just feel right.",
      stats: [
        { label: "Years Coding", value: "8+" },
        { label: "Shipped Projects", value: "20+" },
        { label: "Coffees /day", value: "∞" },
      ],
    },
    whatIDo: {
      label: "What I Do",
      title: "Specializing In",
      subtitle:
        "A tiny arsenal of tools I use every day to turn ideas into pixels and pixels into products.",
      skills: [
        {
          name: "Flutter",
          desc: "Cross-platform mobile apps with buttery smooth 60fps UI.",
        },
        {
          name: "React",
          desc: "Modern component-driven web apps with delightful UX.",
        },
        {
          name: ".NET / C#",
          desc: "Enterprise back-ends and internal tools that scale.",
        },
        {
          name: "Firebase",
          desc: "Realtime data, auth, and cloud functions in a snap.",
        },
        {
          name: "UI / UX Design",
          desc: "Material Design 3, motion, and thoughtful micro-interactions.",
        },
        {
          name: "AI Automations",
          desc: "n8n, RAG pipelines and self-hosted assistants.",
        },
      ],
    },
    projects: {
      label: "Projects",
      title: "Selected Work",
      subtitle: "A curated selection of things I've designed, built and shipped.",
      viewCode: "View Code",
      viewLive: "Live Demo",
      all: "All",
      loading: "Loading projects…",
      empty: "No projects to show yet.",
    },
    contact: {
      label: "Contact",
      title: "Let's build something together",
      subtitle:
        "Have an idea, a project, or just want to say hi? Drop me a line — I reply to every message.",
      name: "Your Name",
      email: "Your Email",
      message: "Your Message",
      send: "Send Message",
      sending: "Sending...",
      sent: "Message sent! I'll be in touch soon.",
      error: "Please fill in all fields.",
      fail: "Something went wrong. Please try again.",
    },
    footer: {
      built: "Designed & built with care.",
      rights: "All rights reserved.",
    },
    themeSwitch: {
      elegant: "Elegant",
      pixel: "Pixel",
      light: "Light",
      dark: "Dark",
    },
  },
  tr: {
    nav: {
      about: "Hakkımda",
      whatIDo: "Ne Yapıyorum",
      projects: "Projeler",
      contact: "İletişim",
      resume: "Özgeçmiş",
    },
    hero: {
      greeting: "Merhaba, ben",
      role: "Ön Uç Web & Mobil Geliştirici",
      tagline:
        "İnsanların kullanmayı sevdiği keyifli dijital deneyimler tasarlıyorum.",
      cta1: "Projeleri Gör",
      cta2: "İletişime Geç",
      pressStart: "Start'a Bas",
    },
    about: {
      label: "Hakkımda",
      title: "Ben Efe Cankat Türkmen",
      p1: "Binghamton Üniversitesi ITS Yenilik ve Kurumsal Uygulamalar ekibinin deneyimli bir üyesiyim; bMobi gibi kampüs uygulamalarından iş akışları, uyumluluk sistemleri ve dahili araçlara kadar teknoloji çözümleri ve destek konusunda uzmanlaşıyorum.",
      p2: "Aynı zamanda Laplace Apps'in kurucusuyum; anlamlı ve eğlenceli ürünler geliştiriyorum. Son çalışmalarım self-hosted yapay zeka, no-code otomasyonlar ve doğru hissettiren mobil uygulamalar üzerine.",
      stats: [
        { label: "Yıllık Deneyim", value: "8+" },
        { label: "Yayınlanan Proje", value: "20+" },
        { label: "Günlük Kahve", value: "∞" },
      ],
    },
    whatIDo: {
      label: "Ne Yapıyorum",
      title: "Uzmanlık Alanlarım",
      subtitle:
        "Fikirleri piksellere, pikselleri ürünlere dönüştürmek için her gün kullandığım küçük bir cephanelik.",
      skills: [
        {
          name: "Flutter",
          desc: "60fps akıcı arayüzlü çapraz platform mobil uygulamalar.",
        },
        {
          name: "React",
          desc: "Bileşen tabanlı, keyifli kullanıcı deneyimli modern web uygulamaları.",
        },
        {
          name: ".NET / C#",
          desc: "Ölçeklenebilir kurumsal arka uçlar ve dahili araçlar.",
        },
        {
          name: "Firebase",
          desc: "Gerçek zamanlı veri, kimlik doğrulama ve bulut fonksiyonları.",
        },
        {
          name: "UI / UX Tasarım",
          desc: "Material Design 3, hareket ve düşünceli mikro etkileşimler.",
        },
        {
          name: "AI Otomasyon",
          desc: "n8n, RAG hatları ve self-hosted asistanlar.",
        },
      ],
    },
    projects: {
      label: "Projeler",
      title: "Seçilmiş Çalışmalar",
      subtitle:
        "Tasarladığım, geliştirdiğim ve yayınladığım işlerden özenle seçilmiş bir derleme.",
      viewCode: "Kodu Gör",
      viewLive: "Canlı Demo",
      all: "Tümü",
      loading: "Projeler yükleniyor…",
      empty: "Henüz gösterilecek proje yok.",
    },
    contact: {
      label: "İletişim",
      title: "Birlikte bir şeyler inşa edelim",
      subtitle:
        "Bir fikriniz, projeniz veya sadece merhaba demek mi istiyorsunuz? Yazın — her mesajı yanıtlıyorum.",
      name: "Adınız",
      email: "E-posta",
      message: "Mesajınız",
      send: "Mesaj Gönder",
      sending: "Gönderiliyor...",
      sent: "Mesaj gönderildi! Kısa süre içinde iletişime geçeceğim.",
      error: "Lütfen tüm alanları doldurun.",
      fail: "Bir şeyler ters gitti. Lütfen tekrar deneyin.",
    },
    footer: {
      built: "Özenle tasarlandı ve geliştirildi.",
      rights: "Tüm hakları saklıdır.",
    },
    themeSwitch: {
      elegant: "Zarif",
      pixel: "Piksel",
      light: "Açık",
      dark: "Koyu",
    },
  },
} as const;

export type Translations = (typeof translations)[Lang];

export const fallbackProjects: ProjectItem[] = [
  {
    id: "note-together",
    title: "Note Together",
    category: "Mobile",
    year: "2025",
    tagline: {
      en: "Shared, real-time note-taking for classrooms and small teams.",
      tr: "Sınıflar ve küçük ekipler için gerçek zamanlı ortak not tutma.",
    },
    tech: ["Flutter", "Firebase", "Riverpod"],
    color: "#F59E0B",
    icon: "BookOpen",
  },
  {
    id: "chefbook",
    title: "Chefbook",
    category: "Mobile",
    year: "2026",
    tagline: {
      en: "Discover recipes and plan your week with a smart meal planner.",
      tr: "Akıllı yemek planlayıcı ile tarifleri keşfet ve haftanı planla.",
    },
    tech: ["Flutter", "AI", "SQLite"],
    color: "#EF4444",
    icon: "ChefHat",
  },
  {
    id: "bmobi",
    title: "Bmobi",
    category: "Mobile",
    year: "2023",
    tagline: {
      en: "Official Binghamton University companion app for 15k+ students.",
      tr: "15 binden fazla öğrenci için resmi Binghamton Üniversitesi uygulaması.",
    },
    tech: ["Flutter", "REST", "OAuth"],
    color: "#10B981",
    icon: "GraduationCap",
  },
  {
    id: "ai-triage",
    title: "AI Triage Engine",
    category: "AI",
    year: "2025",
    tagline: {
      en: "Self-hosted RAG assistant that automates internal knowledge base.",
      tr: "Dahili bilgi tabanını otomatikleştiren self-hosted RAG asistanı.",
    },
    tech: ["n8n", "RAG", "Markdown"],
    color: "#8B5CF6",
    icon: "Bot",
  },
  {
    id: "patient-manager",
    title: "Patient Manager",
    category: "Web",
    year: "2022",
    tagline: {
      en: "Web-based patient records and scheduling for a private clinic.",
      tr: "Özel klinik için web tabanlı hasta kayıt ve randevu sistemi.",
    },
    tech: [".NET", "MSSQL", "Blazor"],
    color: "#3B82F6",
    icon: "HeartPulse",
  },
  {
    id: "remote-ed",
    title: "Remote Ed Portal",
    category: "Web",
    year: "2021",
    tagline: {
      en: "Distance learning portal built during the pandemic pivot.",
      tr: "Pandemi döneminde geliştirilen uzaktan eğitim portalı.",
    },
    tech: ["ASP.NET", "MySQL", "jQuery"],
    color: "#EC4899",
    icon: "MonitorPlay",
  },
];

export const experience: ExperienceItem[] = [
  {
    year: "2020 — Now",
    role: {
      en: "Lead Programmer Analyst",
      tr: "Baş Programcı Analist",
    },
    company: "Binghamton University · ITS",
    desc: {
      en: "Leading enterprise application initiatives, internal AI tooling, and full-stack development for a campus of 18k+ users — including bMobi, BComply, BingSwap, and research workflows.",
      tr: "18 binden fazla kullanıcılı kampüs için kurumsal uygulama girişimleri, dahili yapay zeka araçları ve tam yığın geliştirme — bMobi, BComply, BingSwap ve araştırma iş akışları dahil.",
    },
  },
  {
    year: "2022 — Now",
    role: {
      en: "Founder & CEO",
      tr: "Kurucu & CEO",
    },
    company: "Laplace Apps",
    desc: {
      en: "Independent product studio shipping mobile apps like Note Together and Chefbook.",
      tr: "Note Together ve Chefbook gibi mobil uygulamalar geliştiren bağımsız ürün stüdyosu.",
    },
  },
  {
    year: "2018 — 2020",
    role: {
      en: "Software Developer",
      tr: "Yazılım Geliştirici",
    },
    company: "Freelance",
    desc: {
      en: "Delivered web and mobile projects for healthcare, education and small businesses.",
      tr: "Sağlık, eğitim ve küçük işletmeler için web ve mobil projeler geliştirdim.",
    },
  },
];
