"use client";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { CheckCircle2, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import LeadForm from "@/components/forms/LeadForm";

type Division = "solar" | "construction";

interface LeadPopupProps {
  division: Division;
}

const popupKey = (division: Division) =>
  `raybuild-${division}-lead-popup-dismissed`;

const popupEvent = (division: Division) =>
  `raybuild-open-${division}-lead-popup`;

export default function LeadPopup({
  division,
}: LeadPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const closeButtonRef =
    useRef<HTMLButtonElement>(null);

  const previousFocusRef =
    useRef<HTMLElement | null>(null);

  const reduceMotion = useReducedMotion();

  const isSolar = division === "solar";

  /*
   * ----------------------------------------------------
   * Mark popup as dismissed for the current session
   * ----------------------------------------------------
   */
  const markDismissed = () => {
    try {
      window.sessionStorage.setItem(
        popupKey(division),
        "true"
      );
    } catch {
      // Session storage is optional.
    }
  };

  /*
   * ----------------------------------------------------
   * Close popup
   * ----------------------------------------------------
   */
  const close = () => {
    markDismissed();
    setIsOpen(false);
  };

  /*
   * ----------------------------------------------------
   * OPEN POPUP AFTER 3 SECONDS
   * ----------------------------------------------------
   *
   * This keeps your existing automatic popup behavior.
   *
   * Solar:
   * 3 sec -> Solar popup
   *
   * Construction:
   * 3 sec -> Construction popup
   * ----------------------------------------------------
   */
  useEffect(() => {
    try {
      if (
        window.sessionStorage.getItem(
          popupKey(division)
        )
      ) {
        return;
      }
    } catch {
      // Continue normally if sessionStorage is unavailable.
    }

    const timer = window.setTimeout(() => {
      previousFocusRef.current =
        document.activeElement as HTMLElement | null;

      setSubmitted(false);
      setIsOpen(true);
    }, 3000);

    return () => {
      window.clearTimeout(timer);
    };
  }, [division]);

  /*
   * ----------------------------------------------------
   * OPEN POPUP FROM SERVICE CARD
   * ----------------------------------------------------
   *
   * Solar Service Card:
   *
   * window.dispatchEvent(
   *   new Event("raybuild-open-solar-lead-popup")
   * );
   *
   * Construction Service Card:
   *
   * window.dispatchEvent(
   *   new Event("raybuild-open-construction-lead-popup")
   * );
   *
   * This opens the SAME LeadPopup.
   * ----------------------------------------------------
   */
  useEffect(() => {
    const handleOpenLeadPopup = () => {
      previousFocusRef.current =
        document.activeElement as HTMLElement | null;

      setSubmitted(false);
      setIsOpen(true);
    };

    const eventName = popupEvent(division);

    window.addEventListener(
      eventName,
      handleOpenLeadPopup
    );

    return () => {
      window.removeEventListener(
        eventName,
        handleOpenLeadPopup
      );
    };
  }, [division]);

  /*
   * ----------------------------------------------------
   * BODY SCROLL LOCK + ESC + FOCUS TRAP
   * ----------------------------------------------------
   */
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      /*
       * ESC -> Close
       */
      if (event.key === "Escape") {
        close();
        return;
      }

      /*
       * TAB -> Focus trap
       */
      if (event.key !== "Tab") return;

      const dialog =
        closeButtonRef.current?.closest<HTMLElement>(
          "[role='dialog']"
        );

      const focusable =
        dialog?.querySelectorAll<HTMLElement>(
          [
            "a[href]",
            "button:not([disabled])",
            "input:not([disabled])",
            "select:not([disabled])",
            "textarea:not([disabled])",
            "[tabindex]:not([tabindex='-1'])",
          ].join(", ")
        );

      if (!focusable?.length) return;

      const first = focusable[0];
      const last =
        focusable[focusable.length - 1];

      if (
        event.shiftKey &&
        document.activeElement === first
      ) {
        event.preventDefault();
        last.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === last
      ) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.clearTimeout(focusTimer);

      document.body.style.overflow =
        originalOverflow;

      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

      previousFocusRef.current?.focus();
    };
  }, [isOpen]);

  /*
   * ----------------------------------------------------
   * ANIMATION
   * ----------------------------------------------------
   */
  const modalTransition = reduceMotion
    ? { duration: 0 }
    : {
        duration: 0.32,
        ease: [0.22, 1, 0.36, 1] as const,
      };

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
            /*
             * Clicking backdrop closes popup.
             */
            if (
              event.target === event.currentTarget
            ) {
              close();
            }
          }}
        >
          <motion.section
            className={`popup-panel lead-popup ${division}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="lead-popup-title"
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 22,
                    scale: 0.97,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={
              reduceMotion
                ? { opacity: 0 }
                : {
                    opacity: 0,
                    y: 10,
                    scale: 0.98,
                  }
            }
            transition={modalTransition}
          >
            {/* ------------------------------------------------
                HEADER
            ------------------------------------------------ */}
            <div className="lead-popup-heading">
              <button
                ref={closeButtonRef}
                className="popup-close popup-close-light"
                type="button"
                onClick={close}
                aria-label="Close enquiry form"
              >
                <X size={20} />
              </button>

              <span>
                RAYBUILD{" "}
                {isSolar
                  ? "SOLAR"
                  : "CONSTRUCTION"}
              </span>

              <h2 id="lead-popup-title">
                {isSolar
                  ? "Start your solar journey"
                  : "Let’s discuss your project"}
              </h2>

              <p>
                {isSolar
                  ? "Share a few details and our solar team will contact you."
                  : "Tell us the basics and our construction team will be in touch."}
              </p>
            </div>

            {/* ------------------------------------------------
                FORM BODY
            ------------------------------------------------ */}
            <div className="lead-popup-body">
              {submitted ? (
                /*
                 * SUCCESS STATE
                 */
                <div
                  className="lead-popup-success"
                  role="status"
                >
                  <CheckCircle2
                    aria-hidden="true"
                  />

                  <h3>
                    Thank you
                  </h3>

                  <p>
                    Your enquiry has been received.
                    Our team will contact you shortly.
                  </p>

                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={close}
                  >
                    Close
                  </button>
                </div>
              ) : (
                /*
                 * EXISTING LEAD FORM
                 */
                <LeadForm
                  division={division}
                  onSuccess={() => {
                    markDismissed();
                    setSubmitted(true);
                  }}
                />
              )}
            </div>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
