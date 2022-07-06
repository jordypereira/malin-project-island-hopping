
import WindiCSS from 'vite-plugin-windicss'

export default {
  plugins: [
    WindiCSS()
  ],
  server: {
    port: 3030
  },
  preview: {
    port: 8080
  }
};