"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import CommitteeSection from "@/components/CommitteeSection";
import EHundiButton from "@/components/EHundiButton";
import { useLanguage } from "@/components/LanguageProvider";
import MapEmbed from "@/components/MapEmbed";
import SectionHeader from "@/components/SectionHeader";
import { content, pick, temple } from "@/data/site";

export default function ContactPage() {
  const { language } = useLanguage();
  const copy = content[language];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">{copy.contactPage.eyebrow}</p>
          <h1>{copy.contactPage.title}</h1>
          <p>{copy.contactPage.body}</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div>
            <SectionHeader
              eyebrow={copy.contactPage.officeEyebrow}
              title={copy.contactPage.detailsTitle}
            >
              {copy.contactPage.detailsBody}
            </SectionHeader>
            <div className="contact-list">
              <article className="contact-item">
                <MapPin aria-hidden="true" size={22} />
                <div>
                  <h3>{copy.contactPage.address}</h3>
                  <p>{pick(temple.fullPlace, language)}</p>
                </div>
              </article>
              <article className="contact-item">
                <Phone aria-hidden="true" size={22} />
                <div>
                  <h3>{copy.contactPage.phone}</h3>
                  <p>{copy.common.toBeUpdated}</p>
                </div>
              </article>
              <article className="contact-item">
                <Mail aria-hidden="true" size={22} />
                <div>
                  <h3>{copy.contactPage.email}</h3>
                  <p>{copy.common.toBeUpdated}</p>
                </div>
              </article>
              <article className="contact-item">
                <ShieldCheck aria-hidden="true" size={22} />
                <div>
                  <h3>E-Hundi</h3>
                  <p>{copy.contactPage.eHundiNote}</p>
                </div>
              </article>
            </div>
            <div className="button-row">
              <Link
                className="btn btn-primary"
                href={temple.directionsUrl}
                target="_blank"
              >
                <MapPin aria-hidden="true" size={18} />
                <span>{copy.common.getDirections}</span>
              </Link>
              <EHundiButton variant="secondary" />
            </div>
          </div>
          <div className="info-panel">
            <p className="eyebrow">{copy.contactPage.quickNotes}</p>
            <h3>{copy.contactPage.beforePublishing}</h3>
            <ul className="plain-list">
              <li>{copy.contactPage.notePhone}</li>
              <li>{copy.contactPage.noteTimings}</li>
              <li>{copy.contactPage.noteQr}</li>
              <li>{copy.contactPage.notePhotos}</li>
            </ul>
          </div>
        </div>
      </section>

      <CommitteeSection />

      <section className="section section-map">
        <div className="container">
          <MapEmbed />
        </div>
      </section>
    </>
  );
}
