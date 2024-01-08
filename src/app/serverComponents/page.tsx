import Content from "@components/Content";
import LikeCounter from "@components/serverComponentPage/LikeCounter";
import ProfileContent from "@components/serverComponentPage/ProfileContent";

const ServerComponentsPage = () => {
  return (
    <div>
      <Content content="This is server components page" />
      <LikeCounter>
        <ProfileContent />
      </LikeCounter>
    </div>
  );
};
export default ServerComponentsPage;
