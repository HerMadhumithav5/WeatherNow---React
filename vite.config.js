import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JSX'],
  base: '/WeatherNow---React/', // Make sure this matches your repo name EXACTLY
})