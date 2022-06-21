<script>
    import Section from "@components/section.svelte";
    const getMonthCount = (dt1 = 1655824523792, dt2 = new Date()) => {
        let months;
        const [d1, d2] = [dt1, dt2].map((e) => new Date(e));
        months = (d2.getFullYear() - d1.getFullYear()) * 12;
        months -= d1.getMonth();
        months += d2.getMonth();

        return Math.abs(months) + 1;
    };
    const current = getMonthCount();
</script>

<section>
    <details class="p20 rx10 m10 shadow bgf ptr">
        <summary>What is this?</summary>
        <div class="rx5 p10">
            This is a collection of some Art & Math I found or made.*
            <p>
                <strong>ArtMath</strong> is Math. That intrinsically looks elegant
                or beautiful. I try to keep it concise so as to not make even theorem
                proofs fair game.
            </p>
            <p>
                <strong>MathArt</strong> is Art. Just assisted heavily by some mathematical
                property or entity. Doesn't have to be complex (that was not deliberate)
            </p>
            <span style="color:#666;font-size:0.8em;">
                *: While I do consider Comedy as art there is an abundance of
                memes on the internet therefore making them redundant here.
            </span>
        </div>
    </details>

    <Section id={current} />
    <!-- Random Inspiration https://commons.wikimedia.org/wiki/Category:Animations_of_curves -->
</section>

<style>
    details {
        max-width: 500px;
        margin-left: 0;
    }
</style>
