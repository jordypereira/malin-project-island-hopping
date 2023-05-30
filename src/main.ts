import './styles/style.css'
import 'virtual:windi.css'

import 'virtual:windi-devtools'
// main.js
import IntroComponent from './components/introduction.svelte';
import Contact from './components/contact.svelte';

const app = new IntroComponent({
  target: document.querySelector('#introduction')
});


const contact = new Contact({
  target: document.getElementById('contact'),
});


export { app, contact };