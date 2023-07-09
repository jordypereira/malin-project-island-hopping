import './styles/style.css'
import 'virtual:windi.css'
import 'virtual:windi-devtools'

// main.js
import IntroComponent from './components/introduction.svelte'
import Contact from './components/contact.svelte'
import Navigation from './components/Navigation.svelte'
import LanguageSwitcher from './components/LanguageSwitcher.svelte'
import About from './components/About.svelte'

const app = new IntroComponent({
  target: document.querySelector('#introduction'),
})

const contact = new Contact({
  target: document.getElementById('contact'),
})

const navigation = new Navigation({
  target: document.getElementById('navigation'),
})

const languageSwitcher = new LanguageSwitcher({
  target: document.getElementById('language-switcher'),
})

const about = new About({
  target: document.getElementById('about'),
})

export { app, contact, navigation, languageSwitcher, about }
