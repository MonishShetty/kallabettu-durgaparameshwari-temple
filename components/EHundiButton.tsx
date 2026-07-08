"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { HandCoins, X } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { content } from "@/data/site";

const qrRows = [
  "1111111001011111111",
  "1000001010010000001",
  "1011101011110111101",
  "1011101001010111101",
  "1011101010010111101",
  "1000001011110000001",
  "1111111010101111111",
  "0000000011010000000",
  "1011011110111010101",
  "0110010010001001100",
  "1110101111101110011",
  "0001100101010010100",
  "1111111011011011111",
  "1000001000110010001",
  "1011101011111010101",
  "1011101000100011001",
  "1011101011011110111",
  "1000001010010000001",
  "1111111001111111111"
];

type EHundiButtonProps = {
  label?: string;
  className?: string;
  variant?: "primary" | "secondary";
};

export default function EHundiButton({
  label,
  className = "",
  variant = "primary"
}: EHundiButtonProps) {
  const [open, setOpen] = useState(false);
  const { language } = useLanguage();
  const copy = content[language];
  const buttonLabel = label ?? copy.common.eHundi;
  const modal = (
    <div
      className="modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          setOpen(false);
        }
      }}
    >
      <section
        aria-labelledby="ehundi-title"
        aria-modal="true"
        className="ehundi-modal"
        role="dialog"
      >
        <button
          aria-label={copy.eHundi.closeLabel}
          className="icon-button modal-close"
          type="button"
          onClick={() => setOpen(false)}
        >
          <X aria-hidden="true" size={20} />
        </button>
        <p className="eyebrow">{copy.common.eHundi}</p>
        <h2 id="ehundi-title">{copy.eHundi.title}</h2>
        <div aria-label={copy.eHundi.qrLabel} className="qr-placeholder">
          {qrRows.map((row, rowIndex) =>
            row.split("").map((cell, colIndex) => (
              <span
                className={cell === "1" ? "qr-cell active" : "qr-cell"}
                key={`${rowIndex}-${colIndex}`}
              />
            ))
          )}
        </div>
        <p>{copy.eHundi.note}</p>
        <div className="modal-actions">
          <button
            className="btn btn-secondary"
            type="button"
            onClick={() => setOpen(false)}
          >
            <X aria-hidden="true" size={18} />
            <span>{copy.common.close}</span>
          </button>
        </div>
      </section>
    </div>
  );

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        className={`btn btn-${variant} ${className}`}
        type="button"
        onClick={() => setOpen(true)}
      >
        <HandCoins aria-hidden="true" size={18} />
        <span>{buttonLabel}</span>
      </button>

      {open && typeof document !== "undefined"
        ? createPortal(modal, document.body)
        : null}
    </>
  );
}
