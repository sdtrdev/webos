<script>
  import Router from "svelte-spa-router";
  import routes from "./routes";
</script>

<main class="main">
  <Router {routes} />
</main>


<style>
  .main {
    height: 100vh;
    background: url("../img/wp.jpg") no-repeat center center;
    background-size: cover;
  }
</style>
