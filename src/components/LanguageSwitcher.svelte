<script lang="ts">
  import { language, changeLanguage, languagesEnum, type Languages } from '../plugins/i18n'

  const norwegian = languagesEnum.no
  const english = languagesEnum.en
  let currentlanguage: Languages

  language.subscribe((value) => {
    currentlanguage = value
  })

  $: isNorwegian = currentlanguage === norwegian
  $: isEnglish = currentlanguage === english
</script>

<div class="mb-4">
  <button class:text-gray-600={!isNorwegian} class:underline={isNorwegian} class:font-bold={isNorwegian} on:click={() => changeLanguage(norwegian)}>NO</button>
  |
  <button class:text-gray-600={!isEnglish} class:underline={isEnglish} class:font-bold={isEnglish} on:click={() => changeLanguage(english)}>EN</button>
</div>
