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
      secure: false, // Set to false for HTTPS deployments behind load balancers like Render
    },
  },
  'strapi::favicon',
  'strapi::public',
];
