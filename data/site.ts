import type { LucideIcon } from "lucide-react";
import {
  Bell,
  Flower2,
  HandHeart,
  Lamp,
  Leaf,
  Sparkles,
  Sun,
  Users
} from "lucide-react";

export type Language = "en" | "kn";
export type LocalizedText = Record<Language, string>;

export const languages: Record<Language, { label: string; shortLabel: string }> = {
  en: { label: "English", shortLabel: "EN" },
  kn: { label: "ಕನ್ನಡ", shortLabel: "ಕ" }
};

export const pick = (text: LocalizedText, language: Language) => text[language];

export const temple = {
  name: {
    en: "Sri Durgaparameshwari Temple",
    kn: "ಶ್ರೀ ದುರ್ಗಾಪರಮೇಶ್ವರಿ ದೇವಸ್ಥಾನ"
  },
  place: {
    en: "Kallubettu, Nainadu",
    kn: "ಕಲ್ಲುಬೆಟ್ಟು, ನೈನಾಡು"
  },
  fullPlace: {
    en: "Sri Durgaparameshwari Temple, Kallubettu, Nainadu",
    kn: "ಶ್ರೀ ದುರ್ಗಾಪರಮೇಶ್ವರಿ ದೇವಸ್ಥಾನ, ಕಲ್ಲುಬೆಟ್ಟು, ನೈನಾಡು"
  },
  category: {
    en: "Hindu temple",
    kn: "ಹಿಂದೂ ದೇವಸ್ಥಾನ"
  },
  coordinates: "12.9722764, 75.1440808",
  mapsUrl:
    "https://www.google.com/maps/place/Sri+Durgaparameshwari+Temple,+Kallubettu,+Nainadu/@12.9722764,75.1440808,10z/",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=12.9722764,75.1440808",
  embedUrl:
    "https://www.google.com/maps?q=12.9722764,75.1440808&hl=en&z=15&output=embed"
};

export const navItems = [
  { href: "/", label: { en: "Home", kn: "ಮುಖಪುಟ" } },
  { href: "/history", label: { en: "History", kn: "ಇತಿಹಾಸ" } },
  { href: "/sevas", label: { en: "Sevas", kn: "ಸೇವೆಗಳು" } },
  { href: "/gallery", label: { en: "Gallery", kn: "ಚಿತ್ರಗಳು" } },
  { href: "/contact", label: { en: "Contact", kn: "ಸಂಪರ್ಕ" } }
];

export type Seva = {
  name: LocalizedText;
  note: LocalizedText;
  icon: LucideIcon;
};

export type CommitteeMember = {
  name: LocalizedText;
  role: LocalizedText;
  photo: string;
};

export const sevas: Seva[] = [
  {
    name: { en: "Archane", kn: "ಅರ್ಚನೆ" },
    note: {
      en: "A simple prayer offering in the devotee's name and nakshatra.",
      kn: "ಭಕ್ತರ ಹೆಸರು ಮತ್ತು ನಕ್ಷತ್ರದಲ್ಲಿ ಸಲ್ಲಿಸುವ ಸರಳ ಪ್ರಾರ್ಥನಾ ಸೇವೆ."
    },
    icon: Flower2
  },
  {
    name: { en: "Kumkumarchane", kn: "ಕುಂಕುಮಾರ್ಚನೆ" },
    note: {
      en: "A Devi-focused offering with kumkuma and devotional chanting.",
      kn: "ಕುಂಕುಮ ಮತ್ತು ಭಕ್ತಿಗೀತೆಗಳೊಂದಿಗೆ ದೇವಿಗೆ ಸಲ್ಲಿಸುವ ವಿಶೇಷ ಸೇವೆ."
    },
    icon: Sparkles
  },
  {
    name: { en: "Deeparadhane", kn: "ದೀಪಾರಾಧನೆ" },
    note: {
      en: "Lamp offering for family wellbeing and gratitude.",
      kn: "ಕುಟುಂಬದ ಕ್ಷೇಮ ಮತ್ತು ಕೃತಜ್ಞತೆಯಾಗಿ ಸಲ್ಲಿಸುವ ದೀಪ ಸೇವೆ."
    },
    icon: Lamp
  },
  {
    name: { en: "Panchamrutha Abhisheka", kn: "ಪಂಚಾಮೃತ ಅಭಿಷೇಕ" },
    note: {
      en: "Traditional abhisheka seva, subject to temple schedule.",
      kn: "ದೇವಸ್ಥಾನದ ವೇಳಾಪಟ್ಟಿಯಂತೆ ನಡೆಯುವ ಸಾಂಪ್ರದಾಯಿಕ ಅಭಿಷೇಕ ಸೇವೆ."
    },
    icon: Bell
  },
  {
    name: { en: "Alankara Seva", kn: "ಅಲಂಕಾರ ಸೇವೆ" },
    note: {
      en: "Special decoration seva for the deity on selected days.",
      kn: "ನಿಗದಿತ ದಿನಗಳಲ್ಲಿ ದೇವಿಗೆ ಸಲ್ಲಿಸುವ ವಿಶೇಷ ಅಲಂಕಾರ ಸೇವೆ."
    },
    icon: Leaf
  },
  {
    name: { en: "Annadana Seva", kn: "ಅನ್ನದಾನ ಸೇವೆ" },
    note: {
      en: "Support prasada and food service for devotees.",
      kn: "ಭಕ್ತರ ಪ್ರಸಾದ ಮತ್ತು ಅನ್ನಸಂತರ್ಪಣೆಗೆ ನೀಡುವ ಸಹಾಯ ಸೇವೆ."
    },
    icon: HandHeart
  },
  {
    name: { en: "Utsava Seva", kn: "ಉತ್ಸವ ಸೇವೆ" },
    note: {
      en: "Festival support seva during annual and special occasions.",
      kn: "ವಾರ್ಷಿಕ ಹಾಗೂ ವಿಶೇಷ ಉತ್ಸವಗಳಲ್ಲಿ ನೀಡುವ ಸೇವಾ ಸಹಕಾರ."
    },
    icon: Sun
  },
  {
    name: { en: "Community Seva", kn: "ಸಮುದಾಯ ಸೇವೆ" },
    note: {
      en: "Offer support for temple maintenance and community events.",
      kn: "ದೇವಸ್ಥಾನದ ನಿರ್ವಹಣೆ ಮತ್ತು ಸಮುದಾಯ ಕಾರ್ಯಕ್ರಮಗಳಿಗೆ ಸಹಾಯ."
    },
    icon: Users
  }
];

export const galleryImages = [
  {
    src: "/images/gallery-festival.png",
    alt: {
      en: "Illustrative temple courtyard prepared for a festival",
      kn: "ಉತ್ಸವಕ್ಕೆ ಸಿದ್ಧಗೊಂಡ ದೇವಸ್ಥಾನ ಆವರಣದ ನಿರೂಪಣಾ ಚಿತ್ರ"
    },
    title: { en: "Festival Courtyard", kn: "ಉತ್ಸವ ಆವರಣ" },
    caption: {
      en: "A festive temple setting for annual celebrations.",
      kn: "ವಾರ್ಷಿಕ ಆಚರಣೆಗಳಿಗೆ ಸಿದ್ಧಗೊಂಡ ಹಬ್ಬದ ವಾತಾವರಣ."
    }
  },
  {
    src: "/images/gallery-lamps.png",
    alt: {
      en: "Illustrative brass lamps and flowers in a temple",
      kn: "ದೇವಸ್ಥಾನದಲ್ಲಿ ದೀಪಗಳು ಮತ್ತು ಹೂಗಳ ನಿರೂಪಣಾ ಚಿತ್ರ"
    },
    title: { en: "Deepa Alankara", kn: "ದೀಪ ಅಲಂಕಾರ" },
    caption: {
      en: "Traditional lamps and flowers for daily worship.",
      kn: "ನಿತ್ಯ ಪೂಜೆಗೆ ದೀಪಗಳು ಮತ್ತು ಹೂವಿನ ಅಲಂಕಾರ."
    }
  },
  {
    src: "/images/gallery-offering.png",
    alt: {
      en: "Illustrative pooja offering plate near a temple threshold",
      kn: "ದೇವಸ್ಥಾನದ ಮುಂಭಾಗದ ಪೂಜಾ ಸಾಮಗ್ರಿಗಳ ನಿರೂಪಣಾ ಚಿತ್ರ"
    },
    title: { en: "Pooja Offerings", kn: "ಪೂಜಾ ಸಮರ್ಪಣೆ" },
    caption: {
      en: "Coconut, flowers, kumkuma, turmeric, and betel leaves.",
      kn: "ತೆಂಗಿನಕಾಯಿ, ಹೂವು, ಕುಂಕುಮ, ಅರಿಶಿನ ಮತ್ತು ವೀಳ್ಯದೆಲೆ."
    }
  },
  {
    src: "/images/temple-hero.png",
    alt: {
      en: "Illustrative South Indian temple exterior at sunrise",
      kn: "ಸೂರ್ಯೋದಯದ ಸಮಯದ ದಕ್ಷಿಣ ಭಾರತೀಯ ದೇವಸ್ಥಾನದ ನಿರೂಪಣಾ ಚಿತ್ರ"
    },
    title: { en: "Temple Ambience", kn: "ದೇವಾಲಯದ ವಾತಾವರಣ" },
    caption: {
      en: "A calm devotional setting inspired by coastal temple architecture.",
      kn: "ಕರಾವಳಿ ದೇವಸ್ಥಾನ ಶೈಲಿಯಿಂದ ಸ್ಫೂರ್ತಿ ಪಡೆದ ಶಾಂತ ಭಕ್ತಿಭಾವದ ದೃಶ್ಯ."
    }
  }
];

export const historyHighlights = [
  {
    title: { en: "Devi Worship", kn: "ದೇವಿ ಆರಾಧನೆ" },
    body: {
      en: "The temple is dedicated to Sri Durgaparameshwari, worshipped with devotion by families from Kallubettu, Nainadu, and nearby villages.",
      kn: "ಕಲ್ಲುಬೆಟ್ಟು, ನೈನಾಡು ಹಾಗೂ ಸುತ್ತಮುತ್ತಲಿನ ಗ್ರಾಮಗಳ ಕುಟುಂಬಗಳು ಭಕ್ತಿಯಿಂದ ಆರಾಧಿಸುವ ಶ್ರೀ ದುರ್ಗಾಪರಮೇಶ್ವರಿ ದೇವಿಗೆ ಈ ದೇವಸ್ಥಾನ ಸಮರ್ಪಿತವಾಗಿದೆ."
    }
  },
  {
    title: { en: "Daily Prayer", kn: "ನಿತ್ಯ ಪೂಜೆ" },
    body: {
      en: "Regular pooja, lamp offerings, flowers, and prasada form the heart of temple life.",
      kn: "ನಿತ್ಯ ಪೂಜೆ, ದೀಪಾರಾಧನೆ, ಹೂವಿನ ಸಮರ್ಪಣೆ ಮತ್ತು ಪ್ರಸಾದವು ದೇವಾಲಯದ ನಿತ್ಯ ಜೀವನದ ಮರ್ಮ."
    }
  },
  {
    title: { en: "Community Bond", kn: "ಸಮುದಾಯದ ಬಾಂಧವ್ಯ" },
    body: {
      en: "Sevas, festivals, and volunteer service keep the temple connected to devotees across generations.",
      kn: "ಸೇವೆಗಳು, ಉತ್ಸವಗಳು ಮತ್ತು ಸ್ವಯಂಸೇವೆಯ ಮೂಲಕ ದೇವಾಲಯವು ಪೀಳಿಗೆಗಳಿಂದ ಭಕ್ತರೊಂದಿಗೆ ಸಂಪರ್ಕದಲ್ಲಿದೆ."
    }
  },
  {
    title: { en: "Living Tradition", kn: "ಜೀವಂತ ಪರಂಪರೆ" },
    body: {
      en: "The detailed sthala purana, archival photos, and festival records can be added here after temple committee confirmation.",
      kn: "ದೇವಸ್ಥಾನ ಸಮಿತಿಯ ದೃಢೀಕರಣದ ನಂತರ ವಿವರವಾದ ಸ್ಥಳಪುರಾಣ, ಹಳೆಯ ಚಿತ್ರಗಳು ಮತ್ತು ಉತ್ಸವ ದಾಖಲೆಗಳನ್ನು ಇಲ್ಲಿ ಸೇರಿಸಬಹುದು."
    }
  }
];

export const committeeMembers: CommitteeMember[] = [
  {
    name: { en: "Name to be updated", kn: "ಹೆಸರು ನವೀಕರಿಸಬೇಕಿದೆ" },
    role: { en: "President", kn: "ಅಧ್ಯಕ್ಷರು" },
    photo: "/images/committee-sample-1.svg"
  },
  {
    name: { en: "Name to be updated", kn: "ಹೆಸರು ನವೀಕರಿಸಬೇಕಿದೆ" },
    role: { en: "Vice President", kn: "ಉಪಾಧ್ಯಕ್ಷರು" },
    photo: "/images/committee-sample-2.svg"
  },
  {
    name: { en: "Name to be updated", kn: "ಹೆಸರು ನವೀಕರಿಸಬೇಕಿದೆ" },
    role: { en: "Secretary", kn: "ಕಾರ್ಯದರ್ಶಿ" },
    photo: "/images/committee-sample-3.svg"
  },
  {
    name: { en: "Name to be updated", kn: "ಹೆಸರು ನವೀಕರಿಸಬೇಕಿದೆ" },
    role: { en: "Joint Secretary", kn: "ಸಹ ಕಾರ್ಯದರ್ಶಿ" },
    photo: "/images/committee-sample-4.svg"
  },
  {
    name: { en: "Name to be updated", kn: "ಹೆಸರು ನವೀಕರಿಸಬೇಕಿದೆ" },
    role: { en: "Treasurer", kn: "ಖಜಾಂಚಿ" },
    photo: "/images/committee-sample-5.svg"
  },
  {
    name: { en: "Name to be updated", kn: "ಹೆಸರು ನವೀಕರಿಸಬೇಕಿದೆ" },
    role: { en: "Committee Member", kn: "ಸಮಿತಿ ಸದಸ್ಯರು" },
    photo: "/images/committee-sample-6.svg"
  }
];

export const content = {
  en: {
    common: {
      directions: "Directions",
      getDirections: "Get Directions",
      openMaps: "Open Maps",
      viewListing: "View Listing",
      eHundi: "E-Hundi",
      close: "Close",
      toBeConfirmed: "To be confirmed",
      toBeUpdated: "To be updated"
    },
    header: {
      homeLabel: "Home",
      primaryNavigation: "Primary navigation",
      mobileNavigation: "Mobile navigation",
      toggleMenu: "Toggle menu",
      languageLabel: "Switch language"
    },
    footer: {
      kicker: "Sri Durgaparameshwari Temple",
      title: "Kallubettu, Nainadu",
      body: "A calm digital home for darshan information, sevas, gallery, directions, and devotee support."
    },
    eHundi: {
      title: "Temple Donation QR",
      qrLabel: "Placeholder QR code",
      closeLabel: "Close e-hundi",
      note: "The official temple account QR will be placed here after the bank and committee details are confirmed."
    },
    map: {
      eyebrow: "Visit",
      title: "Find the temple on Google Maps",
      body: "is listed as a Hindu temple at coordinates",
      iframeTitle: "Google Maps location for Sri Durgaparameshwari Temple"
    },
    home: {
      heroBody:
        "A serene temple website for devotees to find darshan details, sevas, gallery updates, donations, and directions in one place.",
      quickLabel: "Temple highlights",
      darshanTimings: "Darshan Timings",
      sevasLine: "Archane, Deeparadhane, Abhisheka",
      annualEvents: "Annual Events",
      festivalUpdate: "Festival calendar to be updated",
      welcomeEyebrow: "Welcome",
      welcomeTitle: "A graceful digital home for devotees",
      welcomeBody:
        "Built with a clean, readable layout so elders, families, and younger devotees can quickly find what they need.",
      introBody:
        "This first version keeps the verified Google Maps location at the center and prepares the site for real temple photos, committee contact details, seva prices, and the official e-hundi QR code.",
      readHistory: "Read History",
      viewSevas: "View Sevas",
      listingEyebrow: "Temple Listing",
      category: "Category",
      coordinates: "Coordinates",
      location: "Location",
      sevasTitle: "Offerings and temple services",
      sevasBody:
        "A simple seva list is ready now; rates and booking contacts can be updated when the temple office confirms them.",
      seeAllSevas: "See all sevas",
      galleryTitle: "Temple moments",
      galleryBody:
        "Fast-loading gallery sections are ready for real temple photos, events, alankara, and festival memories.",
      openGallery: "Open gallery"
    },
    historyPage: {
      eyebrow: "History",
      title: "Rooted in devotion to Sri Durgaparameshwari",
      body: "A respectful introduction to the temple's tradition, ready to be expanded with verified sthala purana, dates, and archival material.",
      traditionEyebrow: "Tradition",
      traditionTitle: "A living place of worship",
      traditionBody:
        "Sri Durgaparameshwari Temple stands as a devotional center for people connected to Kallubettu, Nainadu, and nearby communities.",
      largeCopy:
        "The website keeps the history section dignified and clear. Once temple elders or committee members share the exact origin story, festival records, and photographs, this page can grow into a full archive for devotees and future generations.",
      viewGallery: "View Gallery",
      templeSevas: "Temple Sevas",
      nextEyebrow: "Next Archive Additions",
      nextTitle: "Oral history, festival calendar, and old photos",
      nextBody:
        "The page is prepared for a richer temple archive: origin story, annual mahotsava details, renovation milestones, trustee notes, and photographs from past celebrations.",
      shareDetails: "Share details with the temple team"
    },
    sevasPage: {
      eyebrow: "Sevas",
      title: "Offerings for prayer, gratitude, and service",
      body: "A clean seva list for devotees. Timings, booking process, and amounts can be updated after temple office confirmation.",
      listEyebrow: "Seva List",
      listTitle: "Available temple sevas",
      listBody:
        "Each seva card is structured so exact pricing, dates, and booking rules can be added without redesigning the page.",
      detailsUpdate: "Details to be updated",
      bookingEyebrow: "Booking",
      bookingTitle: "Seva booking contact will be added here",
      bookingBody:
        "Once the temple office shares the phone number, WhatsApp number, or email, devotees can enquire directly from this page.",
      goContact: "Go to Contact"
    },
    galleryPage: {
      eyebrow: "Gallery",
      title: "Photos from worship, festivals, and temple life",
      body: "The gallery is built with Next.js image optimization so real temple photos can load quickly across mobile and desktop.",
      photosEyebrow: "Photos",
      photosTitle: "Temple gallery",
      photosBody:
        "These images are placeholders for now. They can be replaced with original temple photos whenever they are ready.",
      albumsTitle: "Ready for real temple albums",
      albumsBody:
        "Add folders for annual festival, daily alankara, prasada seva, renovation, and community events as the collection grows.",
      contactTeam: "Contact temple team"
    },
    committeeSection: {
      eyebrow: "Committee",
      title: "Temple committee members",
      body:
        "Photo, name, and responsibility slots are ready. Replace these placeholders after the confirmed committee list is shared."
    },
    contactPage: {
      eyebrow: "Contact",
      title: "Reach the temple and plan your visit",
      body: "Directions are live from the Google Maps listing. Temple office contact details can be added when confirmed.",
      officeEyebrow: "Temple Office",
      detailsTitle: "Contact details",
      detailsBody:
        "Keep the final contact information verified before publishing it for devotees.",
      address: "Address",
      phone: "Phone",
      email: "Email",
      eHundiNote: "Official QR pending temple account confirmation.",
      quickNotes: "Quick Notes",
      beforePublishing: "Before publishing",
      notePhone: "Confirm official phone number and email.",
      noteTimings: "Add darshan timings and festival dates.",
      noteQr: "Replace the e-hundi placeholder with the verified QR.",
      notePhotos: "Upload real temple gallery photos."
    }
  },
  kn: {
    common: {
      directions: "ದಾರಿ",
      getDirections: "ದಾರಿ ನೋಡಿ",
      openMaps: "ನಕ್ಷೆ ತೆರೆಯಿರಿ",
      viewListing: "ಪಟ್ಟಿ ನೋಡಿ",
      eHundi: "ಇ-ಹುಂಡಿ",
      close: "ಮುಚ್ಚಿ",
      toBeConfirmed: "ದೃಢೀಕರಿಸಬೇಕಿದೆ",
      toBeUpdated: "ನವೀಕರಿಸಬೇಕಿದೆ"
    },
    header: {
      homeLabel: "ಮುಖಪುಟ",
      primaryNavigation: "ಮುಖ್ಯ ನ್ಯಾವಿಗೇಶನ್",
      mobileNavigation: "ಮೊಬೈಲ್ ನ್ಯಾವಿಗೇಶನ್",
      toggleMenu: "ಮೆನು ಬದಲಿಸಿ",
      languageLabel: "ಭಾಷೆ ಬದಲಿಸಿ"
    },
    footer: {
      kicker: "ಶ್ರೀ ದುರ್ಗಾಪರಮೇಶ್ವರಿ ದೇವಸ್ಥಾನ",
      title: "ಕಲ್ಲುಬೆಟ್ಟು, ನೈನಾಡು",
      body: "ದರ್ಶನ ಮಾಹಿತಿ, ಸೇವೆಗಳು, ಚಿತ್ರಗಳು, ದಾರಿ ಹಾಗೂ ಭಕ್ತರ ಸಹಕಾರಕ್ಕಾಗಿ ಶಾಂತ ಡಿಜಿಟಲ್ ತಾಣ."
    },
    eHundi: {
      title: "ದೇವಸ್ಥಾನ ದೇಣಿಗೆ QR",
      qrLabel: "ತಾತ್ಕಾಲಿಕ QR ಸಂಕೇತ",
      closeLabel: "ಇ-ಹುಂಡಿ ಮುಚ್ಚಿ",
      note: "ದೇವಸ್ಥಾನದ ಬ್ಯಾಂಕ್ ಮತ್ತು ಸಮಿತಿ ವಿವರಗಳು ದೃಢಪಟ್ಟ ನಂತರ ಅಧಿಕೃತ ಖಾತೆಯ QR ಇಲ್ಲಿ ಸೇರಿಸಲಾಗುತ್ತದೆ."
    },
    map: {
      eyebrow: "ಭೇಟಿ",
      title: "Google Maps ನಲ್ಲಿ ದೇವಸ್ಥಾನದ ಸ್ಥಳ",
      body: "ಈ ಸ್ಥಳವು ಕೆಳಗಿನ ನಿರ್ದೇಶಾಂಕಗಳಲ್ಲಿ ಹಿಂದೂ ದೇವಸ್ಥಾನವಾಗಿ ಪಟ್ಟಿಯಲ್ಲಿದೆ",
      iframeTitle: "ಶ್ರೀ ದುರ್ಗಾಪರಮೇಶ್ವರಿ ದೇವಸ್ಥಾನದ Google Maps ಸ್ಥಳ"
    },
    home: {
      heroBody:
        "ದರ್ಶನ ವಿವರಗಳು, ಸೇವೆಗಳು, ಚಿತ್ರಗಳು, ದೇಣಿಗೆ ಮತ್ತು ದಾರಿ ಮಾಹಿತಿಯನ್ನು ಭಕ್ತರು ಒಂದೇ ಸ್ಥಳದಲ್ಲಿ ತಿಳಿಯಲು ರೂಪಿಸಿದ ಶಾಂತ ದೇವಾಲಯ ತಾಣ.",
      quickLabel: "ದೇವಾಲಯದ ಮುಖ್ಯ ಮಾಹಿತಿ",
      darshanTimings: "ದರ್ಶನ ಸಮಯ",
      sevasLine: "ಅರ್ಚನೆ, ದೀಪಾರಾಧನೆ, ಅಭಿಷೇಕ",
      annualEvents: "ವಾರ್ಷಿಕ ಕಾರ್ಯಕ್ರಮಗಳು",
      festivalUpdate: "ಉತ್ಸವ ಕ್ಯಾಲೆಂಡರ್ ಶೀಘ್ರದಲ್ಲೇ",
      welcomeEyebrow: "ಸ್ವಾಗತ",
      welcomeTitle: "ಭಕ್ತರಿಗಾಗಿ ಸುಂದರ ಡಿಜಿಟಲ್ ಮನೆ",
      welcomeBody:
        "ಹಿರಿಯರು, ಕುಟುಂಬಗಳು ಮತ್ತು ಯುವ ಭಕ್ತರು ಬೇಕಾದ ಮಾಹಿತಿಯನ್ನು ಬೇಗ ಕಂಡುಕೊಳ್ಳುವಂತೆ ಸ್ವಚ್ಛ ಹಾಗೂ ಓದಲು ಸುಲಭವಾದ ವಿನ್ಯಾಸ.",
      introBody:
        "ಈ ಮೊದಲ ಆವೃತ್ತಿ ದೃಢೀಕರಿಸಿದ Google Maps ಸ್ಥಳವನ್ನು ಮುಖ್ಯವಾಗಿ ಇಟ್ಟುಕೊಂಡು ನಿಜವಾದ ದೇವಾಲಯ ಚಿತ್ರಗಳು, ಸಮಿತಿ ಸಂಪರ್ಕ ವಿವರಗಳು, ಸೇವಾ ದರಗಳು ಮತ್ತು ಅಧಿಕೃತ ಇ-ಹುಂಡಿ QR ಸೇರಿಸಲು ಸಿದ್ಧವಾಗಿದೆ.",
      readHistory: "ಇತಿಹಾಸ ಓದಿ",
      viewSevas: "ಸೇವೆಗಳು ನೋಡಿ",
      listingEyebrow: "ದೇವಸ್ಥಾನ ಮಾಹಿತಿ",
      category: "ವರ್ಗ",
      coordinates: "ನಿರ್ದೇಶಾಂಕಗಳು",
      location: "ಸ್ಥಳ",
      sevasTitle: "ಪೂಜೆ ಮತ್ತು ದೇವಾಲಯ ಸೇವೆಗಳು",
      sevasBody:
        "ಸರಳ ಸೇವಾ ಪಟ್ಟಿ ಸಿದ್ಧವಾಗಿದೆ; ದೇವಾಲಯ ಕಚೇರಿ ದೃಢಪಡಿಸಿದ ನಂತರ ದರಗಳು ಮತ್ತು ಬುಕ್ಕಿಂಗ್ ಸಂಪರ್ಕಗಳನ್ನು ನವೀಕರಿಸಬಹುದು.",
      seeAllSevas: "ಎಲ್ಲ ಸೇವೆಗಳು ನೋಡಿ",
      galleryTitle: "ದೇವಾಲಯದ ಕ್ಷಣಗಳು",
      galleryBody:
        "ನಿಜವಾದ ದೇವಾಲಯ ಚಿತ್ರಗಳು, ಕಾರ್ಯಕ್ರಮಗಳು, ಅಲಂಕಾರ ಮತ್ತು ಉತ್ಸವ ನೆನಪುಗಳಿಗಾಗಿ ವೇಗವಾಗಿ ಲೋಡ್ ಆಗುವ ಚಿತ್ರ ವಿಭಾಗ ಸಿದ್ಧವಾಗಿದೆ.",
      openGallery: "ಚಿತ್ರಗಳು ತೆರೆಯಿರಿ"
    },
    historyPage: {
      eyebrow: "ಇತಿಹಾಸ",
      title: "ಶ್ರೀ ದುರ್ಗಾಪರಮೇಶ್ವರಿ ಭಕ್ತಿಯಲ್ಲಿ ನೆಲೆಗೊಂಡ ಪರಂಪರೆ",
      body: "ದೇವಾಲಯದ ಪರಂಪರೆಯ ಗೌರವಪೂರ್ಣ ಪರಿಚಯ; ದೃಢೀಕರಿಸಿದ ಸ್ಥಳಪುರಾಣ, ದಿನಾಂಕಗಳು ಮತ್ತು ಹಳೆಯ ದಾಖಲೆಗಳೊಂದಿಗೆ ಇನ್ನಷ್ಟು ವಿಸ್ತರಿಸಬಹುದು.",
      traditionEyebrow: "ಪರಂಪರೆ",
      traditionTitle: "ಜೀವಂತ ಆರಾಧನಾ ಕ್ಷೇತ್ರ",
      traditionBody:
        "ಶ್ರೀ ದುರ್ಗಾಪರಮೇಶ್ವರಿ ದೇವಸ್ಥಾನವು ಕಲ್ಲುಬೆಟ್ಟು, ನೈನಾಡು ಮತ್ತು ಸುತ್ತಮುತ್ತಲಿನ ಸಮುದಾಯಗಳ ಭಕ್ತರಿಗೆ ಆರಾಧನಾ ಕೇಂದ್ರವಾಗಿದೆ.",
      largeCopy:
        "ಇತಿಹಾಸ ವಿಭಾಗವನ್ನು ಗೌರವಪೂರ್ಣವಾಗಿ ಮತ್ತು ಸ್ಪಷ್ಟವಾಗಿ ಇಡಲಾಗಿದೆ. ದೇವಾಲಯದ ಹಿರಿಯರು ಅಥವಾ ಸಮಿತಿ ಸದಸ್ಯರು ನಿಖರ ಮೂಲ ಕಥೆ, ಉತ್ಸವ ದಾಖಲೆಗಳು ಮತ್ತು ಚಿತ್ರಗಳನ್ನು ಹಂಚಿದ ನಂತರ, ಈ ಪುಟವು ಭಕ್ತರು ಮತ್ತು ಮುಂದಿನ ಪೀಳಿಗೆಗಾಗಿ ಸಂಪೂರ್ಣ ಸಂಗ್ರಹವಾಗಬಹುದು.",
      viewGallery: "ಚಿತ್ರಗಳು ನೋಡಿ",
      templeSevas: "ದೇವಾಲಯ ಸೇವೆಗಳು",
      nextEyebrow: "ಮುಂದಿನ ಸಂಗ್ರಹ ಸೇರ್ಪಡೆಗಳು",
      nextTitle: "ಮೌಖಿಕ ಇತಿಹಾಸ, ಉತ್ಸವ ಕ್ಯಾಲೆಂಡರ್ ಮತ್ತು ಹಳೆಯ ಚಿತ್ರಗಳು",
      nextBody:
        "ಮೂಲ ಕಥೆ, ವಾರ್ಷಿಕ ಮಹೋತ್ಸವದ ವಿವರಗಳು, ಜೀರ್ಣೋದ್ಧಾರ ಹಂತಗಳು, ಟ್ರಸ್ಟಿಗಳ ಟಿಪ್ಪಣಿಗಳು ಮತ್ತು ಹಿಂದಿನ ಆಚರಣೆಗಳ ಚಿತ್ರಗಳನ್ನು ಸೇರಿಸಲು ಈ ಪುಟ ಸಿದ್ಧವಾಗಿದೆ.",
      shareDetails: "ವಿವರಗಳನ್ನು ದೇವಾಲಯ ತಂಡಕ್ಕೆ ಕಳುಹಿಸಿ"
    },
    sevasPage: {
      eyebrow: "ಸೇವೆಗಳು",
      title: "ಪ್ರಾರ್ಥನೆ, ಕೃತಜ್ಞತೆ ಮತ್ತು ಸೇವೆಗೆ ಸಮರ್ಪಣೆಗಳು",
      body: "ಭಕ್ತರಿಗಾಗಿ ಸ್ವಚ್ಛ ಸೇವಾ ಪಟ್ಟಿ. ದೇವಾಲಯ ಕಚೇರಿ ದೃಢಪಡಿಸಿದ ನಂತರ ಸಮಯ, ಬುಕ್ಕಿಂಗ್ ವಿಧಾನ ಮತ್ತು ಮೊತ್ತಗಳನ್ನು ನವೀಕರಿಸಬಹುದು.",
      listEyebrow: "ಸೇವಾ ಪಟ್ಟಿ",
      listTitle: "ಲಭ್ಯವಿರುವ ದೇವಾಲಯ ಸೇವೆಗಳು",
      listBody:
        "ಪ್ರತಿ ಸೇವಾ ಕಾರ್ಡ್‌ನಲ್ಲಿ ನಿಖರ ದರ, ದಿನಾಂಕ ಮತ್ತು ಬುಕ್ಕಿಂಗ್ ನಿಯಮಗಳನ್ನು ಮುಂದಕ್ಕೆ ಸುಲಭವಾಗಿ ಸೇರಿಸಬಹುದು.",
      detailsUpdate: "ವಿವರಗಳು ನವೀಕರಿಸಬೇಕಿದೆ",
      bookingEyebrow: "ಬುಕ್ಕಿಂಗ್",
      bookingTitle: "ಸೇವಾ ಬುಕ್ಕಿಂಗ್ ಸಂಪರ್ಕವನ್ನು ಇಲ್ಲಿ ಸೇರಿಸಲಾಗುತ್ತದೆ",
      bookingBody:
        "ದೇವಾಲಯ ಕಚೇರಿ ಫೋನ್, WhatsApp ಸಂಖ್ಯೆ ಅಥವಾ ಇಮೇಲ್ ಹಂಚಿದ ನಂತರ, ಭಕ್ತರು ಈ ಪುಟದಿಂದ ನೇರವಾಗಿ ವಿಚಾರಿಸಬಹುದು.",
      goContact: "ಸಂಪರ್ಕಕ್ಕೆ ಹೋಗಿ"
    },
    galleryPage: {
      eyebrow: "ಚಿತ್ರಗಳು",
      title: "ಪೂಜೆ, ಉತ್ಸವಗಳು ಮತ್ತು ದೇವಾಲಯ ಜೀವನದ ಚಿತ್ರಗಳು",
      body: "Next.js ಚಿತ್ರ ಆಪ್ಟಿಮೈಸೇಶನ್ ಬಳಸಿ ನಿರ್ಮಿಸಿದ ಈ ಗ್ಯಾಲರಿಯಲ್ಲಿ ನಿಜವಾದ ದೇವಾಲಯ ಚಿತ್ರಗಳು ಮೊಬೈಲ್ ಮತ್ತು ಡೆಸ್ಕ್ಟಾಪ್‌ನಲ್ಲಿ ವೇಗವಾಗಿ ಲೋಡ್ ಆಗುತ್ತವೆ.",
      photosEyebrow: "ಚಿತ್ರಗಳು",
      photosTitle: "ದೇವಾಲಯ ಗ್ಯಾಲರಿ",
      photosBody:
        "ಇವು ತಾತ್ಕಾಲಿಕ ಚಿತ್ರಗಳು. ನಿಜವಾದ ದೇವಾಲಯ ಚಿತ್ರಗಳು ಸಿದ್ಧವಾದಾಗ ಅವುಗಳನ್ನು ಇಲ್ಲಿ ಬದಲಾಯಿಸಬಹುದು.",
      albumsTitle: "ನಿಜವಾದ ದೇವಾಲಯ ಆಲ್ಬಮ್‌ಗಳಿಗೆ ಸಿದ್ಧ",
      albumsBody:
        "ಸಂಗ್ರಹ ಹೆಚ್ಚಾದಂತೆ ವಾರ್ಷಿಕ ಉತ್ಸವ, ನಿತ್ಯ ಅಲಂಕಾರ, ಪ್ರಸಾದ ಸೇವೆ, ಜೀರ್ಣೋದ್ಧಾರ ಮತ್ತು ಸಮುದಾಯ ಕಾರ್ಯಕ್ರಮಗಳ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಸೇರಿಸಬಹುದು.",
      contactTeam: "ದೇವಾಲಯ ತಂಡವನ್ನು ಸಂಪರ್ಕಿಸಿ"
    },
    committeeSection: {
      eyebrow: "ಸಮಿತಿ",
      title: "ದೇವಸ್ಥಾನ ಸಮಿತಿ ಸದಸ್ಯರು",
      body:
        "ಚಿತ್ರ, ಹೆಸರು ಮತ್ತು ಹುದ್ದೆಯ ಸ್ಥಳಗಳು ಸಿದ್ಧವಾಗಿವೆ. ದೃಢಪಟ್ಟ ಸಮಿತಿ ಪಟ್ಟಿ ಸಿಕ್ಕ ನಂತರ ಈ ತಾತ್ಕಾಲಿಕ ವಿವರಗಳನ್ನು ಬದಲಾಯಿಸಬಹುದು."
    },
    contactPage: {
      eyebrow: "ಸಂಪರ್ಕ",
      title: "ದೇವಾಲಯವನ್ನು ಸಂಪರ್ಕಿಸಿ ಮತ್ತು ಭೇಟಿ ಯೋಜಿಸಿ",
      body: "Google Maps ಪಟ್ಟಿಯಿಂದ ದಾರಿ ಮಾಹಿತಿ ಲಭ್ಯ. ದೃಢಪಟ್ಟ ನಂತರ ದೇವಾಲಯ ಕಚೇರಿ ಸಂಪರ್ಕ ವಿವರಗಳನ್ನು ಸೇರಿಸಲಾಗುತ್ತದೆ.",
      officeEyebrow: "ದೇವಾಲಯ ಕಚೇರಿ",
      detailsTitle: "ಸಂಪರ್ಕ ವಿವರಗಳು",
      detailsBody:
        "ಭಕ್ತರಿಗೆ ಪ್ರಕಟಿಸುವ ಮೊದಲು ಅಂತಿಮ ಸಂಪರ್ಕ ಮಾಹಿತಿಯನ್ನು ದೃಢಪಡಿಸಿ.",
      address: "ವಿಳಾಸ",
      phone: "ಫೋನ್",
      email: "ಇಮೇಲ್",
      eHundiNote: "ದೇವಸ್ಥಾನದ ಅಧಿಕೃತ ಖಾತೆ ದೃಢೀಕರಣದ ನಂತರ QR ಸೇರಿಸಲಾಗುತ್ತದೆ.",
      quickNotes: "ತ್ವರಿತ ಟಿಪ್ಪಣಿಗಳು",
      beforePublishing: "ಪ್ರಕಟಿಸುವ ಮೊದಲು",
      notePhone: "ಅಧಿಕೃತ ಫೋನ್ ಸಂಖ್ಯೆ ಮತ್ತು ಇಮೇಲ್ ದೃಢಪಡಿಸಿ.",
      noteTimings: "ದರ್ಶನ ಸಮಯ ಮತ್ತು ಉತ್ಸವ ದಿನಾಂಕಗಳನ್ನು ಸೇರಿಸಿ.",
      noteQr: "ಇ-ಹುಂಡಿ ತಾತ್ಕಾಲಿಕ QR ಅನ್ನು ದೃಢಪಟ್ಟ QR ನಿಂದ ಬದಲಿಸಿ.",
      notePhotos: "ನಿಜವಾದ ದೇವಾಲಯ ಗ್ಯಾಲರಿ ಚಿತ್ರಗಳನ್ನು ಅಪ್ಲೋಡ್ ಮಾಡಿ."
    }
  }
} satisfies Record<Language, unknown>;
