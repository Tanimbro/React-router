import Account from "../../components/accounts";
import Contact from "./Contact";

export default {
  path: "/account",
  element: <Account />,
  children: [Contact],
};