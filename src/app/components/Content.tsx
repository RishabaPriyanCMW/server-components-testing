import PrimaryLinkButton from "./buttons/PrimaryLinkButton";

const Content = ({ content }: { content: string }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "30px",
        alignItems: "center",
        justifyContent: "center",
        background: "white",
      }}
    >
      <PrimaryLinkButton label={"Home page"} href={"/"} />
      <p>{content}</p>
    </div>
  );
};
export default Content;
