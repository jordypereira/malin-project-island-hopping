<script lang="ts">
  import { t } from '../plugins/i18n'

  let open = false
  let nav

  $: {
    nav = $t.nav
  }
</script>

<nav class="fixed top-0 left-0 right-0 z-1010 flex justify-end items-center py-4 px-8" data-scroll-header>
  <div class="flex items-center">
    <!-- Hamburger menu -->
    <button class="lg:hidden z-1011" aria-label="open menu" on:click={() => (open = !open)}>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path class:hidden={open} stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 6h16M4 12h16M4 18h16" />
        <path class:hidden={!open} stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    <!-- Mobile menu -->
    <div class:hidden={!open} class="lg:hidden absolute top-0 left-0 w-full h-screen bg-gray-100 flex flex-col items-center justify-center z-1010">
      <ul class="flex flex-col items-center justify-center" on:click={() => (open = false)} on:keydown={(e) => e.code === 'Escape' && (open = false)}>
        <li>
          <a data-scroll href="#about" class="font-secondary text-lg lg:text-xl">{nav.about}</a>
        </li>
        <li>
          <a data-scroll href="#concerts" class="font-secondary text-lg lg:text-xl">{nav.concerts}</a>
        </li>
        <li>
          <a data-scroll href="#contact" class="font-secondary text-lg lg:text-xl">{nav.contact}</a>
        </li>
        <li>
          <a data-scroll href="#mapid" class="font-secondary text-lg lg:text-xl">{nav.map}</a>
        </li>
        <li>
          <a data-scroll href="#sponsors" class="font-secondary text-lg lg:text-xl">{nav.sponsors}</a>
        </li>
      </ul>
      <!-- Horizontal Social bar with icons
           -->
      <div class="flex justify-center items-center space-x-4 mt-8">
        <a href="https://www.facebook.com/oyhoppendekvartett" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
            />
          </svg>
        </a>
        <a href="https://www.instagram.com/oyhoppendekvartett/" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"
            />
          </svg>
        </a>
        <!-- <a href="https://www.youtube.com/channel/UCb6UZw7rHjKzQO9OJ8Gv0RQ" target="_blank"
              rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <path fill="currentColor"
                  d="M12.244 4c.534.003 1.87.016 3.29.073l.504.022c1.429.067 2.857.183 3.566.38c.945.266 1.687 1.04 1.938 2.022c.4 1.56.45 4.602.456 5.339l.001.152v.174c-.007.737-.057 3.78-.457 5.339c-.254.985-.997 1.76-1.938 2.022c-.709.197-2.137.313-3.566.38l-.504.023c-1.42.056-2.756.07-3.29.072l-.235.001h-.255c-1.13-.007-5.856-.058-7.36-.476c-.944-.266-1.687-1.04-1.938-2.022c-.4-1.56-.45-4.602-.456-5.339v-.326c.006-.737.056-3.78.456-5.339c.254-.985.997-1.76 1.939-2.021c1.503-.419 6.23-.47 7.36-.476h.489ZM9.999 8.5v7l6-3.5l-6-3.5Z" />
              </svg>
            </a> -->
      </div>
    </div>
    <!-- Desktop menu -->
    <ul class="hidden lg:flex lg:space-x-8">
      <li>
        <a data-scroll href="#about" class="font-secondary text-lg lg:text-xl">{nav.about}</a>
      </li>
      <li>
        <a data-scroll href="#concerts" class="font-secondary text-lg lg:text-xl">{nav.concerts}</a>
      </li>
      <li>
        <a data-scroll href="#contact" class="font-secondary text-lg lg:text-xl">{nav.contact}</a>
      </li>
      <li>
        <a data-scroll href="#mapid" class="font-secondary text-lg lg:text-xl">{nav.map}</a>
      </li>
      <li>
        <a data-scroll href="#sponsors" class="font-secondary text-lg lg:text-xl">{nav.sponsors}</a>
      </li>
      <li>
        <a href="https://www.facebook.com/oyhoppendekvartett" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
            />
          </svg>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/oyhoppendekvartett/" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"
            />
          </svg>
        </a>
      </li>
    </ul>
  </div>
</nav>
