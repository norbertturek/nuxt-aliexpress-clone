// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  modules: [
    'nuxt-icon',
    'nuxt-lodash',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/tailwindcss',
    // '@nuxtjs/supabase'
  ],
  runtimeConfig: {
    public: {
      stripePK: process.env.STRIPE_PK_KEY || '',
      supabaseUrl: process.env.SUPABASE_URL || '',
      supabasePublicKey: process.env.SUPABASE_KEY || '',
    }
  },
  app: {
    head: {
      script: [
        {
          src: 'https://js.stripe.com/v3/', defer: true
        }
      ]
    }
  }
})
