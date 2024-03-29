import PrimaryLinkButton from "@components/buttons/PrimaryLinkButton";
import { APP_ID, BASE_URL } from "@components/env";
import { UserInterface } from "@components/types/user";
import axios from "axios";

export async function generateStaticParams() {
  const users = await axios
    .get(`${BASE_URL}/user?limit=10`, { headers: { "app-id": APP_ID } })
    .then(({ data }) => {
      return data;
    });

  return users.data.map((user: UserInterface) => ({ id: user.id }));
}
const getUserById = async (id: string) => {
  const user = await axios
    .get(`${BASE_URL}/user/${id}`, { headers: { "app-id": APP_ID } })
    .then(({ data }) => {
      return data;
    });
  console.log("user getUserById", user);
  return user;
};

const UserIdPage = async ({ params }: { params: { id: string } }) => {
  const user: UserInterface = await getUserById(params.id);
  console.log("console content", user); // NOTE : this will be logged in the server console

  return (
    <div>
      <p>{user.id}</p>
      <h1>{`${user.firstName} ${user.lastName}`}</h1>
      <img src={user.picture} alt={user.title} />
      <PrimaryLinkButton
        href="/buildTimeGeneration"
        label="Go to build time rendering page"
      />
    </div>
  );
};
export default UserIdPage;
