<script lang="ts">
  import { language, changeLanguage, languagesEnum, type Languages } from '../plugins/i18n'

  const norwegian = languagesEnum.no
  const english = languagesEnum.en
  let currentlanguage: Languages

  language.subscribe((value) => {
    currentlanguage = value
  })
</script>

<div class="mb-4">
  <button class:text-gray-600={currentlanguage !== norwegian} on:click={() => changeLanguage(norwegian)}> Norwegian </button>
  |
  <button class:text-gray-600={currentlanguage !== english} on:click={() => changeLanguage(english)}>English</button>
</div>
