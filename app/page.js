"use client";

import dynamic from "next/dynamic";

const MapView = dynamic(() => import("../components/MapView"), { ssr: false });

export default function Home() {
  return (
    <main className="map-root">
      <MapView />
      <div className="overlay">
        <h1>🏕️ Camping World Map</h1>
        <p>Every campsite on Earth, sourced live from OpenStreetMap. Zoom in and find your next place to pitch a tent — from alpine meadows to coastal dunes.</p>
        <span className="count" id="point-count">
          Loading campsites…
        </span>
      </div>
      <div className="footer-credit">
        Data &copy;{" "}
        <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">
          OpenStreetMap
        </a>{" "}
        contributors
      </div>
    </main>
  );
}
