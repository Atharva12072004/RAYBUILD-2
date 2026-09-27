"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Building2, Sun, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const DISMISSED_KEY = "raybuild-division-popup-dismissed";

function markDismissed() {
  try {
    window.sessionStorage.setItem(DISMISSED_KEY, "true");
  } catch {
    // The popup can still work when session storage is unavailable.
  }
}

export default function DivisionPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();

  const close = () => {
    markDismissed();
    setIsOpen(false);
  };

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(DISMISSED_KEY)) return;
    } catch {
      // Fall through and show the helpful chooser once.
    }

    const timer = window.setTimeout(() => {
      previousFocusRef.current = document.activeElement as HTMLElement | null;
      setIsOpen(true);
    }, 3000);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.setTimeout(() => closeButtonRef.current?.focus(), 0);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        return;
      }

      if (event.key !== "Tab") return;
      const dialog = closeButtonRef.current?.closest<HTMLElement>("[role='dialog']");
      const focusable = dialog?.querySelectorAll<HTMLElement>("a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])");
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [isOpen]);

  const modalTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.34, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="popup-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={modalTransition}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <motion.section
            className="popup-panel division-popup-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="division-popup-title"
            initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.98 }}
            transition={modalTransition}
          >
            <button ref={closeButtonRef} className="popup-close" type="button" onClick={close} aria-label="Close division selector">
              <X size={20} />
            </button>
            <div className="division-popup-intro">
              <span className="eyebrow">RAYBUILD GROUP</span>
              <h2 id="division-popup-title">Where should we start?</h2>
              <p>Choose the Raybuild team best placed to support your project.</p>
            </div>
            <div className="division-popup-grid">
              <Link href="/solar" className="division-popup-card solar" onClick={markDismissed}>
                <Sun aria-hidden="true" />
                <span>DIVISION 01</span>
                <h3>Raybuild Solar</h3>
                <p>Clean-energy systems for homes, business, farms, and infrastructure.</p>
                <ArrowRight className="popup-arrow" aria-hidden="true" />
              </Link>
              <Link href="/construction" className="division-popup-card construction" onClick={markDismissed}>
                <Building2 aria-hidden="true" />
                <span>DIVISION 02</span>
                <h3>Raybuild Construction</h3>
                <p>Engineering-led civil, repair, waterproofing, and land-development work.</p>
                <ArrowRight className="popup-arrow" aria-hidden="true" />
              </Link>
            </div>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
