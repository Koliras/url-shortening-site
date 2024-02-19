<script>
  import Navigation from "./Navigation.svelte";
</script>

<header>
  <div class="links">
    <a href="/" class="mainLink">Shortly</a>

    <Navigation />
  </div>

  <div class="signIn">
    <a href="/" class="logIn">Log in</a>
    <a href="/" class="signUp">Sign up</a>
  </div>
</header>

<style>
  header {
    display: flex;
    position: sticky;
    box-sizing: border-box;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px 40px;
    margin: auto;
    align-items: center;
    justify-content: space-between;
    background-color: var(--white);
  }

  .links {
    display: flex;
    align-items: center;
  }

  .mainLink {
    font-size: 1.5rem;
    font-weight: 700;
    color: inherit;
    display: inline;
  }

  @media screen and (width > 1180px) {
    header {
      padding: 20px calc((100% - 1140px) / 2);
    }
  }
</style>