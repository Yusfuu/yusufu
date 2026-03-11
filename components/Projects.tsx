"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    id: 1,
    num: "01",
    name: "MarocShip Delivery",
    desc: "Microservice delivery API architecture for MarocShip agency. Built with Node.js, TypeScript, and Swagger (OpenAPI). Features CI/CD via GitHub Actions.",
    tech: ["Node.js", "TypeScript", "Swagger", "Microservices"],
    url: "https://github.com/Yusfuu/MarocShip-Delivery",
    accent: "#00d4ff",
  },
  {
    id: 2,
    num: "02",
    name: "GraphQL TypeScript Boilerplate",
    desc: "GraphQL-first boilerplate with Apollo Server, Node Express, TypeScript, and blazing-fast SWC compilation. Production-ready from day one.",
    tech: ["GraphQL", "Apollo", "TypeScript", "SWC"],
    url: "https://github.com/Yusfuu/graphql-typescript-boilerplate",
    accent: "#a855f7",
  },
  {
    id: 3,
    num: "03",
    name: "Node TypeScript Boilerplate",
    desc: "A production-grade Node.js + TypeScript starter. 14 GitHub stars. Structured for scaling with a clean src layout and SWC for fast builds.",
    tech: ["Node.js", "TypeScript", "SWC", "Jest"],
    url: "https://github.com/Yusfuu/node-typescript-boilerplate",
    accent: "#00d4ff",
  },
  {
    id: 4,
    num: "04",
    name: "React Template Starter",
    desc: "Lightning-fast React project scaffolding with Vite and TypeScript. Designed to eliminate boilerplate friction and get building immediately.",
    tech: ["React", "TypeScript", "Vite"],
    url: "https://github.com/Yusfuu/react-template-starter",
    accent: "#a855f7",
  },
  {
    id: 5,
    num: "05",
    name: "Lightweight PHP Framework",
    desc: "A minimal PHP framework for building web applications and REST APIs. Simple structure perfect for understanding MVC fundamentals.",
    tech: ["PHP", "MVC", "REST"],
    url: "https://github.com/Yusfuu/Lightweight-PHP-Framework-For-Web-and-APIs",
    accent: "#00d4ff",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        position: "relative",
        zIndex: 1,
        padding: "140px 60px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          letterSpacing: "0.2em",
          color: "#00d4ff",
          textTransform: "uppercase",
          marginBottom: "20px",
        }}
      >
        02 / work
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.1 }}
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "64px",
          lineHeight: 0.95,
          marginBottom: "72px",
          color: "#f0f0f0",
        }}
      >
        Selected Projects
      </motion.h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: "24px",
        }}
      >
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.1 + 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -14;
    setTilt({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setTilt({ x: 0, y: 0 });
        setHovered(false);
      }}
      style={{
        background: "rgba(255,255,255,0.018)",
        border: `1px solid ${hovered ? `rgba(${project.accent === "#00d4ff" ? "0,212,255" : "168,85,247"},0.35)` : "rgba(255,255,255,0.07)"}`,
        borderRadius: "12px",
        padding: "32px",
        transform: `perspective(900px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        transition: "border-color 0.3s, box-shadow 0.3s, transform 0.08s ease-out",
        boxShadow: hovered ? `0 24px 60px ${project.accent}18` : "none",
        cursor: "pointer",
        height: "100%",
      }}
    >
      {/* Top row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "20px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: project.accent === "#00d4ff" ? "#00d4ff" : "#a855f7",
            opacity: 0.7,
          }}
        >
          {project.num}
        </span>
        <motion.a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          animate={{ color: hovered ? project.accent : "#374151" }}
          style={{
            textDecoration: "none",
            fontFamily: "var(--font-mono)",
            fontSize: "18px",
            transition: "color 0.3s",
          }}
        >
          ↗
        </motion.a>
      </div>

      <h3
        style={{
          fontSize: "18px",
          fontWeight: 600,
          color: "#f0f0f0",
          marginBottom: "14px",
          lineHeight: 1.3,
        }}
      >
        {project.name}
      </h3>

      <p
        style={{
          fontSize: "14px",
          color: "#9ca3af",
          lineHeight: 1.75,
          marginBottom: "24px",
        }}
      >
        {project.desc}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {project.tech.map((t) => (
          <span
            key={t}
            style={{
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "4px",
              padding: "3px 10px",
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "#6b7280",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
