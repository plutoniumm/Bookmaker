<script>
  export let book;
  const { OLID, author, name, index, image, flags } = book;
</script>

<div id={OLID} class="book t5 d-b f rx10 p5 m5 p-rel" class:t5={flags.tops}>
  <a href={`https://www.amazon.com/s?k=${name} ${author}`}>
    {#if image !== "None"}
      <img class="rx10" src={`data:image/jpeg;base64,${image}`} alt={name} />
    {:else}
      <img class="rx10" src="/icons/if.svg" alt={name} />
    {/if}
  </a>

  <a href="#{OLID}" class="w-100 f-col j-ar">
    <div class="fw6" style="font-size: 1.25em;">
      {parseInt(index)}.<br />
      {name}
    </div>
    <i class="d-i"> {author} </i>
  </a>
</div>

<style lang="scss">
  .t5 {
    background-color: #fd04;
    &::after {
      content: "★";
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 2em;
      color: #db0;
    }
  }
  i {
    color: #222;
  }
  img {
    width: auto;
    max-width: 150px;
    aspect-ratio: 3/4 !important;
    margin-right: 10px;
    object-fit: cover;

    border-right: 3px solid #8888;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  .book {
    --scale: 33%;
    width: calc(var(--scale) - 40px);
    z-index: 1;
  }

  @media (max-width: 768px) {
    .book {
      --scale: 50%;
    }
  }
  @media (max-width: 768px) {
    .book {
      --scale: 100%;
    }
    img {
      max-width: 120px;
    }
  }
</style>
