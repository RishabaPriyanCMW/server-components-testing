"use client";
import Content from "@components/Content";
import PrimaryLinkButton from "@components/buttons/PrimaryLinkButton";
import { APP_ID, BASE_URL } from "@components/env";
import { UserInterface } from "@components/types/user";
import axios from "axios";
import { Fragment } from "react";

const NormalPage = async () => {
  const users = await axios
    .get(`${BASE_URL}/user?limit=10`, { headers: { "app-id": APP_ID } })
    .then(({ data }) => {
      return data;
    });
  if (!users) return <div>loading...</div>;
  return (
    <div>
      {users.data.map((user: UserInterface, index: number) => {
        return (
          <Fragment key={index}>
            <PrimaryLinkButton
              label={`page ${index + 1}`}
              href={`/user/${user.id}`}
            />
          </Fragment>
        );
      })}
      <Content content="This is normal page" />
    </div>
  );
};
export default NormalPage;
