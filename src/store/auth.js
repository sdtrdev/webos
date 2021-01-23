import { writable, get } from "svelte/store";

function createUserStore() {
  const inital = {
    name: "",
    loggedIn: false,
  };

  const store = writable(inital);

  const login = () => {
    store.update((u) => ({ ...u, loggedIn: true }));
  };

  const logout = () => {
    store.update((u) => ({ ...u, loggedIn: false }));
  };

  const data = get(store);

  return {
    subscribe: store.subscribe,
    login,
    logout,
    data,
  };
}

export const user = createUserStore();
