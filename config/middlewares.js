module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  {
    name: 'strapi::session',
    config: {
      secure: (ctx) => ctx.secure, // Dynamically check if connection is secure
    },
  },
  'strapi::favicon',
  'strapi::public',
];
