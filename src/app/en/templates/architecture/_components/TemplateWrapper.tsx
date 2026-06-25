"use client";
import React from "react";
import { motion } from "framer-motion";

export function TemplateWrapper({ children }: { children: React.ReactNode }) {
  const [animationComplete, setAnimationComplete] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      if ("history" in window && "scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo({ top: 0, left: 0 });
    }
  }, []);

  return (
    <div style={{ background: "#111111", minHeight: "100vh" }}>
      <motion.div
        initial={{ opacity: 0, filter: "blur(4px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        onAnimationComplete={() => setAnimationComplete(true)}
        style={
          animationComplete
            ? { background: "#FFFFFF", maxWidth: "1440px", margin: "0 auto", minHeight: "100vh" }
            : { background: "#FFFFFF", maxWidth: "1440px", margin: "0 auto", minHeight: "100vh", transform: "none", filter: "none" }
        }
      >
        {children}
      </motion.div>
    </div>
  );
}
