import acknowledgements from "../data/acknowledgements";

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
        alignItems: "center",
        justifyContent: "center",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2rem", color: "#111" }}>{pick.label}</h1>
    </main>
  );
}
