import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()], //different Vite versions in the project causing this issue
  test:{
    environment:"jsdom",
    globals:true,
  }
})
