<script>
  import { SOCIAL_ICONS } from "../utils/constants";
</script>
<ul>
  {#each SOCIAL_ICONS as icon}
    <li>
      <a href="/">
        <img src={icon.src} alt={icon.alt}>
      </a>
    </li>
  {/each}
</ul>


<style>
  ul {
    display: flex;
    gap: 0.5rem;
  }

  li {
    list-style: none;
    padding-top: 5px;
  }

  img {
    display: block;
  }
</style>
