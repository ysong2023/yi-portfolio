import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
//import tailwindcss from '@tailwindcss/vite'
// https://vitejs.dev/config/
export default defineConfig({
  base: '/yi-portfolio/',
  plugins: [
    vue({
      template: {
        transformAssetUrls: {
          // do not transform asset image src
          img: [],
        },
      },
    }),
    //tailwindcss(),
  ],
});