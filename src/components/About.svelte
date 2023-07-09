<script lang="ts">
  import { t } from "../plugins/i18n";

  let bios = $t.bios;
  let items = Object.keys(bios).map(id => ({ id, alt: bios[id].alt, text: bios[id].text }));
</script>

{#each items as item, index (index)}
  <article class="flex justify-center w-full flex-wrap lg:flex-nowrap {index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}">
    <div>
      <img width="192" height="288" class="lg:max-w-48 h-auto"
        src={`/assets/images/profiles/${item.id}-192w.jpg`} alt={item.alt} />
    </div>
    <p class="flex items-center p-4 lg:p-0 {index % 2 === 0 ? 'lg:ml-6' : 'lg:mr-6'}">
      {item.text}
    </p>
  </article>
{/each}
