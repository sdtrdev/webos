import Intro from "./views/Intro.svelte";
import Login from "./views/Login.svelte";
import Home from "./views/Home.svelte";
import BSOD from "./views/BSOD.svelte";
import { wrap } from "svelte-spa-router/wrap";
import { loggedIn } from "./store/auth";
import { push } from "svelte-spa-router";

export default {
  "/": Intro,
  "/home": wrap({
    component: Home,
    conditions: [
      async (detail) => {
        if (!loggedIn) {
          push("/");
          return false;
        } else {
          return true;
        }
      },
    ],
  }),
  "/login": Login,
  "*": BSOD,
};
