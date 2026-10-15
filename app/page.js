import acknowledgements from "../data/acknowledgements";
import Refresh from "./refresh";

// Force a fresh render (and therefore a fresh random pick) on every page load.
export const dynamic = "force-dynamic";

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
        padding: "2rem",
        textAlign: "center",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        background: `linear-gradient(135deg, ${pick.accent}22, #ffffff)`,
        transition: "background 0.4s ease",
      }}
    >
      <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>{pick.flag}</div>
      <h1 style={{ fontSize: "1.75rem", marginBottom: "0.25rem", color: "#111" }}>
        {pick.name}
      </h1>
      <h2
        style={{
          fontSize: "1rem",
          fontWeight: 500,
          color: pick.accent,
          marginBottom: "1.5rem",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
        }}
      >
        {pick.country}
      </h2>
      <p
        style={{
          maxWidth: 560,
          fontSize: "1.15rem",
          lineHeight: 1.6,
          color: "#333",
        }}
      >
        {pick.message}
      </p>

      <Refresh accent={pick.accent} />
    </main>
  );
}
