"use client";

import { useState } from "react";

const criteria = [
  {
    heading: "Digital skills",
    subtext:
      "Video stories, Fonts, Personal writings, Voice recordings, Photocollage etc",
  },
  {
    heading: "Personal Reflections",
    subtext:
      "Either from your Birrarung Wilam Walk / Walk on Campus, or from your response from 65,000 years curious questions",
  },
  {
    heading: "Design sensibilities",
    subtext:
      "Based on your inclass Acknowledgement design experimentation, Blak Douglas study and Jeffa Greenaway study",
  },
];

export default function Overlay({ label }) {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2.5rem",
        padding: "2rem",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        zIndex: 1000,
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          color: "#111",
          textAlign: "center",
          maxWidth: 700,
        }}
      >
        This is a demo of "{label}'s" work
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1.5rem",
          maxWidth: 1000,
        }}
      >
        {criteria.map((c) => (
          <div
            key={c.heading}
            style={{
              flex: "1 1 260px",
              maxWidth: 300,
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "1.5rem",
              textAlign: "left",
            }}
          >
            <h2
              style={{
                fontSize: "1.1rem",
                marginBottom: "0.75rem",
                color: "#111",
              }}
            >
              {c.heading}
            </h2>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.5, color: "#555" }}>
              {c.subtext}
            </p>
          </div>
        ))}
      </div>

      <button
        onClick={() => setOpen(false)}
        style={{
          padding: "0.75rem 1.75rem",
          fontSize: "1rem",
          borderRadius: "999px",
          border: "none",
          background: "#111",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Continue to the website
      </button>
    </div>
  );
}
