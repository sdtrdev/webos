import Login from "./views/Login.svelte";
import Home from "./views/Home.svelte";
import Contact from "./views/Contact.svelte";

import { user } from "./store/auth";

function userIsAdmin() {
  return user.data.loggedIn;
}

const routes = [
  {
    name: "/",
    component: Home,
  },
  { name: "login", component: Login },
  {
    name: "contact",
    component: Contact,
    onlyIf: { guard: userIsAdmin, redirect: "/login" },
  },
];

export { routes };
