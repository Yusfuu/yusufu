"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { href: "#about", label: "about" },
  { href: "#projects", label: "projects" },
  { href: "#skills", label: "stack" },
  { href: "#contact", label: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsub = scrollY.on("change", (y) => setScrolled(y > 50));
    return () => unsub();
  }, [scrollY]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "20px 60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: scrolled ? "rgba(6,6,9,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
        transition: "background 0.4s, backdrop-filter 0.4s, border 0.4s",
      }}
    >
      {/* Logo */}
      <Link href="/" style={{ textDecoration: "none" }}>
        <motion.span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "15px",
            color: "#00d4ff",
            letterSpacing: "0.05em",
          }}
          whileHover={{ scale: 1.05 }}
        >
          yh<span style={{ color: "#a855f7" }}>.</span>dev
        </motion.span>
      </Link>

      {/* Links */}
      <div style={{ display: "flex", gap: "36px" }}>
        {navLinks.map((link, i) => (
          <motion.a
            key={link.href}
            href={link.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i + 0.3 }}
            style={{
              color: "#6b7280",
              textDecoration: "none",
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              position: "relative",
            }}
            whileHover={{ color: "#00d4ff" }}
          >
            {link.label}
          </motion.a>
        ))}
      </div>

      {/* CTA */}
      <motion.a
        href="https://github.com/Yusfuu"
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          color: "#00d4ff",
          textDecoration: "none",
          border: "1px solid rgba(0,212,255,0.3)",
          padding: "8px 18px",
          borderRadius: "4px",
        }}
        whileHover={{
          scale: 1.05,
          borderColor: "rgba(0,212,255,0.8)",
          boxShadow: "0 0 20px rgba(0,212,255,0.2)",
        }}
        whileTap={{ scale: 0.97 }}
      >
        github
      </motion.a>
    </motion.nav>
  );
}
