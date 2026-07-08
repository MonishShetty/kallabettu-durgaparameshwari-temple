"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Flower2, MapPin, Sparkles } from "lucide-react";
import EHundiButton from "@/components/EHundiButton";
import { useLanguage } from "@/components/LanguageProvider";
import MapEmbed from "@/components/MapEmbed";
import SectionHeader from "@/components/SectionHeader";
import { content, galleryImages, pick, sevas, temple } from "@/data/site";

export default function Home() {
  const { language } = useLanguage();
  const copy = content[language];

  return (
    <>
      <section className="hero">
        <Image
          alt={pick(galleryImages[3].alt, language)}
          className="hero-image"
          fill
          priority
          sizes="100vw"
          src="/images/temple-hero.png"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">{pick(temple.place, language)}</p>
          <h1>{pick(temple.name, language)}</h1>
          <p>{copy.home.heroBody}</p>
          <div className="hero-actions">
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
      </section>

      <section className="quick-band" aria-label={copy.home.quickLabel}>
        <div className="quick-item">
          <Clock aria-hidden="true" size={22} />
          <div>
            <strong>{copy.home.darshanTimings}</strong>
            <span>{copy.common.toBeConfirmed}</span>
          </div>
        </div>
        <div className="quick-item">
          <Flower2 aria-hidden="true" size={22} />
          <div>
            <strong>{copy.sevasPage.eyebrow}</strong>
            <span>{copy.home.sevasLine}</span>
          </div>
        </div>
        <div className="quick-item">
          <Sparkles aria-hidden="true" size={22} />
          <div>
            <strong>{copy.home.annualEvents}</strong>
            <span>{copy.home.festivalUpdate}</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-column">
          <div>
            <SectionHeader
              eyebrow={copy.home.welcomeEyebrow}
              title={copy.home.welcomeTitle}
            >
              {copy.home.welcomeBody}
            </SectionHeader>
            <p className="large-copy">{copy.home.introBody}</p>
            <div className="button-row">
              <Link className="btn btn-primary" href="/history">
                <ArrowRight aria-hidden="true" size={18} />
                <span>{copy.home.readHistory}</span>
              </Link>
              <Link className="btn btn-secondary" href="/sevas">
                <Flower2 aria-hidden="true" size={18} />
                <span>{copy.home.viewSevas}</span>
              </Link>
            </div>
          </div>
          <div className="info-panel">
            <p className="eyebrow">{copy.home.listingEyebrow}</p>
            <h3>{pick(temple.fullPlace, language)}</h3>
            <dl>
              <div>
                <dt>{copy.home.category}</dt>
                <dd>{pick(temple.category, language)}</dd>
              </div>
              <div>
                <dt>{copy.home.coordinates}</dt>
                <dd>{temple.coordinates}</dd>
              </div>
              <div>
                <dt>{copy.home.location}</dt>
                <dd>{pick(temple.place, language)}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeader
            eyebrow={copy.sevasPage.eyebrow}
            title={copy.home.sevasTitle}
          >
            {copy.home.sevasBody}
          </SectionHeader>
          <div className="seva-grid preview-grid">
            {sevas.slice(0, 4).map((seva) => {
              const Icon = seva.icon;
              return (
                <article className="seva-card" key={pick(seva.name, language)}>
                  <Icon aria-hidden="true" size={24} />
                  <h3>{pick(seva.name, language)}</h3>
                  <p>{pick(seva.note, language)}</p>
                </article>
              );
            })}
          </div>
          <div className="section-cta">
            <Link className="text-link" href="/sevas">
              {copy.home.seeAllSevas}
              <ArrowRight aria-hidden="true" size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow={copy.galleryPage.eyebrow}
            title={copy.home.galleryTitle}
          >
            {copy.home.galleryBody}
          </SectionHeader>
          <div className="gallery-grid gallery-preview">
            {galleryImages.slice(0, 3).map((image) => (
              <article className="gallery-card" key={image.src}>
                <div className="gallery-image-wrap">
                  <Image
                    alt={pick(image.alt, language)}
                    fill
                    sizes="(max-width: 760px) 100vw, 33vw"
                    src={image.src}
                  />
                </div>
                <div>
                  <h3>{pick(image.title, language)}</h3>
                  <p>{pick(image.caption, language)}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="section-cta">
            <Link className="text-link" href="/gallery">
              {copy.home.openGallery}
              <ArrowRight aria-hidden="true" size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-map">
        <div className="container">
          <MapEmbed />
        </div>
      </section>
    </>
  );
}
