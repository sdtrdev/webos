<script>
  import { Router } from "svelte-router-spa";
  import { routes } from "./routes";
  import { user } from "./store/auth";

  const handleLogin = () => {
    user.login();
  };
</script>

<nav>
  <a href="/">home</a>
  <a href="/login">login</a>
  <a href="/contact">contact</a>
</nav>

<Router {routes} />

<button on:click={handleLogin}>
  {#if !$user.loggedIn} login {:else} logout {/if}
</button>

<style>
  @import "styles/app.scss";

  nav {
    position: relative;
  }
</style>
