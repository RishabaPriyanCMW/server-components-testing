export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ background: "gray", height: "100vh" }}>{children}</body>
    </html>
  );
}
