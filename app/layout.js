import "./globals.css";

export const metadata = {
  title: "Camping World Map — Every campsite on Earth",
  description: "An interactive world map of every campsite from OpenStreetMap. Explore thousands of places to pitch a tent, anywhere on the planet.",
  openGraph: {
    title: "Camping World Map",
    description: "An interactive world map of every campsite from OpenStreetMap. Explore thousands of places to pitch a tent, anywhere on the planet.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
