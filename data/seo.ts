export const defaultSiteUrl =
  "https://kallubettu-durgaparameshwari-temple.netlify.app";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl
).replace(/\/$/, "");

export const siteRoutes = ["/", "/history", "/sevas", "/gallery", "/contact"];

export const siteTitle = "Sri Durgaparameshwari Temple, Kallubettu";

export const siteDescription =
  "Official website for Sri Durgaparameshwari Temple, Kallubettu, Nainadu with sevas, gallery, history, e-hundi, contact, and Google Maps directions.";
