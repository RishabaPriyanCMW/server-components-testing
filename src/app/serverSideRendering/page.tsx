import Content from "@components/Content";
import { APP_ID, BASE_URL } from "@components/env";
import axios from "axios";

// export const getAllUsers = async () => {
//   const users = await axios
//     .get(`${BASE_URL}/user?limit=10`, { headers: { "app-id": APP_ID } })
//     .then(({ data }) => {
//       return data;
//     });
//   return users;
// };

const ServerSideRenderingPage = async () => {
  // const users = await getAllUsers();
  // console.log("users", users);
  return <Content content="This is server side rendered page" />;
};
export default ServerSideRenderingPage;
