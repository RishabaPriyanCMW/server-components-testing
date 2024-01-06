import PrimaryLinkButton from "./buttons/PrimaryLinkButton";

const Content = ({ content }: { content: string }) => {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "30px",
        height: "90vh",
        alignItems: "center",
        justifyContent: "center",
        background: "white",
      }}
    >
      <PrimaryLinkButton label={"Home page"} href={"/"} />
      <p>{content}</p>
    </main>
  );
};
export default Content;
