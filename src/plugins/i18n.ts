import { derived } from 'svelte/store';

import en from '../locales/en.json';
import no from '../locales/no.json';
import { storable } from './storable';

// Initialize the language store with English language pack
export const language = storable('no');

// Function to change the language
export function changeLanguage (lang) {
  language.set(lang);
}

export const t = derived(language, ($language) => {
  return $language === 'en' ? en : no;
});
