
import WindiCSS from 'vite-plugin-windicss'

export default {
  plugins: [
    WindiCSS()
  ],
  server: {
    port: 3000
  },
  preview: {
    port: 8080
  }
};