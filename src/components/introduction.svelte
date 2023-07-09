<script lang="ts">
  import { t } from '../plugins/i18n'

  let text

  $: {
    text = $t.intro
  }
</script>

<section>
  <p class="text-left mt-12 mx-4 mb-4">
    {text.p1}<br /><br />
    {text.p2}<br /><br />
    {text.p3}<br /><br />
    {text.p4}
  </p>
</section>
