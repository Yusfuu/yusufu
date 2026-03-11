"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOADER_KEY = "yh_loaded";

export default function LoadingScreen() {
  const [phase, setPhase] = useState<"counting" | "reveal" | "done">("counting");
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Only show once per session
    if (sessionStorage.getItem(LOADER_KEY)) {
      setPhase("done");
      return;
    }
    setShow(true);

    // Count 0 → 100
    let start = 0;
    const step = () => {
      start += Math.floor(Math.random() * 12) + 3;
      if (start >= 100) {
        setCount(100);
        setTimeout(() => setPhase("reveal"), 400);
        return;
      }
      setCount(start);
      setTimeout(step, 40 + Math.random() * 60);
    };
    setTimeout(step, 300);
  }, []);

  useEffect(() => {
    if (phase === "reveal") {
      setTimeout(() => {
        setPhase("done");
        sessionStorage.setItem(LOADER_KEY, "1");
      }, 1200);
    }
  }, [phase]);

  if (!show || phase === "done") return null;

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          key="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 10000,
            background: "#060609",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {/* Grid */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(rgba(0,212,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,255,0.04) 1px,transparent 1px)",
              backgroundSize: "64px 64px",
              opacity: 0.5,
            }}
          />

          {/* Scanning line */}
          <motion.div
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              height: "1px",
              background: "linear-gradient(90deg, transparent, #00d4ff, transparent)",
              opacity: 0.4,
            }}
          />

          {/* Logo mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "80px",
              color: "#f0f0f0",
              letterSpacing: "0.05em",
              lineHeight: 1,
              marginBottom: "48px",
            }}
          >
            yh
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              style={{ color: "#00d4ff" }}
            >
              .
            </motion.span>
          </motion.div>

          {/* Progress bar */}
          <div
            style={{
              width: "240px",
              height: "1px",
              background: "rgba(255,255,255,0.06)",
              position: "relative",
              marginBottom: "20px",
            }}
          >
            <motion.div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                height: "100%",
                width: `${count}%`,
                background: "linear-gradient(90deg, #00d4ff, #a855f7)",
                transition: "width 0.1s ease",
              }}
            />
            {/* Glow tip */}
            <div
              style={{
                position: "absolute",
                top: "-2px",
                left: `${count}%`,
                width: "4px",
                height: "5px",
                background: "#00d4ff",
                borderRadius: "2px",
                boxShadow: "0 0 8px #00d4ff",
                transform: "translateX(-50%)",
                transition: "left 0.1s ease",
              }}
            />
          </div>

          {/* Counter */}
          <motion.span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "#374151",
              letterSpacing: "0.15em",
            }}
          >
            {String(count).padStart(3, "0")}
          </motion.span>

          {/* Reveal curtains */}
          <AnimatePresence>
            {phase === "reveal" && (
              <>
                <motion.div
                  key="top"
                  initial={{ scaleY: 0, originY: 1 }}
                  animate={{ scaleY: 1 }}
                  exit={{ scaleY: 0, originY: 0 }}
                  transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    bottom: "50%",
                    background: "#00d4ff",
                    zIndex: 2,
                  }}
                />
                <motion.div
                  key="bot"
                  initial={{ scaleY: 0, originY: 0 }}
                  animate={{ scaleY: 1 }}
                  exit={{ scaleY: 0, originY: 1 }}
                  transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    top: "50%",
                    background: "#00d4ff",
                    zIndex: 2,
                  }}
                />
              </>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
