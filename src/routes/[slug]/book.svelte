<script>
  import View from "@components/view.svelte";
  import Chip from "@components/chip.svelte";
  import { img } from "@components/openlib.js";

  export let book, index;
  const { OLID, again, author, name, description, tags, cover } = book;
</script>

<div id={OLID} class="book bgf ƒ rpm-5 p-rel">
  <link rel="prefetch" href={img(cover)} />
  <View once let:intersecting top={400}>
    {#if intersecting}
      <img
        class="rx5"
        src={cover !== 0 ? img(cover) : "/icons/if.svg"}
        alt={name}
      />
    {:else}
      <img class="rx5" src="/icons/if.svg" alt={name} />
    {/if}
  </View>
  <div class="w-100 ƒ-col ∆-bw">
    <div>
      <span class="fw6">{index + 1}. {name} <i>- {author}</i></span> <br />
      <p>{description}</p>
    </div>
    <div class="tags ƒ" style="justify-content:end">
      <Chip color="yellow" className="superHover" style="color:#222;">
        <a href={`https://www.amazon.com/s?k=${name} ${author}`}>Amzn</a>
      </Chip>

      {#if tags === "®"}
        <Chip color="green" text="Recommended" />
      {:else if tags.includes("MORE")}
        <Chip color="blue">
          <a href={tags.split("::")[1].trim()}>See More</a>
        </Chip>
      {:else if tags != 0}{tags}{/if}

      {#if again.toLowerCase() === "yes"}
        <Chip color="yellow" text="Dense" />
      {/if}
    </div>
  </div>
</div>

<style lang="scss">
  i {
    color: #222;
  }
  img {
    height: auto;
    max-height: 175px;
    aspect-ratio: 1 !important;
    margin-right: 10px;
    object-fit: cover;
  }
  .book {
    z-index: 1;
    width: calc(50% - 20px);
  }

  :global {
    .superHover {
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
    }
    .book:hover .superHover {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    .book {
      width: calc(100% - 20px);
      margin: 5px 10px;
    }
    img {
      max-width: 120px;
      aspect-ratio: 3/4 !important;
    }
  }
</style>
