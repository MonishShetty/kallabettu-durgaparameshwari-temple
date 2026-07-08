"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import SectionHeader from "@/components/SectionHeader";
import { committeeMembers, content, pick } from "@/data/site";

export default function CommitteeSection() {
  const { language } = useLanguage();
  const copy = content[language];

  return (
    <section className="section section-alt committee-section" id="committee">
      <div className="container">
        <SectionHeader
          eyebrow={copy.committeeSection.eyebrow}
          title={copy.committeeSection.title}
        >
          {copy.committeeSection.body}
        </SectionHeader>
        <div className="committee-grid">
          {committeeMembers.map((member) => (
            <article
              className="committee-card"
              key={`${pick(member.role, language)}-${pick(member.name, language)}`}
            >
              <div className="committee-photo">
                <Image
                  alt={pick(member.name, language)}
                  fill
                  sizes="84px"
                  src={member.photo}
                />
              </div>
              <div>
                <h3>{pick(member.name, language)}</h3>
                <p>{pick(member.role, language)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
