<script>
</script>

<nav class="fade-down">
    <section class="ƒ ∆-bw">
        <div class="ƒ fw3" id="nav-hero">
            <div class="ƒ space-btm" style="border-bottom:2px solid #000">
                <!-- <a href="/equations" sveltekit:prefetch> -->
                <a href="/">
                    <img src="/icons/if.svg" alt="Logo" />
                </a>
                <a href="/">iFactorial</a>
            </div>
        </div>
        <div class="space-btm">
            <svg id="mode-change" viewBox="0 0 32 32">
                <path
                    d="M14 2C 9 2 3 7 3 15 3 23 9 29 17 29 25 29 30 23 30 18 19 25 7 13 14 2Z"
                />
            </svg>
        </div>
    </section>
</nav>

<style lang="scss">
    svg {
        fill: none;
        stroke: currentcolor;
    }
    img,
    svg {
        width: 24px;
        height: 24px;
    }

    nav {
        background: #fff;
        align-items: center;
        width: calc(100% - 2rem);
        padding: 1rem 1rem 0 1rem;
        border-bottom: 1px solid #0001;
        section {
            max-width: calc(1040px + 40px);
            margin: 0 auto;
        }
        img {
            padding-top: 3px;
            margin-right: 7px;
        }
        #nav-hero {
            font-size: 1.5em;
            color: #888;
        }
        .space-btm {
            padding-bottom: 0.75rem;
        }
    }
</style>
