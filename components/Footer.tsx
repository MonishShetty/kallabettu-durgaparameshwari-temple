"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import EHundiButton from "@/components/EHundiButton";
import { useLanguage } from "@/components/LanguageProvider";
import { content, navItems, pick, temple } from "@/data/site";

export default function Footer() {
  const { language } = useLanguage();
  const copy = content[language];

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <p className="footer-kicker">{copy.footer.kicker}</p>
          <h2>{copy.footer.title}</h2>
          <p>{copy.footer.body}</p>
        </div>
        <div className="footer-links">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href}>
              {pick(item.label, language)}
            </Link>
          ))}
        </div>
        <div className="footer-actions">
          <Link
            className="btn btn-secondary"
            href={temple.directionsUrl}
            target="_blank"
          >
            <MapPin aria-hidden="true" size={18} />
            <span>{copy.common.openMaps}</span>
          </Link>
          <EHundiButton variant="secondary" />
        </div>
      </div>
    </footer>
  );
}
