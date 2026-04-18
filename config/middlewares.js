module.exports = ({ env }) => [
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
      secure: (ctx) => ctx.get('X-Forwarded-Proto') === 'https',
    },
  },
  'strapi::favicon',
  'strapi::public',
];
