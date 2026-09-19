export type Lang = "en" | "tr";
export type ThemeStyle = "elegant" | "pixel" | "ai";
export type ColorMode = "dark" | "light";

export type Localized<T> = { en: T; tr: T };

export interface PersonalInfo {
  name: string;
  shortName: string;
  location: string;
  socials: {
    github: string;
    linkedin: string;
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
  status?: "shipped" | "in_progress";
}

export type SkillRarity =
  | "experienced"
  | "comfortable"
  | "familiar"
  | "learning";

export interface StackSkill {
  id: string;
  label: Localized<string>;
  rarity: SkillRarity;
}

export interface StackCategory {
  id: string;
  title: Localized<string>;
  iconId: string;
  skills: StackSkill[];
}

export type MilestoneStatus = "cleared" | "in_progress" | "upcoming";

export type MilestoneIcon = "briefcase" | "school";

export interface MilestoneProject {
  name: string;
  detail: Localized<string>;
}

export interface MilestoneCourse {
  code: string;
  title: string;
}

export interface MilestoneItem {
  id: string;
  levelLabel: Localized<string>;
  status: MilestoneStatus;
  title: Localized<string>;
  company: string;
  year: string;
  summary: Localized<string>;
  projects: MilestoneProject[];
  courses?: MilestoneCourse[];
  degreeCompletedNote?: Localized<string>;
  icon?: MilestoneIcon;
}

/** @deprecated Use milestones — kept type alias for clarity during migration */
export type ExperienceItem = MilestoneItem;

export const personalInfo: PersonalInfo = {
  name: "Efe Cankat Türkmen",
  shortName: "Cankat T.",
  location: "Binghamton, NY",
  socials: {
    github: "https://github.com/efecankatturkmen",
    linkedin: "https://www.linkedin.com/in/efe-cankat-turkmen/",
    email: "mailto:efecankat.96@gmail.com",
    emailDisplay: "efecankat.96@gmail.com",
  },
};

export const translations = {
  en: {
    nav: {
      about: "About",
      progression: "Progression",
      whatIDo: "Capabilities",
      projects: "Work",
      toolkit: "Toolkit",
      contact: "Contact",
      resume: "Resume",
    },
    hero: {
      greeting: "Hi, I'm",
      role: "Software Engineer & Product Builder",
      tagline:
        "I build mobile apps, enterprise systems, and AI-powered products from idea to production.",
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
      label: "Capabilities",
      title: "What I can build",
      skills: [
        {
          name: "Product Engineering",
          desc: "Cross-platform mobile, web, backend systems, and product architecture from idea to production.",
        },
        {
          name: "AI & Automation",
          desc: "AI-assisted development, agent workflows, RAG, MCP, workflow automation, generative media, and local/self-hosted AI.",
        },
        {
          name: "Enterprise Systems",
          desc: "Internal platforms, workflows, integrations, authentication, databases, and production applications.",
        },
        {
          name: "Product & UI/UX",
          desc: "Interface design, interaction design, prototyping, design systems, and polished product experiences.",
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
    progression: {
      label: "02 — The Journey",
      title: "Progression & Missions",
      cleared: "Cleared",
      inProgress: "In Progress",
      upcoming: "Upcoming",
      youAreHere: "You are here",
      projectsHeading: "Projects & highlights",
      classesHeading: "Classes",
      loadMore: "Load 5 more",
    },
    stack: {
      label: "Toolkit",
      title: "Tools I build with.",
      subtitle:
        "Technologies, platforms, and tools I use to turn ideas into products.",
      rarityLegend: "Rarity legend",
      rarity: {
        experienced: "Experienced",
        comfortable: "Comfortable",
        familiar: "Familiar",
        learning: "Currently learning",
      },
    },
    beyond: {
      label: "Life",
      title: "Beyond work",
      milestonesTitle: "Leadership, sport & service",
      milestonesSub:
        "Organizing, competing, coaching — and the training that keeps me sharp.",
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
      ai: "AI",
      light: "Light",
      dark: "Dark",
    },
  },
  tr: {
    nav: {
      about: "Hakkımda",
      progression: "İlerleme",
      whatIDo: "Yetenekler",
      projects: "Çalışmalar",
      toolkit: "Araçlar",
      contact: "İletişim",
      resume: "Özgeçmiş",
    },
    hero: {
      greeting: "Merhaba, ben",
      role: "Yazılım Mühendisi ve Ürün Geliştirici",
      tagline:
        "Mobil uygulamalar, kurumsal sistemler ve yapay zeka destekli ürünleri fikirden üretime kadar geliştiriyorum.",
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
      label: "Yetenekler",
      title: "Ne inşa edebilirim",
      skills: [
        {
          name: "Ürün Mühendisliği",
          desc: "Çapraz platform mobil, web, arka uç sistemleri ve ürün mimarisi — fikirden üretime.",
        },
        {
          name: "YZ ve Otomasyon",
          desc: "YZ destekli geliştirme, ajan iş akışları, RAG, MCP, iş akışı otomasyonu, üretken medya ve yerel/self-hosted yapay zeka.",
        },
        {
          name: "Kurumsal Sistemler",
          desc: "Dahili platformlar, iş akışları, entegrasyonlar, kimlik doğrulama, veritabanları ve üretim uygulamaları.",
        },
        {
          name: "Ürün ve UI/UX",
          desc: "Arayüz tasarımı, etkileşim tasarımı, prototipleme, tasarım sistemleri ve cilalı ürün deneyimleri.",
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
    progression: {
      label: "02 — Yolculuk",
      title: "İlerleme & Görevler",
      cleared: "Tamamlandı",
      inProgress: "Devam ediyor",
      upcoming: "Yakında",
      youAreHere: "Buradasın",
      projectsHeading: "Projeler & öne çıkanlar",
      classesHeading: "Dersler",
      loadMore: "5 tane daha yükle",
    },
    stack: {
      label: "Araçlar",
      title: "Ürünleri bunlarla inşa ediyorum.",
      subtitle:
        "Fikirleri ürünlere dönüştürmek için kullandığım teknolojiler, platformlar ve araçlar.",
      rarityLegend: "Nadirlik efsanesi",
      rarity: {
        experienced: "Deneyimli",
        comfortable: "Rahat",
        familiar: "Tanıdık",
        learning: "Öğreniyor",
      },
    },
    beyond: {
      label: "Yaşam",
      title: "İş dışında",
      milestonesTitle: "Liderlik, spor & hizmet",
      milestonesSub:
        "Organizasyon, yarışma, koçluk — ve beni keskin tutan antrenman.",
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
      ai: "YZ",
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

export const milestones: MilestoneItem[] = [
  {
    id: "bu-its",
    levelLabel: { en: "Current level", tr: "Mevcut seviye" },
    status: "in_progress",
    title: {
      en: "Lead Programmer Analyst",
      tr: "Baş Programcı Analist",
    },
    company: "Binghamton University · ITS",
    year: "2021 — Now",
    summary: {
      en: "Enterprise apps for 18k+ campus users — plus search committees and SUNY Sustainability Conference 2024.",
      tr: "18 binden fazla kampüs kullanıcısı için kurumsal uygulamalar — ayrıca arama komiteleri ve 2024 SUNY Sürdürülebilirlik Konferansı.",
    },
    projects: [
      {
        name: "Watson AD User Group Creation by IAMbing",
        detail: {
          en: "Ongoing · Project 4779",
          tr: "Devam ediyor · Proje 4779",
        },
      },
      {
        name: "Mobile Friendly Campus Maps / Floorplans for UPD",
        detail: {
          en: "UAT · Project 12769",
          tr: "UAT · Proje 12769",
        },
      },
      {
        name: "New Dataproxy 2.0",
        detail: {
          en: "Staging · Project 14817",
          tr: "Staging · Proje 14817",
        },
      },
      {
        name: "Workflow Engine Updates",
        detail: {
          en: "Ongoing · Project 14816",
          tr: "Devam ediyor · Proje 14816",
        },
      },
      {
        name: "my.Binghamton & bMobi Title II Review/Compliance",
        detail: {
          en: "Ongoing · Project 12400",
          tr: "Devam ediyor · Proje 12400",
        },
      },
      {
        name: "Comprehensive Binghamton HR System",
        detail: {
          en: "Ongoing · Project 5834",
          tr: "Devam ediyor · Proje 5834",
        },
      },
      {
        name: "Dataproxy and Graphene Server Updates",
        detail: {
          en: "Ongoing · Project 12471",
          tr: "Devam ediyor · Proje 12471",
        },
      },
      {
        name: "Python/Django DataProxy",
        detail: {
          en: "Ongoing · Project 10955",
          tr: "Devam ediyor · Proje 10955",
        },
      },
      {
        name: "Semester Withdrawal Form",
        detail: {
          en: "In progress · Project 2314",
          tr: "Devam ediyor · Proje 2314",
        },
      },
      {
        name: "4+1 Program Workflow",
        detail: {
          en: "In progress · DMND0003836",
          tr: "Devam ediyor · DMND0003836",
        },
      },
      {
        name: "DataProxy → Hermes APIGateway",
        detail: {
          en: "In progress · translating DataProxy modules to Hermes APIGateway",
          tr: "Devam ediyor · DataProxy modüllerinin Hermes APIGateway'e taşınması",
        },
      },
      {
        name: "Contracts Workflow Rework",
        detail: {
          en: "Complete · Project 3807",
          tr: "Tamamlandı · Proje 3807",
        },
      },
      {
        name: "IAM Updates — Add Only Sync",
        detail: {
          en: "Complete · Project 12774",
          tr: "Tamamlandı · Proje 12774",
        },
      },
      {
        name: "Competency Project Phase II",
        detail: {
          en: "Complete · Project 8290",
          tr: "Tamamlandı · Proje 8290",
        },
      },
      {
        name: "Research Foundation Human Resources E-Form",
        detail: {
          en: "Complete · Project 4496",
          tr: "Tamamlandı · Proje 4496",
        },
      },
      {
        name: "Food Policy Exemption Request Portal",
        detail: {
          en: "Complete · Project 11695",
          tr: "Tamamlandı · Proje 11695",
        },
      },
      {
        name: "Harpur Student/Internal/Faculty Workflows",
        detail: {
          en: "Complete · Project 10132",
          tr: "Tamamlandı · Proje 10132",
        },
      },
      {
        name: "Brightspace Staff Integration",
        detail: {
          en: "Complete · Project 5148",
          tr: "Tamamlandı · Proje 5148",
        },
      },
      {
        name: "ETS Print Queue",
        detail: {
          en: "Complete · Project 5400",
          tr: "Tamamlandı · Proje 5400",
        },
      },
      {
        name: "Sustainable Waste Tracking Sheets",
        detail: {
          en: "Complete · Project 4362",
          tr: "Tamamlandı · Proje 4362",
        },
      },
      {
        name: "Counsel Office Online E-Form",
        detail: {
          en: "Complete · Project 6733",
          tr: "Tamamlandı · Proje 6733",
        },
      },
      {
        name: "Career Resource Google Drive",
        detail: {
          en: "Complete · Project 9685",
          tr: "Tamamlandı · Proje 9685",
        },
      },
      {
        name: "bMobi",
        detail: {
          en: "Complete · Project 1845 — App Store, auth, PrivacyIDEA 2FA, Phase III",
          tr: "Tamamlandı · Proje 1845 — mağaza, kimlik doğrulama, PrivacyIDEA 2FA, Faz III",
        },
      },
      {
        name: "ID Card Photo Upload Fix",
        detail: {
          en: "Complete · Project 5262",
          tr: "Tamamlandı · Proje 5262",
        },
      },
      {
        name: "Recycling and Contamination Dashboard",
        detail: {
          en: "Complete · Project 7352",
          tr: "Tamamlandı · Proje 7352",
        },
      },
      {
        name: "Sustainability Dorm Competition Dashboard",
        detail: {
          en: "Complete · Project 7705",
          tr: "Tamamlandı · Proje 7705",
        },
      },
      {
        name: "QR Code for Inoperable Automatic Doors",
        detail: {
          en: "Complete · Project 2847",
          tr: "Tamamlandı · Proje 2847",
        },
      },
      {
        name: "Performance Program and Evaluation System",
        detail: {
          en: "Complete · Project 502",
          tr: "Tamamlandı · Proje 502",
        },
      },
      {
        name: "Graduate Late Add/Drop/Withdrawal Workflow",
        detail: {
          en: "Complete · Project 497",
          tr: "Tamamlandı · Proje 497",
        },
      },
      {
        name: "Purchasing Contract Workflow",
        detail: {
          en: "Complete · Project 504",
          tr: "Tamamlandı · Proje 504",
        },
      },
      {
        name: "RF Phase II E-Forms (Human Resources)",
        detail: {
          en: "Complete · Project 513",
          tr: "Tamamlandı · Proje 513",
        },
      },
      {
        name: "ORCID / Identity Management",
        detail: {
          en: "Complete · Project 1434",
          tr: "Tamamlandı · Proje 1434",
        },
      },
      {
        name: "Distinguished Professors",
        detail: {
          en: "Complete · Project 2659",
          tr: "Tamamlandı · Proje 2659",
        },
      },
      {
        name: "Guest and Visitor Workflow",
        detail: {
          en: "Complete · Project 2691",
          tr: "Tamamlandı · Proje 2691",
        },
      },
      {
        name: "RF Workflow Implementation Phase IV",
        detail: {
          en: "Complete · Project 2756",
          tr: "Tamamlandı · Proje 2756",
        },
      },
      {
        name: "Clinic Supply Inventory Management System",
        detail: {
          en: "Complete · PRJ0038812",
          tr: "Tamamlandı · PRJ0038812",
        },
      },
      {
        name: "UCTD Training Software Scheduler",
        detail: {
          en: "Complete · PRJ0038809",
          tr: "Tamamlandı · PRJ0038809",
        },
      },
      {
        name: "bComply ID Card Swipe for PF Staff",
        detail: {
          en: "Complete · DMND0003897",
          tr: "Tamamlandı · DMND0003897",
        },
      },
      {
        name: "UTS Tutor Sign-in for Brightsign",
        detail: {
          en: "Complete · DMND0003884",
          tr: "Tamamlandı · DMND0003884",
        },
      },
      {
        name: "Watson College Events Calendar",
        detail: {
          en: "Complete · PRJ0036881",
          tr: "Tamamlandı · PRJ0036881",
        },
      },
      {
        name: "Faculty Reporting Phase II",
        detail: {
          en: "Complete · Project 498",
          tr: "Tamamlandı · Proje 498",
        },
      },
      {
        name: "Generic Course Syllabus Tool",
        detail: {
          en: "Complete · PRJ0036883",
          tr: "Tamamlandı · PRJ0036883",
        },
      },
      {
        name: "Outside Scholarship Form — Student Athletes",
        detail: {
          en: "Complete · DMND0003857",
          tr: "Tamamlandı · DMND0003857",
        },
      },
      {
        name: "Athletic Agreement Workflow",
        detail: {
          en: "Complete · DMND0003858",
          tr: "Tamamlandı · DMND0003858",
        },
      },
      {
        name: "Sabbatical and Title F Leave",
        detail: {
          en: "Complete · DMND0003870",
          tr: "Tamamlandı · DMND0003870",
        },
      },
    ],
  },
  {
    id: "laplace",
    levelLabel: { en: "Level 02", tr: "Seviye 02" },
    status: "in_progress",
    title: {
      en: "Founder & Head Developer",
      tr: "Kurucu & Baş Geliştirici",
    },
    company: "Laplace Apps",
    year: "2022 — Now",
    summary: {
      en: "Product studio shipping mobile products and clinic/education platforms with Flutter, Firebase, and AI integrations — including an MCP server for Laplace tooling and agents.",
      tr: "Flutter, Firebase ve yapay zeka entegrasyonlarıyla mobil ürünler ve klinik/eğitim platformları geliştiren ürün stüdyosu — Laplace araçları ve ajanları için bir MCP sunucusu dahil.",
    },
    projects: [
      {
        name: "Note Together & ChefBook",
        detail: {
          en: "Shared lists and recipe notebook apps on Flutter + Firebase.",
          tr: "Flutter + Firebase ile ortak listeler ve tarif defteri uygulamaları.",
        },
      },
      {
        name: "LOCK'D IN & Habitank",
        detail: {
          en: "Fitness accountability and pixel-aquarium habit product experiments.",
          tr: "Fitness hesap verebilirliği ve piksel akvaryum alışkanlık ürün deneyleri.",
        },
      },
      {
        name: "Laplace Apps MCP Server",
        detail: {
          en: "In progress — Model Context Protocol server so agents can use Laplace Apps tools and workflows safely.",
          tr: "Devam ediyor — ajanların Laplace Apps araçlarını ve iş akışlarını güvenle kullanması için Model Context Protocol sunucusu.",
        },
      },
    ],
  },
  {
    id: "early-career",
    levelLabel: { en: "Level 01", tr: "Seviye 01" },
    status: "cleared",
    title: {
      en: "Software Developer",
      tr: "Yazılım Geliştirici",
    },
    company: "ICS TANI · Atacan · Freelance",
    year: "2018 — 2021",
    summary: {
      en: "Patient management & remote education (.NET/Flutter), OSGB online training, and web/mobile builds for healthcare and small business.",
      tr: "Hasta yönetimi ve uzaktan eğitim (.NET/Flutter), OSGB çevrimiçi eğitim ve sağlık / küçük işletme için web-mobil projeler.",
    },
    projects: [
      {
        name: "Patient Manager",
        detail: {
          en: "Clinic records, check-ups & results with QR login and role-based UI.",
          tr: "QR giriş ve role dayalı arayüzle klinik kayıtlar, kontroller ve sonuçlar.",
        },
      },
      {
        name: "Remote Ed Portal",
        detail: {
          en: "Distance learning portal with admin tooling and auth.",
          tr: "Yönetici araçları ve kimlik doğrulamalı uzaktan eğitim portalı.",
        },
      },
    ],
  },
  {
    id: "edu-ms",
    levelLabel: { en: "Education · current", tr: "Eğitim · güncel" },
    status: "in_progress",
    title: {
      en: "M.S. Computer Science (AI)",
      tr: "Bilgisayar Bilimleri Yüksek Lisansı (YZ)",
    },
    company: "Binghamton University",
    year: "Expected May 2027",
    icon: "school",
    summary: {
      en: "Graduate study focused on artificial intelligence — deepening theory and applied AI for products and campus systems.",
      tr: "Yapay zeka odaklı yüksek lisans — ürünler ve kampüs sistemleri için teori ve uygulamalı YZ'yi derinleştirme.",
    },
    projects: [
      {
        name: "AI concentration",
        detail: {
          en: "Coursework and projects toward an AI-focused CS master's.",
          tr: "YZ odaklı bilgisayar bilimleri yüksek lisansı için dersler ve projeler.",
        },
      },
    ],
    courses: [
      { code: "CS 571", title: "Programming Languages" },
      { code: "CS 552", title: "Intro to Cloud Computing" },
      { code: "CS 515", title: "Social Media Data Sci Pipeline" },
      { code: "CS 575", title: "Design & Analysis Comp Algorit" },
      { code: "CS 565", title: "Intro to Artificial Intelligen" },
      { code: "CS 536", title: "Intro to Machine Learning" },
      { code: "CS 580P", title: "Natural Language Processing" },
      { code: "CS 551", title: "Systems Programming" },
      { code: "CS 559", title: "Science of Cyber Security" },
      { code: "CS 595", title: "Termination Project" },
    ],
  },
  {
    id: "edu-bs",
    levelLabel: { en: "Education · cleared", tr: "Eğitim · tamamlandı" },
    status: "cleared",
    title: {
      en: "B.S. Information Systems — Dual Degree",
      tr: "Bilgi Sistemleri Lisansı — Çift Diploma",
    },
    company: "Binghamton University · Istanbul Technical University",
    year: "Completed",
    icon: "school",
    summary: {
      en: "Dual bachelor's in Information Systems across Binghamton University and Istanbul Technical University — systems, software, and enterprise foundations.",
      tr: "Binghamton Üniversitesi ve İstanbul Teknik Üniversitesi'nde Bilgi Sistemleri çift lisans — sistemler, yazılım ve kurumsal temeller.",
    },
    projects: [
      {
        name: "Binghamton University",
        detail: {
          en: "B.S. Information Systems — campus and enterprise systems focus.",
          tr: "Bilgi Sistemleri Lisansı — kampüs ve kurumsal sistem odaklı.",
        },
      },
      {
        name: "Istanbul Technical University",
        detail: {
          en: "B.S. Information Systems — dual-degree partner program.",
          tr: "Bilgi Sistemleri Lisansı — çift diploma partner programı.",
        },
      },
    ],
    courses: [
      { code: "CS 110", title: "Programming Concepts & Applic" },
      { code: "FREE XXX", title: "Orientation" },
      { code: "LART XXX", title: "Liberal Arts" },
      { code: "MATH 224", title: "Differential Calculus" },
      { code: "MATH 225", title: "Integral Calculus" },
      { code: "MATH 304", title: "Linear Algebra" },
      { code: "PHYS 131", title: "Physics I" },
      { code: "CS 2XX", title: "Programming I" },
      { code: "HIST XXX", title: "Introduction to World Affairs" },
      { code: "LART XXX", title: "Liberal Art" },
      { code: "MATH 314", title: "Discrete Math" },
      { code: "PHYS 132", title: "Physics II" },
      { code: "MATH 226", title: "Integration Technique & Applicat" },
      { code: "MATH 227", title: "Infinite Series" },
      { code: "CS 345", title: "SW Engineering" },
      { code: "CS 350", title: "Operating Systems" },
      { code: "CS 375", title: "Analysis of Algorithms" },
      { code: "CS 3XX", title: "Artificial Intelligence" },
      { code: "HIST 100", title: "Turkish Revolution I" },
      { code: "MATH 300", title: "Numerical Methods" },
      { code: "CS 3XX", title: "Multimedia Systems" },
      { code: "CS 428", title: "Computer Networks" },
      { code: "CS 432", title: "Database" },
      { code: "HIST 200", title: "Turkish Revolution II" },
      { code: "MIS 323", title: "IT Sys Analysis" },
      { code: "PHIL 3XX", title: "Information Ethics" },
      { code: "CS 3XX", title: "Intro to Comp & Info Security" },
      { code: "CS 120", title: "Computer Systems I: Machine Org" },
      { code: "CS 140", title: "Programming with Objects (LEC)" },
      { code: "MIS 311", title: "Information Syst & Application" },
      { code: "OPM 311", title: "Operations Management" },
      { code: "WRIT 111", title: "Research & Writing (Rhetorically)" },
      { code: "CS 220", title: "Comp Sys II: Arch & Prog (LEC)" },
      { code: "CS 240", title: "Data Struct & Algorithms" },
      { code: "HWS 215", title: "Wellness Thru Weight Training" },
      { code: "MATH 327", title: "Probability with Stat Methods" },
      { code: "CS 342", title: "Program Design Patterns" },
      { code: "CS 402", title: "Software & Eng. Project Mgmt" },
      { code: "CS 435", title: "Introduction To Data Mining" },
      { code: "CS 485", title: "Info Systems Senior Proj I" },
      { code: "ARTS 210", title: "Graphic Design I" },
      { code: "CS 426", title: "Internet of Things" },
      { code: "CS 427", title: "Mobile Systems Security" },
      { code: "CS 444", title: "Programming for the Web" },
      { code: "CS 486", title: "Info Systems Senior Proj II" },
      { code: "GEOG 212", title: "Historical Geography (LEC)" },
    ],
    degreeCompletedNote: {
      en: "Degree completed · May 30, 2021",
      tr: "Diploma tamamlandı · 30 Mayıs 2021",
    },
  }
];

/** @deprecated Prefer milestones */
export const experience = milestones;

export interface GridItem {
  id: string;
  label: Localized<string>;
}

export const stackCategories: StackCategory[] = [
  {
    id: "mobile-frontend",
    title: { en: "Mobile & Frontend", tr: "Mobil ve Ön Uç" },
    iconId: "flutter",
    skills: [
      { id: "flutter", label: { en: "Flutter", tr: "Flutter" }, rarity: "experienced" },
      { id: "dart", label: { en: "Dart", tr: "Dart" }, rarity: "experienced" },
      { id: "react", label: { en: "React", tr: "React" }, rarity: "experienced" },
      { id: "nextjs", label: { en: "Next.js", tr: "Next.js" }, rarity: "comfortable" },
      { id: "javascript", label: { en: "JavaScript", tr: "JavaScript" }, rarity: "comfortable" },
      { id: "typescript", label: { en: "TypeScript", tr: "TypeScript" }, rarity: "comfortable" },
      { id: "htmlcss", label: { en: "HTML / CSS", tr: "HTML / CSS" }, rarity: "experienced" },
    ],
  },
  {
    id: "backend",
    title: { en: "Backend & APIs", tr: "Arka Uç ve API'ler" },
    iconId: "dotnet",
    skills: [
      { id: "dotnet", label: { en: ".NET / C#", tr: ".NET / C#" }, rarity: "experienced" },
      { id: "laravel", label: { en: "PHP / Laravel", tr: "PHP / Laravel" }, rarity: "familiar" },
      { id: "graphene", label: { en: "Graphene", tr: "Graphene" }, rarity: "comfortable" },
    ],
  },
  {
    id: "data-cloud",
    title: { en: "Data & Cloud", tr: "Veri ve Bulut" },
    iconId: "firebase",
    skills: [
      { id: "firebase", label: { en: "Firebase", tr: "Firebase" }, rarity: "experienced" },
      { id: "sql", label: { en: "SQL", tr: "SQL" }, rarity: "comfortable" },
      { id: "nosql", label: { en: "NoSQL", tr: "NoSQL" }, rarity: "comfortable" },
      { id: "docker", label: { en: "Docker", tr: "Docker" }, rarity: "comfortable" },
    ],
  },
  {
    id: "ai-engineering",
    title: { en: "AI Engineering & Automation", tr: "YZ Mühendisliği ve Otomasyon" },
    iconId: "n8n",
    skills: [
      { id: "python", label: { en: "Python", tr: "Python" }, rarity: "learning" },
      { id: "rag", label: { en: "RAG", tr: "RAG" }, rarity: "comfortable" },
      { id: "mcp", label: { en: "Model Context Protocol (MCP)", tr: "Model Context Protocol (MCP)" }, rarity: "learning" },
      { id: "agent-workflows", label: { en: "Agent Workflows", tr: "Ajan İş Akışları" }, rarity: "comfortable" },
      { id: "n8n", label: { en: "n8n", tr: "n8n" }, rarity: "comfortable" },
      { id: "cursor-automations", label: { en: "Cursor Automations", tr: "Cursor Otomasyonları" }, rarity: "comfortable" },
    ],
  },
  {
    id: "ai-models",
    title: { en: "AI Models & Assistants", tr: "YZ Modelleri ve Asistanlar" },
    iconId: "python",
    skills: [
      { id: "chatgpt", label: { en: "ChatGPT", tr: "ChatGPT" }, rarity: "experienced" },
      { id: "claude", label: { en: "Claude", tr: "Claude" }, rarity: "comfortable" },
      { id: "gemini", label: { en: "Gemini", tr: "Gemini" }, rarity: "comfortable" },
      { id: "grok", label: { en: "Grok", tr: "Grok" }, rarity: "comfortable" },
      { id: "cursor", label: { en: "Cursor", tr: "Cursor" }, rarity: "experienced" },
    ],
  },
  {
    id: "generative",
    title: { en: "Generative & Creative AI", tr: "Üretken ve Yaratıcı YZ" },
    iconId: "meshy",
    skills: [
      { id: "elevenlabs", label: { en: "ElevenLabs", tr: "ElevenLabs" }, rarity: "comfortable" },
      { id: "google-flow", label: { en: "Google Flow", tr: "Google Flow" }, rarity: "familiar" },
      { id: "google-stitch", label: { en: "Google Stitch", tr: "Google Stitch" }, rarity: "familiar" },
      { id: "google-flow-music", label: { en: "Google Flow Music", tr: "Google Flow Music" }, rarity: "familiar" },
      { id: "meshy", label: { en: "Meshy AI", tr: "Meshy AI" }, rarity: "familiar" },
    ],
  },
  {
    id: "development",
    title: { en: "Development", tr: "Geliştirme" },
    iconId: "git",
    skills: [
      { id: "git", label: { en: "Git", tr: "Git" }, rarity: "experienced" },
      { id: "vscode", label: { en: "VS Code", tr: "VS Code" }, rarity: "experienced" },
    ],
  },
];

/** Flat list derived from categories (for any legacy consumers) */
export const stackItems: GridItem[] = stackCategories.flatMap((c) =>
  c.skills.map((s) => ({ id: s.id, label: s.label })),
);

export const beyondItems: GridItem[] = [
  { id: "powerlifting", label: { en: "Powerlifting", tr: "Powerlifting" } },
  { id: "calisthenics", label: { en: "Calisthenics", tr: "Kalisteni" } },
  { id: "dance", label: { en: "Ballroom / Latin", tr: "Ballroom / Latin" } },
  { id: "snowboarding", label: { en: "Snowboarding", tr: "Snowboard" } },
  { id: "football", label: { en: "American Football", tr: "Amerikan Futbolu" } },
  { id: "volleyball", label: { en: "Volleyball", tr: "Voleybol" } },
  { id: "basketball", label: { en: "Basketball", tr: "Basketbol" } },
  { id: "chess", label: { en: "Chess", tr: "Satranç" } },
  { id: "lol", label: { en: "League of Legends", tr: "League of Legends" } },
  { id: "marvelrivals", label: { en: "Marvel Rivals", tr: "Marvel Rivals" } },
  { id: "valorant", label: { en: "Valorant", tr: "Valorant" } },
  { id: "travel", label: { en: "Travel", tr: "Seyahat" } },
  { id: "vlogs", label: { en: "Vlogs", tr: "Vlog" } },
  { id: "creator", label: { en: "Creator", tr: "İçerik üretici" } },
];

export const beyondMilestones: MilestoneItem[] = [
  {
    id: "leadership",
    levelLabel: { en: "Leadership", tr: "Liderlik" },
    status: "in_progress",
    title: {
      en: "Leadership experiences",
      tr: "Liderlik deneyimleri",
    },
    company: "BU · ITU · Campus committees",
    year: "2018 — Present",
    summary: {
      en: "Teaching, organizing dance communities, and serving on university search committees.",
      tr: "Dans topluluklarını öğretmek ve organize etmek; üniversite arama komitelerinde görev almak.",
    },
    projects: [
      {
        name: "BU Ballroom Dance Instructor & Organizer",
        detail: {
          en: "Binghamton, NY · Aug 2020–Present — teaching international Latin and organizing team events.",
          tr: "Binghamton, NY · Ağu 2020–Günümüz — uluslararası Latin dansı öğretimi ve takım etkinlikleri organizasyonu.",
        },
      },
      {
        name: "ITU International Dance Club Organizer",
        detail: {
          en: "Istanbul, Turkey · Oct 2018–May 2021 — board meetings, socials, dance nights, and lesson schedules.",
          tr: "İstanbul · Eki 2018–May 2021 — yönetim toplantıları, sosyal buluşmalar, dans geceleri ve ders programı.",
        },
      },
      {
        name: "ITU International Dance Competition Organizer",
        detail: {
          en: "Istanbul · Oct 2018 & Oct 2019 — coordinated teams from multiple universities for a full competition day.",
          tr: "İstanbul · Eki 2018 & Eki 2019 — birçok üniversiteden takımları koordine ederek tam bir yarışma günü.",
        },
      },
      {
        name: "BU Search Committees",
        detail: {
          en: "Binghamton, NY · Sept 2021–Present — served on three search committees over recent years.",
          tr: "Binghamton, NY · Eyl 2021–Günümüz — son yıllarda üç arama komitesinde görev.",
        },
      },
    ],
  },
  {
    id: "athletic",
    levelLabel: { en: "Athletic", tr: "Spor" },
    status: "in_progress",
    title: {
      en: "Athletic experiences",
      tr: "Spor deneyimleri",
    },
    company: "Competition · training · campus clubs",
    year: "2012 — Present",
    summary: {
      en: "Licensed dance pathways, current strength training, and team sports from high school through university.",
      tr: "Lisanslı dans yolları, güncel kuvvet antrenmanı ve liseden üniversiteye takım sporları.",
    },
    projects: [
      {
        name: "International Latin dancing",
        detail: {
          en: "Licensed pathway across BU & ITU — Novice (Aug 2023–Present), Open Level (Sep 2022–Present), D Level ITU (Sep 2020–Present), E Level ITU (2016–2020), Gold Level BU (2018–2022).",
          tr: "BU & İTÜ boyunca lisanslı yol — Novice (Ağu 2023–Günümüz), Open Level (Eyl 2022–Günümüz), D Seviye İTÜ (Eyl 2020–Günümüz), E Seviye İTÜ (2016–2020), Gold Seviye BU (2018–2022).",
        },
      },
      {
        name: "Calisthenics",
        detail: {
          en: "Current bodyweight strength and skill training.",
          tr: "Güncel vücut ağırlığı kuvvet ve beceri antrenmanı.",
        },
      },
      {
        name: "Gym / Powerlifting",
        detail: {
          en: "Current barbell training — strength under progressive load.",
          tr: "Güncel barbell antrenmanı — progresif yük altında kuvvet.",
        },
      },
      {
        name: "Snowboarding",
        detail: {
          en: "Intermediate · ITU KIS, Istanbul · Sep 2019–May 2020.",
          tr: "Orta seviye · İTÜ KIS, İstanbul · Eyl 2019–May 2020.",
        },
      },
      {
        name: "American Football",
        detail: {
          en: "ITU Hornets, Istanbul · Sep 2016–May 2017.",
          tr: "İTÜ Hornets, İstanbul · Eyl 2016–May 2017.",
        },
      },
      {
        name: "Fin swimming",
        detail: {
          en: "Licensed · ISSK, Istanbul · Sep 2012–May 2013.",
          tr: "Lisanslı · ISSK, İstanbul · Eyl 2012–May 2013.",
        },
      },
      {
        name: "Volleyball",
        detail: {
          en: "Licensed · Bahçelievler High School, Istanbul · Sep 2012–May 2013.",
          tr: "Lisanslı · Bahçelievler Lisesi, İstanbul · Eyl 2012–May 2013.",
        },
      },
    ],
  },
  {
    id: "volunteer",
    levelLabel: { en: "Volunteer", tr: "Gönüllü" },
    status: "in_progress",
    title: {
      en: "Volunteer work",
      tr: "Gönüllü çalışmalar",
    },
    company: "BU Ballroom · Tioga United Way",
    year: "2021 — Present",
    summary: {
      en: "Coaching Latin dance on campus and teaching in community programs with Dancing United with the Starz.",
      tr: "Kampüste Latin dansı koçluğu ve Dancing United with the Starz ile toplum programlarında öğretim.",
    },
    projects: [
      {
        name: "BU Ballroom Team coaching",
        detail: {
          en: "Binghamton, NY · Aug 2021–Present — coaching and teaching Latin dances to the university ballroom team.",
          tr: "Binghamton, NY · Ağu 2021–Günümüz — üniversite ballroom takımına Latin dansları koçluğu ve öğretimi.",
        },
      },
      {
        name: "Dancing United with the Starz",
        detail: {
          en: "Owego, NY · Aug 2023–Present — teaching dances with Tioga United Way community program.",
          tr: "Owego, NY · Ağu 2023–Günümüz — Tioga United Way toplum programında dans öğretimi.",
        },
      },
    ],
  },
];
