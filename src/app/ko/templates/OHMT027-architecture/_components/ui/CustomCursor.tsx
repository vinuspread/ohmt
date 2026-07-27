"use client";
import React from "react";
import { createPortal } from "react-dom";
import { motion, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovering, setIsHovering] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);
  const [isFinePointer, setIsFinePointer] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);

    const pointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updatePointerType = () => setIsFinePointer(pointerQuery.matches);

    updatePointerType();
    pointerQuery.addEventListener("change", updatePointerType);

    if (!pointerQuery.matches) {
      return () => pointerQuery.removeEventListener("change", updatePointerType);
    }

    const moveCursor = (event: PointerEvent) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
      setIsVisible(true);
    };

    const hideCursor = () => {
      setIsVisible(false);
      setIsHovering(false);
    };

    const handlePointerOver = (event: PointerEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        setIsHovering(false);
        return;
      }

      setIsHovering(Boolean(target.closest("a, button")));
    };

    window.addEventListener("pointermove", moveCursor, { passive: true });
    document.addEventListener("pointerover", handlePointerOver, { passive: true });
    document.documentElement.addEventListener("pointerleave", hideCursor);
    window.addEventListener("blur", hideCursor);

    return () => {
      pointerQuery.removeEventListener("change", updatePointerType);
      window.removeEventListener("pointermove", moveCursor);
      document.removeEventListener("pointerover", handlePointerOver);
      document.documentElement.removeEventListener("pointerleave", hideCursor);
      window.removeEventListener("blur", hideCursor);
    };
  }, [cursorX, cursorY]);

  if (!isMounted || !isFinePointer) {
    return null;
  }

  return createPortal(
    <motion.div
      aria-hidden="true"
      data-custom-cursor
      className="pointer-events-none fixed left-0 top-0 z-[100] h-0 w-0"
      style={{
        x: cursorX,
        y: cursorY,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ opacity: { duration: 0.12 } }}
    >
      <motion.div
        className="-translate-x-1/2 -translate-y-1/2"
        animate={{
          width: isHovering ? 32 : 10,
          height: isHovering ? 32 : 10,
          backgroundColor: isHovering ? "rgba(26,26,26,0.08)" : "transparent",
        }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          border: "1.5px solid #1A1A1A",
          borderRadius: "50%",
        }}
      />
    </motion.div>,
    document.body,
  );
}
