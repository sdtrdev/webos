<script>
  import { push } from "svelte-spa-router";

  let user = "";
  let password = "";

  const handleLogin = async () => {
    const data = { user, password };
    const post = await fetch("http://localhost:5500/api/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const res = await post.json();

    if (res.success) {
      window.localStorage.setItem("auth", res.success);
      push("/home");
    } else {
      return false;
    }
  };
</script>

<div class="form">
  <div class="form-group">
    <input class="input" type="text" bind:value={user} placeholder="username" />
  </div>
  <div class="form-group">
    <input
      class="input"
      type="password"
      bind:value={password}
      placeholder="password"
    />
  </div>
  <div class="form-group">
    <button on:click={handleLogin}>Login</button>
  </div>
</div>

<style lang="scss">
  .form {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px);
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    padding: 5rem 8rem;
  }

  .input {
    background: rgba(255, 255, 255, 0.2);
    border: none;

    &::placeholder {
      color: #fff;
    }
  }
</style>
