import Link from "next/link";
const PrimaryLinkButton = ({
  label,
  href,
}: {
  label: string;
  href: string;
}) => {
  return (
    <Link href={href}>
      <button
        style={{
          padding: "10px",
          textTransform: "uppercase",
          cursor: "pointer",
        }}
      >
        {label}
      </button>
    </Link>
  );
};
export default PrimaryLinkButton;
