import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", 'ui-sans-serif', 'system-ui'],
        secondary: ['chewy', 'serif'],
      },
    }
  },
})