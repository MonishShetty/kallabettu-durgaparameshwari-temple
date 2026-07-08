"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapPin, Menu, X } from "lucide-react";
import EHundiButton from "@/components/EHundiButton";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/components/LanguageProvider";
import { content, navItems, pick, temple } from "@/data/site";
import { useEffect, useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { language } = useLanguage();
  const copy = content[language];

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link aria-label={copy.header.homeLabel} className="brand" href="/">
          <span className="brand-mark">SD</span>
          <span>
            <strong>{pick(temple.name, language)}</strong>
            <small>{pick(temple.place, language)}</small>
          </span>
        </Link>

        <nav aria-label={copy.header.primaryNavigation} className="desktop-nav">
          {navItems.map((item) => (
            <Link
              className={pathname === item.href ? "active" : ""}
              href={item.href}
              key={item.href}
            >
              {pick(item.label, language)}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link
            className="btn btn-ghost header-direction"
            href={temple.directionsUrl}
            target="_blank"
          >
            <MapPin aria-hidden="true" size={18} />
            <span>{copy.common.directions}</span>
          </Link>
          <EHundiButton className="header-donate" />
          <LanguageToggle />
          <button
            aria-expanded={menuOpen}
            aria-label={copy.header.toggleMenu}
            className="icon-button menu-toggle"
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? (
              <X aria-hidden="true" size={22} />
            ) : (
              <Menu aria-hidden="true" size={22} />
            )}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="mobile-menu">
          <nav aria-label={copy.header.mobileNavigation}>
            {navItems.map((item) => (
              <Link
                className={pathname === item.href ? "active" : ""}
                href={item.href}
                key={item.href}
              >
                {pick(item.label, language)}
              </Link>
            ))}
          </nav>
          <div className="mobile-menu-actions">
            <LanguageToggle className="language-toggle-mobile" />
            <Link
              className="btn btn-secondary"
              href={temple.directionsUrl}
              target="_blank"
            >
              <MapPin aria-hidden="true" size={18} />
              <span>{copy.common.directions}</span>
            </Link>
            <EHundiButton />
          </div>
        </div>
      ) : null}
    </header>
  );
}
