import Login from "./views/Login.svelte";
import Home from "./views/Home.svelte";
import Contact from "./views/Contact.svelte";

import { loggedIn } from "./store/auth";

function userIsAdmin() {
  let status = false;
  loggedIn.update((v) => (status = v));
  return status;
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
