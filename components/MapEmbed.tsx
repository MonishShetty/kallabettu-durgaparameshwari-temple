"use client";

import Link from "next/link";
import { MapPin, Navigation } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { content, pick, temple } from "@/data/site";

export default function MapEmbed() {
  const { language } = useLanguage();
  const copy = content[language];

  return (
    <div className="map-layout">
      <div className="map-copy">
        <p className="eyebrow">{copy.map.eyebrow}</p>
        <h2>{copy.map.title}</h2>
        <p>
          {pick(temple.fullPlace, language)} {copy.map.body}{" "}
          {temple.coordinates}.
        </p>
        <div className="button-row">
          <Link
            className="btn btn-primary"
            href={temple.directionsUrl}
            target="_blank"
          >
            <Navigation aria-hidden="true" size={18} />
            <span>{copy.common.getDirections}</span>
          </Link>
          <Link className="btn btn-secondary" href={temple.mapsUrl} target="_blank">
            <MapPin aria-hidden="true" size={18} />
            <span>{copy.common.viewListing}</span>
          </Link>
        </div>
      </div>
      <div className="map-frame">
        <iframe
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={temple.embedUrl}
          title={copy.map.iframeTitle}
        />
      </div>
    </div>
  );
}
