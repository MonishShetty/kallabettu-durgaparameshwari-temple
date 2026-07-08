"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Image as ImageIcon } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import SectionHeader from "@/components/SectionHeader";
import { content, galleryImages, pick } from "@/data/site";

export default function GalleryPage() {
  const { language } = useLanguage();
  const copy = content[language];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">{copy.galleryPage.eyebrow}</p>
          <h1>{copy.galleryPage.title}</h1>
          <p>{copy.galleryPage.body}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow={copy.galleryPage.photosEyebrow}
            title={copy.galleryPage.photosTitle}
          >
            {copy.galleryPage.photosBody}
          </SectionHeader>
          <div className="gallery-grid">
            {galleryImages.map((image) => (
              <article className="gallery-card" key={image.src}>
                <div className="gallery-image-wrap">
                  <Image
                    alt={pick(image.alt, language)}
                    fill
                    sizes="(max-width: 760px) 100vw, 50vw"
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
        </div>
      </section>

      <section className="section section-alt">
        <div className="container centered-copy">
          <ImageIcon aria-hidden="true" className="large-icon" size={34} />
          <h2>{copy.galleryPage.albumsTitle}</h2>
          <p>{copy.galleryPage.albumsBody}</p>
          <Link className="text-link" href="/contact">
            {copy.galleryPage.contactTeam}
            <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
