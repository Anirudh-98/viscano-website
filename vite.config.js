import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Target ES2018 so esbuild compiles optional chaining (?.) and
    // nullish coalescing (??) down to syntax environments like react-snap can execute.
    target: 'es2018',
    chunkSizeWarningLimit: 1000,
  },
})
