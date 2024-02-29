<div>
  <h1>
    More than just shorter links
  </h1>
  <p>
    Build your brand's recognition and get detailed insights on how your links are performing.
  </p>
  <a href="/">
    Get started
  </a>
</div>

<style>
  div {
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image: url("./images/illustration-working.svg");
    background-repeat: no-repeat;
    background-position-x: 125%;
    background-size: 50% 100%;
    user-select: none;
  }
  h1 {
    width: 50%;
    margin: 0;
    font-size: 4rem;
  }

  p {
    width: 50%;
    color: var(--gray);
    margin: 0;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8rem;
    height: 2.5rem;
    margin-top: 1.5rem;
    border-radius: 1.25rem;
    color: var(--white);
    background-color: var(--cyan);
  }

  @media screen and (width > 1180px) {
    div {
      padding-inline: calc((100% - 1140px) / 2);
    }
  }
</style>
