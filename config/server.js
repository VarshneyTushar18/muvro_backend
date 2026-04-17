module.exports = ({ env }) => ({
  host: '0.0.0.0',
  port: env.int('PORT', 1000), // match Render

  url: env('PUBLIC_URL'),

  app: {
    keys: env.array('APP_KEYS'),
  },

  proxy: true,

  // 🔥 THIS IS THE MISSING PIECE
  globalProxy: true,
});