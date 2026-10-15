"use client";

import { useRouter } from "next/navigation";

export default function Refresh({ accent }) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.refresh()}
      style={{
        marginTop: "2.5rem",
        padding: "0.6rem 1.4rem",
        fontSize: "0.9rem",
        borderRadius: "999px",
        border: `1px solid ${accent}`,
        background: "transparent",
        color: accent,
        cursor: "pointer",
      }}
    >
      Show another acknowledgement
    </button>
  );
}
