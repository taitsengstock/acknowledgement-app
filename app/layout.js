export const metadata = {
  title: "Acknowledgement",
  description: "A personalized acknowledgement, shown fresh each visit.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
