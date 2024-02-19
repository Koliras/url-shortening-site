<footer>
  Footer content
</footer>

<style>
  footer {
    position: sticky;
    display: flex;
    top: 100%;
    /* left: 0; */
    box-sizing: border-box;
    min-height: fit-content;
    width: 100%;
    min-width: 320px;
    padding: 20px;
    margin: 0;

    color: var(--white);
    background-color: var(--very-dark-violet);
  }

  @media screen and (width > 1180px) {
    footer {
      padding: 20px calc((100% - 1140px) / 2);
    }
  }
</style>