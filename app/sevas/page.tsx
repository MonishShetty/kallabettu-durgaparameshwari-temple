"use client";

import Link from "next/link";
import { CalendarCheck } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import SectionHeader from "@/components/SectionHeader";
import { content, pick, sevas } from "@/data/site";

export default function SevasPage() {
  const { language } = useLanguage();
  const copy = content[language];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">{copy.sevasPage.eyebrow}</p>
          <h1>{copy.sevasPage.title}</h1>
          <p>{copy.sevasPage.body}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow={copy.sevasPage.listEyebrow}
            title={copy.sevasPage.listTitle}
          >
            {copy.sevasPage.listBody}
          </SectionHeader>
          <div className="seva-grid">
            {sevas.map((seva) => {
              const Icon = seva.icon;
              return (
                <article className="seva-card" key={pick(seva.name, language)}>
                  <Icon aria-hidden="true" size={26} />
                  <h3>{pick(seva.name, language)}</h3>
                  <p>{pick(seva.note, language)}</p>
                  <span className="seva-meta">{copy.sevasPage.detailsUpdate}</span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container seva-note">
          <div>
            <p className="eyebrow">{copy.sevasPage.bookingEyebrow}</p>
            <h2>{copy.sevasPage.bookingTitle}</h2>
            <p>{copy.sevasPage.bookingBody}</p>
          </div>
          <Link className="btn btn-primary" href="/contact">
            <CalendarCheck aria-hidden="true" size={18} />
            <span>{copy.sevasPage.goContact}</span>
          </Link>
        </div>
      </section>
    </>
  );
}
