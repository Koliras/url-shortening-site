<script>
  import { STATISTICS_CARD_DATA }  from '../utils/constants'
</script>
<div class="container">
  <h2 class="sectionHeader">Advanced statistics</h2>
  <p class="sectionDesc">Track, how your links are performing among the web with our advanced statistics dashboard.</p>

  <div class="cardContainer">
    {#each STATISTICS_CARD_DATA as card, i }
      <div class="card card-{i + 1}">
        <span>
          <img src={card.icon} alt="">
        </span>
        <h3 class="cardTitle">{card.title}</h3>
        <p class="cardText">{card.content}</p>
      </div>
    {/each}
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--light-gray);
    margin: 0;
    padding-block: 5rem;
  }

  .sectionHeader {
    margin: 0;
  }

  .sectionDesc {
    color: var(--gray);
    width: 50%;
    margin-bottom: 4rem;
    text-align: center;
  }

  .cardContainer {
    display: flex;
    gap: 1.5rem;
    height: 20rem;
    position: relative;
  }

  .cardContainer::after {
    content: '';
    width: 80%;
    border: 0.25rem solid var(--cyan);
    position: absolute;
    left: 10%;
    top: 50%;
  }

  .card {
    position: relative;
    background-color: var(--white);
    border-radius: 1rem;
    box-shadow: 0 0.25rem 0.25rem gray; 
    height: fit-content;
    z-index: 1;
  }

  .card-1 {
    align-self: flex-start;
  }

  .card-2 {
    align-self: center; 
  }

  .card-3 {
    align-self: flex-end;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    box-sizing: border-box;
    border-radius: 50%;
    background-color: var(--very-dark-blue);
    position: absolute;
    top: -2rem;
  }
  
  img {
    width: 50%;
    height: 50%;
  }

  .cardText {
    color: var(--gray);
  }

  @media screen and (width > 1180px) {
    .container {
      padding-inline: calc((100% - 1140px) / 2);
    }
  }
</style>
