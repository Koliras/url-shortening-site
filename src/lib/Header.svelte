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
    z-index: 10;
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

  .signIn {
    display: flex;
    gap: 2rem;
    align-items: center;
  }

  .logIn {
    color: var(--gray);
  }

  .signUp {
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 20px;
    color: var(--white);
    background-color: var(--cyan);
  }

  @media screen and (width > 1180px) {
    header {
      padding: 20px calc((100% - 1140px) / 2);
    }
  }
</style>
