import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc'
import * as path from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "src"),
    },
  },
})
