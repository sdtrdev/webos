<script>
import { push } from "svelte-spa-router";

  import { loggedIn } from "../store/auth";

  const handleLogout = () => {
    window.localStorage.setItem("auth", "false");
    loggedIn.set(false);
    push('/')
  };
</script>

<div class="panel">
  <button on:click={handleLogout}>çıkış yap</button>
</div>

<style lang="scss">
  .panel {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    height: 2rem;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
</style>
