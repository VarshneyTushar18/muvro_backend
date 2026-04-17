module.exports = [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::session',
    config: {
      cookie: {
        secure: false, // ✅ FINAL (LOCK THIS)
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::favicon',
  'strapi::public',
];