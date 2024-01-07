import PrimaryLinkButton from "@components/buttons/PrimaryLinkButton";

`use client`;
export default function Home() {
  return (
    <main style={{ height: "90vh" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          alignItems: "center",
          justifyContent: "center",
          background: "white",
          flex: 1,
          height: "100%",
          textTransform: "uppercase",
        }}
      >
        <PrimaryLinkButton
          href="/serverComponents"
          label="go to server components page"
        />
        <PrimaryLinkButton
          href="/serverSideRendering"
          label="go to server side rendering page"
        />
        <PrimaryLinkButton
          href="/buildTimeGeneration"
          label="Go to build time rendering page"
        />
        <PrimaryLinkButton href="/normal" label="Go to normal page" />
      </div>
    </main>
  );
}
