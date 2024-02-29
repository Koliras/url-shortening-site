<script>
  export let title = 'Placeholder';
  export let links = [];
</script>

<div>
  <h3>{title}</h3>
  <ul>
    {#each links as link}
      <li>
        <a href="{link.destination}">
          {link.title}
        </a>
      </li>
    {/each}
  </ul>
</div>

<style>
  h3 {
    font-size: 1.2rem;
    font-weight: 500;
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: var(--grayish-violet);
  }
</style>