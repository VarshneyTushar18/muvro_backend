'use strict';

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    if (ctx.get('X-Forwarded-Proto') === 'https') {
      ctx.secure = true;
    }
    await next();
  };
};