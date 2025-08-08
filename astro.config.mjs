import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://fitjourneyai.app',
  integrations: [],
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: undefined
        }
      }
    }
  }
});
