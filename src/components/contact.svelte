<script lang="ts">
  import { t } from "../plugins/i18n";

  let text;

  $: {
    text = $t.contact;
  }
</script>

<a
  href="mailto:malinmertens@gmail.com"
  target="_blank"
  rel="noopener"
  class="m-4 border-2 border-black px-8 py-2 rounded hover:bg-black hover:text-white transition duration-200"
>
  {text.button}
</a>
<p class="text-left my-2 mx-4">
  {text.p1}
</p>
