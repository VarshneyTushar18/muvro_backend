module.exports = ({ env }) => [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  // Custom middleware to set ctx.secure based on proxy headers
  (ctx, next) => {
    if (ctx.get('X-Forwarded-Proto') === 'https') {
      ctx.secure = true;
    }
    return next();
  },
  {
    name: 'strapi::session',
    config: {
      secure: (ctx) => ctx.secure,
    },
  },
  'strapi::favicon',
  'strapi::public',
];
