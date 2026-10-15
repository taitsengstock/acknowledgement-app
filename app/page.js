import acknowledgements from "../data/acknowledgements";

// Force a fresh render (and therefore a fresh random pick) on every page load.
export const dynamic = "force-dynamic";

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

export default function Page() {
  const pick =
    acknowledgements[Math.floor(Math.random() * acknowledgements.length)];

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2.5rem",
        padding: "2rem",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2rem", color: "#111" }}>{pick.label}</h1>

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
    </main>
  );
}
