"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Flower2 } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import SectionHeader from "@/components/SectionHeader";
import { content, historyHighlights, pick } from "@/data/site";

export default function HistoryPage() {
  const { language } = useLanguage();
  const copy = content[language];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">{copy.historyPage.eyebrow}</p>
          <h1>{copy.historyPage.title}</h1>
          <p>{copy.historyPage.body}</p>
        </div>
      </section>

      <section className="section">
        <div className="container two-column">
          <div>
            <SectionHeader
              eyebrow={copy.historyPage.traditionEyebrow}
              title={copy.historyPage.traditionTitle}
            >
              {copy.historyPage.traditionBody}
            </SectionHeader>
            <p className="large-copy">{copy.historyPage.largeCopy}</p>
            <div className="button-row">
              <Link className="btn btn-primary" href="/gallery">
                <BookOpen aria-hidden="true" size={18} />
                <span>{copy.historyPage.viewGallery}</span>
              </Link>
              <Link className="btn btn-secondary" href="/sevas">
                <Flower2 aria-hidden="true" size={18} />
                <span>{copy.historyPage.templeSevas}</span>
              </Link>
            </div>
          </div>
          <div className="history-list">
            {historyHighlights.map((item) => (
              <article className="history-item" key={pick(item.title, language)}>
                <h3>{pick(item.title, language)}</h3>
                <p>{pick(item.body, language)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container centered-copy">
          <p className="eyebrow">{copy.historyPage.nextEyebrow}</p>
          <h2>{copy.historyPage.nextTitle}</h2>
          <p>{copy.historyPage.nextBody}</p>
          <Link className="text-link" href="/contact">
            {copy.historyPage.shareDetails}
            <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
