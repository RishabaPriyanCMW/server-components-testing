import Content from "@components/Content";
import PrimaryLinkButton from "@components/buttons/PrimaryLinkButton";
import { APP_ID, BASE_URL } from "@components/env";
import axios from "axios";
import { Fragment } from "react";

export async function getUsers() {
  const users = await axios
    .get(`${BASE_URL}/user`, { headers: { "app-id": APP_ID } })
    .then(({ data }) => {
      return data;
    });
  return users;
}

const BuildTimeGenerationPage = async () => {
  const users = await getUsers();
  return (
    <div>
      {users.data.map((user: any, index: number) => {
        return (
          <Fragment key={index}>
            <PrimaryLinkButton
              label={`page ${index + 1}`}
              href={`/user/${user.id}`}
            />
          </Fragment>
        );
      })}
      <Content content="This is build time generated page" />
    </div>
  );
};
export default BuildTimeGenerationPage;
