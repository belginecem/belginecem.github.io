
import React from 'react';
import { Project, Job, Education, Certificate } from './types';

export const PROFILE = {
  name: "Ecemnur Belgin",
  title: "Unity Developer",
  email: "belginecem@gmail.com",
  linkedin: "linkedin.com/in/ecemnurbelgin",
  github: "github.com/belginecem",
  summary: "Unity Developer with experience in cross-platform game and application development using C#. Focused on clean architecture, performance optimization, and delivering maintainable, scalable software solutions."
};

export const SKILLS = [
  "Unity 3D/2D", "C# Programming", "OOP & Design Patterns", "Mobile Development (iOS/Android)", 
  "Git & Version Control", "LiveOps & Analytics", "SDK Integration", "Performance Optimization",
  "Server Communication / REST API Integration", "ScriptableObjects" , "Profiling & Memory Management"
];

export const LANGUAGES = [
  { lang: "Turkish", level: "Native" },
  { lang: "English", level: "Fluent" },
  { lang: "German", level: "Elementary" }
];

export const EXPERIENCE: Job[] = [
  {
    company: "Sugar Technology",
    role: "Unity Developer",
    period: "04.2024 - Present",
    description: "Unity Developer at Rapid Render, an AI-powered interior design and rendering application. Integrated AI agent and image-to-room-plan features, implemented new features, enhance functionality, fix bugs, and support multi-platform builds (Windows, MacOS, iOS, Android, VR, Kiosk) to ensure smooth performance and user experience. Actively contributed to in-app purchase implementation and store publishing processes."
  },
  {
    company: "On Off Games",
    role: "Game Developer",
    period: "11.2022 - 11.2023",
    description: "Game Developer at On Off Games, developing, deploying, and maintaining hyper-casual and hybrid-casual mobile games using Unity3D. Designed and implemented core gameplay features, managed LiveOps and analytics, and integrated third-party SDKs to enhance player engagement. Key projects include Mega Bottle Rush, Inventory Sorting, and Survivor Insects.io and more."
  },
  {
    company: "BluTV",
    role: "Mobile Software Development Intern",
    period: "07.2019 - 09.2019",
    description: "Mobile Software Development Intern at BluTV, developed Android applications including a film app and a maps app. Gained hands-on experience in software development lifecycle and mobile app deployment. Skilled in Java, Android Studio, and Firebase."
  },
  {
    company: "Medianova CDN",
    role: "Software Development Intern",
    period: "06.2018 - 08.2018",
    description: "Completed comprehensive web development training, building hands-on projects including a library app. Skilled in PHP, CodeIgniter, MySQL and HTML, with strong knowledge of software development methodologies."
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "Yıldız Technical University",
    degree: "MSc. in Computer Engineering",
    period: "10.2020 - 06.2024 (incomplete)"
  },
  {
    institution: "Beykent University",
    degree: "Computer Engineering (Full Scholarship)",
    period: "09.2015 - 06.2020"
  },
  {
    institution: "Czech University of Life Sciences Prague",
    degree: "Informatics (Erasmus+ Exchange Program)",
    period: "01.2019 - 06.2019"
  }
];

export const CERTIFICATES: Certificate[] = [
  { issuer: "Coursera", title: "Google Project Management Certificate" },
  { issuer: "Udacity", title: "Google Developers Challenge Scholarship – Android Basics" },
  { issuer: "Google Game and Application Academy", title: "Trainee (Unity Beginner & Advanced)" }
];

export const PROJECTS: Project[] = [
  {
    id: "rapid-render",
    title: "Rapid Render",
    category: "Application",
    platform: "Cross-Platform",
    description: "AI-powered smart interior design application that accelerates 3D design, high-resolution rendering, and immersive VR/AR presentations.",
    longDescription: `Rapid Render is an AI-supported interior design application that speeds up your design process. Its library includes more than 24,000 real products and allows high-resolution rendering in seconds. The app enables fast 3D design with 3D scanning, VR/AR integration, and presents designs to customers immersively with VR/AR devices and cloud rendering.`,
    links: [
      { text: "Microsoft Store", url: "https://apps.microsoft.com/detail/9pllkds49kkm?ocid=webpdpshare" },
      { text: "App Store", url: "https://apps.apple.com/us/app/rapidrender/id6445841092" },
      { text: "Google Play", url: "https://play.google.com/store/apps/details?id=com.sugartechnology.RapidRender&pcampaignid=web_share" }
    ] ,
    imageUrls: [
      "/images/rr_1.png",
      "/images/rr_2.png",
      "/images/rr_3.png",
      "/images/rr_4.png",
      "/images/rr_5.png"
    ],
    videoUrl: "/videos/rr.mp4",
    techStack: ["Unity", "C#", "AI Integration", "Rendering", "UI/UX"],
    features: ["Real-time rendering", "AI-based furniture suggestion", "Cross-platform cloud sync", "High-performance asset management"]
  },
  {
    id: "mega-bottle-rush",
    title: "Mega Bottle Rush",
    category: "Simulation Game",
    platform: "Android",
    description: "Developed independently. Worked on gameplay mechanics, UI design, and level progression.",
    imageUrls:[
      "/images/megabottle1.png",
      "/images/megabottle2.png",
      "/images/megabottle3.png",
      "/images/megabottle4.png"
    ],
    techStack: ["Unity", "C#"],
    features: ["Physics", "Merge"],
  },
  {
    id: "inventory-sorting",
    title: "Inventory Sorting",
    category: "Puzzle Game",
    platform: "Android",
    description: "Developed independently. Focused on gameplay mechanics, UI design, and level progression.",
    imageUrls:[
      "/images/pz1.png",
      "/images/pz2.png",
      "/images/pz3.png",
      "/images/pz4.png",
      "/images/pz5.png",
    ] ,
    techStack: ["Unity", "C#"],
    features: ["Drag and drop", "Grid-based inventory system", "Puzzle"]
  },
  {
    id: "survivor-insects",
    title: "Survivor Insects.io",
    category: "Arcade Game",
    platform: "Android",
    description: "Developed in collaboration with another developer. Implemented core gameplay mechanics and UI.",
    longDescription: "An io-style arcade survival game.",
    imageUrls:[
      "/images/inse1.png",
      "/images/inse2.png",
      "/images/inse3.png",
      "/images/inse4.png",
    ] ,
    videoUrl: "https://www.youtube.com/embed/7qe3js4__cQ",
    techStack: ["Unity", "AI Navigation", "C#", "Object Pooling"],
    features: ["AI Pathfinding", "Skill System"]
  },
  {
    id: "survivor-rats",
    title: "Survivor Rats.io",
    category: "Arcade Game",
    platform: "Android",
    description: "Developed in collaboration with another developer. Implemented core gameplay mechanics and UI.",
    longDescription: "An io-style arcade survival game.",
    imageUrls:[
      "/images/rats1.png",
      "/images/rats2.png",
      "/images/rats3.png",
      "/images/rats4.png",
      "/images/rats5.png"
    ] ,
    techStack: ["Unity", "AI Navigation", "C#", "Object Pooling"],
    features: ["AI Pathfinding", "Skill System"]
  },
  {
    id: "alphabet-epic-rush",
    title: "Alphabet: Epic Rush",
    category: "Runner Game",
    platform: "Android",
    description: "Developed in collaboration with another developer. Worked on monetization, IAP and SDK integrations",
    imageUrls:[
      "/images/a1.png",
      "/images/a2.png",
      "/images/a3.png"
    ] ,
    videoUrl: "https://www.youtube.com/embed/0HrFoclt5Eo",
    techStack: ["Unity", "C#"],
    features: ["Runner", "Spline", "Merge"]
  },
  {
    id: "flash-action-master",
    title: "Flash Action Master 3D",
    category: "Action Game",
    platform: "Cross-Platform",
    description: "Developed new features and levels to existing project. Integrated IAP and Analytics SDK's",
    imageUrls:[
      "/images/fla.png",
      "/images/fla2.png",
      "/images/fla3.png",
      "/images/fla4.png",
      "/images/fla5.png",
    ],
    videoUrl: "https://www.youtube.com/embed/1xIcCIPUKs4?si=ZuYsSuoxi2Kjvc9y",
    techStack: ["Unity", "Animation Rigging"],
    features: ["Ragdoll physics"],
    links: [
      { text: "App Store", url: "https://apps.apple.com/tr/app/flash-action-master-3d/id1643607344?l=tr" },
      { text: "Google Play Store", url: "https://play.google.com/store/apps/details?id=com.FatFinger.FlashActionMaster&pcampaignid=web_share" }
    ]
  },
  {
    id: "cube-tangle",
    title: "Cube Tangle",
    category: "Puzzle Game",
    platform: "iOS",
    description: "Developed in collaboration with another developer for iOS. Worked on level design, SDK and IAP integrations and publishing processes.",
    imageUrls:[
      "/images/cube1.png",
      "/images/cube2.png",
      "/images/cube3.png",
      "/images/cube4.png",
      "/images/cube5.png",
    ],
    links: [
      { text: "App Store", url: "https://apps.apple.com/tr/app/cube-tangle/id6468890142" },
    ],
    techStack: ["Unity", "Rope Physics"],
    features: ["3D puzzles", "Skin Inventory"]
  },
  {
    id: "smurf-cat-crowd",
    title: "Smurf Cat Crowd",
    category: "Runner Game",
    platform: "Android",
    description: "Worked on reskin of an old project, added new features and implemented monetization and IAP SDK's.",
    imageUrls:[
      "/images/smurf1.png",
      "/images/smurf2.png",
      "/images/smurf3.png",
      "/images/smurf4.png",
      "/images/smurf5.png"
    ] ,
    techStack: ["Unity", "Object Pooling"],
    features: ["Endless Runner", "Obstacles"]
  }
];
