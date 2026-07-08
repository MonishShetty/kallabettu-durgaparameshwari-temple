"use client";

import { Languages } from "lucide-react";
import { content, languages } from "@/data/site";
import { useLanguage } from "@/components/LanguageProvider";

type LanguageToggleProps = {
  className?: string;
};

export default function LanguageToggle({ className = "" }: LanguageToggleProps) {
  const { language, toggleLanguage } = useLanguage();
  const nextLanguage = language === "en" ? "kn" : "en";

  return (
    <button
      aria-label={`${content[language].header.languageLabel}: ${languages[nextLanguage].label}`}
      className={`language-toggle ${className}`}
      type="button"
      onClick={toggleLanguage}
    >
      <Languages aria-hidden="true" size={17} />
      <span>{languages[language].shortLabel}</span>
      <strong>{languages[nextLanguage].shortLabel}</strong>
    </button>
  );
}
