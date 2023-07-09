import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  plugins: [require('windicss/plugin/typography')],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans', 'ui-sans-serif', 'system-ui'],
        secondary: ['chewy', 'serif'],
      },
    },
  },
})
