<script>
  import { NAVIGATION_LINKS } from "../utils/constants";
</script>

<nav>
  <ul>
    {#each NAVIGATION_LINKS as link}
      <li>
        <a href="{link.destination}">
          {link.title}
        </a>
      </li>  
    {/each}
  </ul>
</nav>

<style>
  ul {
    list-style: none;
    display: flex;
    gap: 1rem;
  }

  li {
    display: inline;
  }

  a {
    color: var(--gray);
  }
</style>
