module.exports = ({ env }) => [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'global::proxy-secure',
  {
    name: 'strapi::session',
    config: {
      secure: (ctx) => ctx.secure,
    },
  },
  'strapi::favicon',
  'strapi::public',
];
