import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: process.env.PORT ? Number(process.env.PORT) : 10000,
    host: "0.0.0.0", // Ensures it binds to all network interfaces
    allowedHosts: ["resqhealth.africa", "www.resqhealth.africa", "localhost"]
  },
  preview: {
    port: process.env.PORT ? Number(process.env.PORT) : 10000,
    host: "0.0.0.0",
    allowedHosts: ["resqhealth.africa", "www.resqhealth.africa", "resq-health-staging.onrender.com", ".onrender.com"]
  },
  build: {
    outDir: 'dist', // or whatever your output directory should be
  }
})
