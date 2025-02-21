import { defineConfig } from 'astro/config'
import react from '@astrojs/react'

import vercel from '@astrojs/vercel'

import tailwindcss from '@tailwindcss/vite'

import netlify from '@astrojs/netlify'

// https://astro.build/config
export default defineConfig({
  site: process.env.CI ? 'https://kylescudder.co.uk' : 'http://localhost:4321',

  integrations: [react()],

  output: 'server',
  adapter: netlify(),

  vite: {
    plugins: [tailwindcss()],
  },
})
