import user_image from "./user-image.jpg";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import happy_icon from "./happy_icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  happy_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

export const workData = [
  {
    title: "VeloPath",
    topic: "Smart Bicycle Navigation & Hazard Intelligence System",
    bgImage: "/work-2.png",
    description:
      "Research-driven intelligent bicycle navigation system focused on safety-aware routing and real-time hazard intelligence. Designed backend verification logic for crowdsourced hazard reports, incorporating reputation weighting and temporal confidence decay to maintain data reliability. Contributed to system architecture, API design, and hazard validation workflows within a multi-component research project. Led coordination across team members and ensured modular separation of research components for independent evaluation.",
    skills: [
      "System Design",
      "Backend Architecture",
      "Crowdsourced Data Verification",
      "REST APIs",
      "Machine Learning Integration",
      "Python",
      "MongoDB",
      "Research & Evaluation",
    ],
    demo: "",
    source:
      "https://github.com/NisalMallawaarachchi/velopath-smart-bicycle-navigation-app",
  },
  {
    title: "AI Expense Tracker",
    topic: "AI-Powered Financial Analytics Platform",
    bgImage: "/work-3.png",
    description:
      "AI-powered expense tracking web application built with Next.js 15 and a fully serverless architecture. Implemented secure authentication with Clerk and designed a real-time analytics dashboard with dynamic charts, dark/light mode support, and responsive UI. Integrated AI-driven expense categorization and financial insights using OpenRouter, enabling automated classification, spending trend analysis, and personalized recommendations. Focused on scalable data modeling, server actions, and production-ready deployment on Vercel.",
    skills: [
      "Next.js 15",
      "TypeScript",
      "Prisma",
      "Neon PostgreSQL",
      "Clerk Authentication",
      "OpenRouter (AI)",
      "Chart.js",
      "Tailwind CSS",
      "Vercel",
    ],
    demo: "https://your-ai-expense-tracker-demo-url",
    source: "https://github.com/NisalMallawaarachchi/next-ai-expense-tracker",
  },
  {
    title: "Horizon Homes",
    topic: "Full-Stack Real Estate Platform",
    bgImage: "/work-1.png",
    description:
      "Full-stack MERN real estate platform inspired by industry-grade property portals. Implemented secure JWT + Google OAuth authentication, protected routes, and role-based access control. Built advanced property search with optimized MongoDB queries (filters, sorting, pagination) and Redux Toolkit for scalable state management. Focused on backend architecture, data modeling, and production-ready API design",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "React",
      "Redux Toolkit",
      "JWT Authentication",
      "Google OAuth",
      "Tailwind CSS",
      "Render",
    ],

    demo: "https://horizon-homes-0kuz.onrender.com/",
    source: "https://github.com/NisalMallawaarachchi/horizon-homes",
  },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Web design",
    description: "Web development is the process of building, programming...",
    link: "",
  },
  {
    icon: assets.mobile_icon,
    title: "Mobile app",
    description:
      "Mobile app development involves creating software for mobile devices...",
    link: "",
  },
  {
    icon: assets.ui_icon,
    title: "UI/UX design",
    description:
      "UI/UX design focuses on creating a seamless user experience...",
    link: "",
  },
  {
    icon: assets.graphics_icon,
    title: "Graphics design",
    description: "Creative design solutions to enhance visual communication...",
    link: "",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Tech Stack",
    description:
      "JavaScript (Node.js, React), Java (Spring Boot), Python, PHP | MongoDB, MySQL, PostgreSQL",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description:
      "BSc (Hons) in Information Technology.\nSpecializing in Information Technology — SLIIT",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Experience & Projects",
    description:
      "Assistant Team Lead experience and 10+ real-world projects across web, backend, and automation",
  },
];

export const toolsData = [
  assets.vscode,
  assets.firebase,
  assets.mongodb,
  assets.figma,
  assets.git,
];

export const blogsData = [
  {
    title: "You Don’t Need to Be a Genius to Code",
    description:
      "Opening article of the 'Mind Over Syntax' series, challenging common myths around programming. Focuses on mindset, learning strategies, and practical growth paths for aspiring developers.",
    date: "2025-07-22",
    link: "https://nisal.hashnode.dev/series/mind-over-syntax",
  },
];
