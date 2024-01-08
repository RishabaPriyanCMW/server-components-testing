import { APP_ID, BASE_URL } from "@components/env";
import axios from "axios";

const getUserById = async (id: string) => {
  const user = await axios
    .get(`${BASE_URL}/user/${id}`, { headers: { "app-id": APP_ID } })
    .then(({ data }) => {
      return data;
    });

  return user;
};
const ProfileContent = async () => {
  const user = await getUserById("60d0fe4f5311236168a109d2");

  return (
    <div>
      <p>{user.id}</p>
      <h1>{`${user.firstName} ${user.lastName}`}</h1>
      <img src={user.picture} alt={user.title} />
    </div>
  );
};
export default ProfileContent;
