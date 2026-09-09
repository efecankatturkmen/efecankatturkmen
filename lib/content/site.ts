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
      p1: "Lead Programmer Analyst on Binghamton University's ITS Innovation & Enterprise Applications team. I ship campus-scale products — bMobi (App Store & Play), Graphene micro-apps like ProgEval, Decker Inventory, BComply, BingSwap — and presented sustainability work at the SUNY Sustainability Conference 2024. Dual BS in Information Systems (BU + Istanbul Technical University); currently pursuing an MS in Computer Science (AI), expected May 2027.",
      p2: "I'm also the founder of Laplace Apps, where I design and ship mobile products like Note Together, ChefBook, LOCK'D IN, and Habitank — plus self-hosted AI, n8n automations, and tools that just feel right.",
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
    stack: {
      label: "Toolkit",
      title: "Stack",
    },
    beyond: {
      label: "Life",
      title: "Beyond work",
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
      p1: "Binghamton Üniversitesi ITS Yenilik ve Kurumsal Uygulamalar ekibinde Baş Programcı Analistim. Kampüs ölçeğinde ürünler geliştiriyorum — bMobi (App Store & Play), ProgEval gibi Graphene mikro uygulamalar, Decker Inventory, BComply, BingSwap — ve 2024 SUNY Sürdürülebilirlik Konferansı'nda sunum yaptım. Çift diploma Bilgi Sistemleri lisansım var (BU + İTÜ); şu an Yapay Zeka odaklı Bilgisayar Bilimleri yüksek lisansına devam ediyorum (beklenen mezuniyet: Mayıs 2027).",
      p2: "Ayrıca Laplace Apps'in kurucusuyum; Note Together, ChefBook, LOCK'D IN ve Habitank gibi mobil ürünlerin yanı sıra self-hosted yapay zeka, n8n otomasyonları ve doğru hissettiren araçlar geliştiriyorum.",
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
    stack: {
      label: "Araçlar",
      title: "Teknoloji Yığını",
    },
    beyond: {
      label: "Yaşam",
      title: "İş dışında",
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
      en: "Collaborative shared lists — shopping, todos, events, notes and spending, together.",
      tr: "Ortak listeler — alışveriş, yapılacaklar, etkinlikler, notlar ve harcamalar, birlikte.",
    },
    tech: ["Flutter", "Firebase", "Riverpod"],
    color: "#F59E0B",
    icon: "BookOpen",
    websiteUrl: "https://laplaceapps.com/apps/",
  },
  {
    id: "chefbook",
    title: "ChefBook",
    category: "Mobile",
    year: "2026",
    tagline: {
      en: "Your recipes, organised. Cook, save and share from one kitchen notebook.",
      tr: "Tariflerin düzenli. Tek mutfak defterinden pişir, kaydet ve paylaş.",
    },
    tech: ["Flutter", "AI", "SQLite"],
    color: "#EF4444",
    icon: "ChefHat",
    websiteUrl: "https://laplaceapps.com/apps/",
  },
  {
    id: "lockdin",
    title: "LOCK'D IN",
    category: "Mobile",
    year: "2026",
    tagline: {
      en: "Fitness accountability — squads, dual-shot proof check-ins, and streaks that keep you honest.",
      tr: "Fitness hesap verebilirliği — ekipler, çift çekim kanıt check-in'leri ve seni dürüst tutan seriler.",
    },
    tech: ["Flutter", "Firebase", "Mobile"],
    color: "#22C55E",
    icon: "Dumbbell",
    websiteUrl: "https://lockdin.laplaceapps.com/",
  },
  {
    id: "habitank",
    title: "Habitank",
    category: "Mobile",
    year: "2026",
    tagline: {
      en: "Grow calm habits. A living pixel aquarium that rewards consistency — not hustle.",
      tr: "Sakin alışkanlıklar büyüt. Tutarlılığı ödüllendiren canlı piksel akvaryum — hustle değil.",
    },
    tech: ["Flutter", "Web", "Pixel"],
    color: "#06B6D4",
    icon: "Fish",
    websiteUrl: "https://habitank.laplaceapps.com/",
  },
  {
    id: "bmobi",
    title: "Bmobi",
    category: "Mobile",
    year: "2023",
    tagline: {
      en: "Official Binghamton University companion app — maps, biometrics, 2FA push, and campus services.",
      tr: "Resmi Binghamton Üniversitesi uygulaması — haritalar, biyometri, 2FA push ve kampüs servisleri.",
    },
    tech: ["Flutter", "Firebase", "Maps"],
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
      en: "Clinic patient records, check-ups & results — QR login and role-based UI (ICS TANI / Laplace).",
      tr: "Klinik hasta kayıtları, kontroller ve sonuçlar — QR giriş ve role dayalı arayüz (ICS TANI / Laplace).",
    },
    tech: ["Flutter", "Firebase", "QR"],
    color: "#3B82F6",
    icon: "HeartPulse",
    websiteUrl: "https://icstanisonuc.com",
  },
  {
    id: "remote-ed",
    title: "Remote Ed Portal",
    category: "Web",
    year: "2022",
    tagline: {
      en: "Distance learning portal with admin tooling and auth — education.laplaceapps.com.",
      tr: "Yönetici araçları ve kimlik doğrulamalı uzaktan eğitim portalı — education.laplaceapps.com.",
    },
    tech: ["Flutter", "Firebase", "Auth"],
    color: "#EC4899",
    icon: "MonitorPlay",
    websiteUrl: "https://education.laplaceapps.com/",
  },
];

export const experience: ExperienceItem[] = [
  {
    year: "2021 — Now",
    role: {
      en: "Lead Programmer Analyst",
      tr: "Baş Programcı Analist",
    },
    company: "Binghamton University · ITS",
    desc: {
      en: "Enterprise apps for 18k+ campus users: bMobi (stores, maps, biometrics, PrivacyIDEA 2FA), Graphene ProgEval, Decker Inventory, BComply, BingSwap, AuxSystem, workflows — plus search committees and SUNY Sustainability Conference 2024.",
      tr: "18 binden fazla kampüs kullanıcısı için kurumsal uygulamalar: bMobi (mağazalar, haritalar, biyometri, PrivacyIDEA 2FA), Graphene ProgEval, Decker Inventory, BComply, BingSwap, AuxSystem, iş akışları — ayrıca arama komiteleri ve 2024 SUNY Sürdürülebilirlik Konferansı.",
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
      en: "Product studio shipping Note Together, ChefBook, LOCK'D IN, Habitank, and clinic/education platforms with Flutter, Firebase, and AI automations.",
      tr: "Note Together, ChefBook, LOCK'D IN, Habitank ve klinik/eğitim platformlarını Flutter, Firebase ve yapay zeka otomasyonlarıyla geliştiren ürün stüdyosu.",
    },
  },
  {
    year: "2018 — 2021",
    role: {
      en: "Software Developer",
      tr: "Yazılım Geliştirici",
    },
    company: "ICS TANI · Atacan · Freelance",
    desc: {
      en: "Patient management & remote education (.NET/Flutter), OSGB online training platforms, and web/mobile builds for healthcare and small business.",
      tr: "Hasta yönetimi ve uzaktan eğitim (.NET/Flutter), OSGB çevrimiçi eğitim platformları ve sağlık / küçük işletme için web-mobil projeler.",
    },
  },
];

export interface GridItem {
  id: string;
  label: Localized<string>;
}

export const stackItems: GridItem[] = [
  { id: "flutter", label: { en: "Flutter", tr: "Flutter" } },
  { id: "dart", label: { en: "Dart", tr: "Dart" } },
  { id: "react", label: { en: "React", tr: "React" } },
  { id: "nextjs", label: { en: "Next.js", tr: "Next.js" } },
  { id: "firebase", label: { en: "Firebase", tr: "Firebase" } },
  { id: "dotnet", label: { en: ".NET / C#", tr: ".NET / C#" } },
  { id: "javascript", label: { en: "JavaScript", tr: "JavaScript" } },
  { id: "typescript", label: { en: "TypeScript", tr: "TypeScript" } },
  { id: "python", label: { en: "Python", tr: "Python" } },
  { id: "laravel", label: { en: "PHP / Laravel", tr: "PHP / Laravel" } },
  { id: "sql", label: { en: "SQL", tr: "SQL" } },
  { id: "nosql", label: { en: "NoSQL", tr: "NoSQL" } },
  { id: "docker", label: { en: "Docker", tr: "Docker" } },
  { id: "git", label: { en: "Git", tr: "Git" } },
  { id: "graphene", label: { en: "Graphene", tr: "Graphene" } },
  { id: "n8n", label: { en: "n8n", tr: "n8n" } },
  { id: "htmlcss", label: { en: "HTML / CSS", tr: "HTML / CSS" } },
  { id: "vscode", label: { en: "VS Code", tr: "VS Code" } },
];

export const beyondItems: GridItem[] = [
  { id: "powerlifting", label: { en: "Powerlifting", tr: "Powerlifting" } },
  { id: "calisthenics", label: { en: "Calisthenics", tr: "Kalisteni" } },
  { id: "dance", label: { en: "Ballroom / Latin", tr: "Ballroom / Latin" } },
  { id: "chess", label: { en: "Chess", tr: "Satranç" } },
  { id: "basketball", label: { en: "Basketball", tr: "Basketbol" } },
  { id: "volleyball", label: { en: "Volleyball", tr: "Voleybol" } },
  { id: "football", label: { en: "Football", tr: "Futbol" } },
  { id: "lol", label: { en: "League of Legends", tr: "League of Legends" } },
  { id: "marvelrivals", label: { en: "Marvel Rivals", tr: "Marvel Rivals" } },
  { id: "valorant", label: { en: "Valorant", tr: "Valorant" } },
  { id: "travel", label: { en: "Travel", tr: "Seyahat" } },
  { id: "vlogs", label: { en: "Vlogs", tr: "Vlog" } },
  { id: "creator", label: { en: "Creator", tr: "İçerik üretici" } },
];
