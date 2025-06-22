"use client";
import React, { useState } from "react";
import SectionHeader from "../Common/SectionHeader";
import whatWeDoData from "./whatWeDoData";
import SingleWhatWeDo from "./SingleWhatWeDo";
import { motion } from "framer-motion";

const WhatWeDo = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      emoji: "💡",
      title: "Intelligent, Scalable Digital Solutions",
      description: "At Generative Africa, we craft intelligent, scalable digital solutions that drive real-world impact. From AI-driven platforms to dynamic web and mobile applications, our team delivers fast, modern software using cutting-edge technologies like Flutter, React, JavaScript, Python, and cloud systems.",
      features: [],
      projects: []
    },
    {
      id: 2,
      emoji: "💬",
      title: "Mental Health Chatbots with AI",
      description: "We build intelligent conversational agents that deliver authentic, human-like support. Our flagship product, WellCareBot, uses Langchain, Retrieval-Augmented Generation (RAG), Flutter, and Firebase to provide real-time mental wellness assistance.",
      features: [
        "Smart context-aware responses",
        "Flask-based APIs with scalable architecture",
        "Firebase-powered chat history and storage",
        "Professional cross-platform mobile UI"
      ],
      projects: [
        {
          name: "WellCareBot",
          description: "AI-powered mental health support chatbot presented at A2SV 2024 AI for Impact Hackathon semifinals"
        }
      ]
    },
    {
      id: 3,
      emoji: "📱",
      title: "Cross-Platform Mobile App Development",
      description: "We transform business ideas into fully functional mobile apps using Flutter and integrate them with cloud or web systems.",
      features: [
        "Web-to-mobile app conversions",
        "Offline-ready apps with database sync",
        "Modern, clean UI/UX with Material and Cupertino styles"
      ],
      projects: [
        {
          name: "ChemAli Stock Manager",
          description: "Multi-location inventory tracking, built in Flutter, with real-time updates and intuitive dashboards"
        }
      ]
    },
    {
      id: 4,
      emoji: "🛒",
      title: "Custom POS & Inventory Solutions",
      description: "We develop business-specific Point-of-Sale (POS) and Inventory Management Systems to track sales, stock, and customer activity.",
      features: [
        "Real-time inventory tracking",
        "Receipt generation and transaction histories",
        "Multi-location support",
        "Customizable for different business types"
      ],
      projects: [
        {
          name: "Canteen POS System",
          description: "Designed for schools, with purchase records, receipt generation, and student/teacher transaction histories"
        },
        {
          name: "Kensoft POS",
          description: "Tailored for hardware stores, optimized for simplicity and real-time performance"
        }
      ]
    },
    {
      id: 5,
      emoji: "🧭",
      title: "Travel & Booking Platforms",
      description: "We help travel and hospitality businesses boost visibility through elegant and efficient web solutions.",
      features: [
        "Static and dynamic websites with itinerary showcase",
        "Custom booking inquiry forms",
        "Fully mobile-responsive experiences",
        "Built with React, Next.js, or Vanilla JavaScript"
      ],
      projects: [
        {
          name: "Wunderschön Safaris",
          description: "A mobile-first platform for showcasing safaris and managing customer interest"
        }
      ]
    },
    {
      id: 6,
      emoji: "🕸️",
      title: "Website Development with Modern Frameworks",
      description: "We design modern, responsive websites using React, JavaScript (ES6+), and Next.js — optimized for performance, SEO, and user experience.",
      features: [
        "Landing pages, dashboards, and admin portals",
        "API integration and backend communication",
        "Server-side rendering (SSR) and static site generation (SSG)",
        "Performance and SEO optimization"
      ],
      projects: []
    }
  ];

  const technologies = [
    { category: "Languages & Frameworks", items: ["Flutter", "React", "JavaScript (ES6+)", "Python", "Django", "Flask"] },
    { category: "AI/ML", items: ["Langchain", "RAG", "Prompt Engineering"] },
    { category: "Databases", items: ["Firebase", "SQLite", "PostgreSQL"] },
    { category: "Cloud & DevOps", items: ["REST APIs", "CI/CD", "GitHub Actions"] },
    { category: "Design", items: ["Responsive UI", "Clean UX", "Material Design"] }
  ];

  return (
    <>
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* Header Section */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top mx-auto text-center"
          >
            <SectionHeader
              headerInfo={{
                title: "🚀 What We Do",
                subtitle: "Pioneering AI Innovation for Africa's Future",
                description: "At Generative Africa, we are dedicated to empowering the continent through cutting-edge AI and digital solutions. We craft intelligent, scalable platforms and dynamic web/mobile applications that drive real-world impact, leveraging technologies like Flutter, React, JavaScript, Python, and robust cloud systems. Our mission is to foster a new era of technological advancement and economic growth across Africa."
              }}
            />
          </motion.div>

          {/* Services Grid */}
          <div className="mt-15 grid gap-7.5 md:grid-cols-2 lg:mt-20 xl:mt-25 xl:gap-12.5">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="animate_top group relative overflow-hidden rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-[50%] bg-primary/5 text-3xl">
                    {service.emoji}
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle2">
                      {service.title}
                    </h3>
                    <p className="mb-5 text-black dark:text-white">
                      {service.description}
                    </p>
                    
                    {/* Features List */}
                    <ul className="mb-5 space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2.5 text-sm text-black dark:text-white">
                          <span className="flex h-1.5 w-1.5 rounded-full bg-primary"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Projects Section */}
                    {service.projects.length > 0 && (
                      <div className="mt-5">
                        <button
                          onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                          className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primaryho"
                        >
                          <span>View Projects</span>
                          <svg
                            className={`h-4 w-4 transition-transform ${expandedService === service.id ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        
                        {expandedService === service.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-3 space-y-3"
                          >
                            {service.projects.map((project, idx) => (
                              <div key={idx} className="rounded-lg bg-gray-50 p-4 dark:bg-blackho">
                                <h4 className="font-medium text-black dark:text-white">{project.name}</h4>
                                <p className="mt-1 text-sm text-black dark:text-white">{project.description}</p>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technologies Section */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="animate_top mx-auto mt-15 max-w-4xl text-center lg:mt-20 xl:mt-25"
          >
            <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
              💡 Technologies We Use
            </h3>
            
            <div className="grid gap-7.5 md:grid-cols-2 lg:grid-cols-3">
              {technologies.map((tech, index) => (
                <div key={index} className="rounded-lg border border-white bg-white p-6 shadow-solid-3 dark:border-strokedark dark:bg-blacksection">
                  <h4 className="mb-4 font-semibold text-black dark:text-white">{tech.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {tech.items.map((item, idx) => (
                      <span
                        key={idx}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary dark:bg-primary/20"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default WhatWeDo;
