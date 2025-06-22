import { WhatWeDoItem } from "@/types/whatWeDo";

const whatWeDoData: WhatWeDoItem[] = [
  {
    id: 1,
    icon: "/images/icon/icon-01.svg", // Placeholder
    title: "Mental Health Chatbots with AI",
    description: "We build intelligent conversational agents that deliver authentic, human-like support. Our flagship product, WellCareBot, uses Langchain, Retrieval-Augmented Generation (RAG), Flutter, and Firebase to provide real-time mental wellness assistance.",
    details: [
      "Smart context-aware responses",
      "Flask-based APIs with scalable architecture",
      "Firebase-powered chat history and storage",
      "Professional cross-platform mobile UI",
    ],
    projectImages: ["/images/projects/wellcarebot-01.png"], // Placeholder image
  },
  {
    id: 2,
    icon: "/images/icon/icon-02.svg", // Placeholder
    title: "Cross-Platform Mobile App Development",
    description: "We transform business ideas into fully functional mobile apps using Flutter and integrate them with cloud or web systems.",
    details: [
      "Web-to-mobile app conversions",
      "Offline-ready apps with database sync",
      "Modern, clean UI/UX with Material and Cupertino styles",
    ],
    projectImages: ["/images/projects/chemali-01.png"], // Placeholder image
  },
  {
    id: 3,
    icon: "/images/icon/icon-03.svg", // Placeholder
    title: "Custom POS & Inventory Solutions",
    description: "We develop business-specific Point-of-Sale (POS) and Inventory Management Systems to track sales, stock, and customer activity.",
    details: [
      "Canteen POS System: Designed for schools, with purchase records, receipt generation, and student/teacher transaction histories.",
      "Kensoft POS: Tailored for hardware stores, optimized for simplicity and real-time performance.",
      "ChemAli Stock Manager: Multi-location inventory tracking, built in Flutter, with real-time updates and intuitive dashboards.",
    ],
    projectImages: [
      "public/images/projects/Screenshot 2025-06-22 213914.png",
      "/images/projects/Screenshot 2025-06-22 214109.png",
      "./images/projects/Screenshot 2025-06-22 214151.png",
      "../../images/projects/Screenshot 2025-06-22 214244.png",
      "../../../assets/images/logo-transparent.png"
    ],
  },
  {
    id: 4,
    icon: "/images/icon/icon-04.svg", // Placeholder
    title: "Travel & Booking Platforms",
    description: "We help travel and hospitality businesses boost visibility through elegant and efficient web solutions.",
    details: [
      "Static and dynamic websites with itinerary showcase",
      "Custom booking inquiry forms",
      "Fully mobile-responsive experiences",
      "Built with React, Next.js, or Vanilla JavaScript",
      "Recent project: Wunderschön Safaris website – A mobile-first platform for showcasing safaris and managing customer interest.",
    ],
    projectImages: ["/images/projects/wunderschon-safaris-01.png"], // Placeholder image
  },
  {
    id: 5,
    icon: "/images/icon/icon-05.svg", // Placeholder
    title: "Website Development with Modern Frameworks",
    description: "We design modern, responsive websites using React, JavaScript (ES6+), and Next.js — optimized for performance, SEO, and user experience.",
    details: [
      "Landing pages, dashboards, and admin portals",
      "API integration and backend communication",
      "Server-side rendering (SSR) and static site generation (SSG)",
    ],
    projectImages: [], // No specific project images provided for this category
  },
];

export default whatWeDoData;