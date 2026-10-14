import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// BASE_PATH is set by the GitHub Pages workflow (e.g. "/repo-name/").
// Leave it unset for a custom domain, Netlify or Vercel.
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
})
