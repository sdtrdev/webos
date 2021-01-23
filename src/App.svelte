<script>
  import { Router } from "svelte-router-spa";
  import { routes } from "./routes";
  import { loggedIn } from "./store/auth";

  const handleLogin = () => {
    $loggedIn = !$loggedIn;
  };
</script>

<Router {routes} />

<nav>
  <a href="/">home</a>
  <a href="/login">login</a>
  <a href="/contact">contact</a>
</nav>

<button on:click={handleLogin}>
  {#if !$loggedIn} login {:else} logout {/if}
</button>

<style>
  @import "styles/app.scss";

  nav {
    position: relative;
  }
</style>
