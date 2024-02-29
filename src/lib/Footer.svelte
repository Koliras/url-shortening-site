<script>
  import { COMPANY_LINKS, FEATURES_LINKS, RESOURCES_LINKS } from "../utils/constants";
  import LinkList from "./LinkList.svelte";
</script>

<footer>
  <a href="/" class="mainLink">Shortly</a>

  <LinkList title='Features' links={FEATURES_LINKS} />
  <LinkList title='Resources' links={RESOURCES_LINKS} />
  <LinkList title='Company' links={COMPANY_LINKS}/>


</footer>

<style>
  footer {
    position: sticky;
    display: grid;
    top: 100%;
    box-sizing: border-box;
    min-height: fit-content;
    width: 100%;
    min-width: 320px;
    padding: 20px;
    margin: 0;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr;

    color: var(--white);
    background-color: var(--very-dark-violet);
  }

  .mainLink {
    font-size: 1.5rem;
    font-weight: 700;
    color: inherit;
    display: flex;
    margin: 16px 0;
    max-height: 40px;
    max-width: fit-content;
  }

  @media screen and (width > 1180px) {
    footer {
      padding: 20px calc((100% - 1140px) / 2);
    }
  }
</style>