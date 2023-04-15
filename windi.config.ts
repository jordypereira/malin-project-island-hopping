import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  plugins: [
    require('windicss/plugin/typography'),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['chewy', 'serif', 'system-ui'],
        secondary: ['chewy', 'serif'],
      },
    }
  },
})