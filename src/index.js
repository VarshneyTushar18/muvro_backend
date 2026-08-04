'use strict';


// export default {
 
// };

module.exports = {
  // /**
  //  * An asynchronous register function that runs before
  //  * your application is initialized.
  //  *
  //  * This gives you an opportunity to extend code.
  //  */
  // register(/*{ strapi }*/) {},

  // /**
  //  * An asynchronous bootstrap function that runs before
  //  * your application gets started.
  //  *
  //  * This gives you an opportunity to set up your data model,
  //  * run jobs, or perform some special logic.
  //  */
  // bootstrap(/*{ strapi }*/) {},

   register({ strapi }) {
    // Force the socket to be treated as encrypted for proxy setups
    strapi.server.use(async (ctx, next) => {
      if (ctx.req?.socket) {
        (ctx.req.socket).encrypted = true;
      }
      await next();
    });
  },

  async bootstrap({ strapi }) {
    // Ensure Public role can create download requests (form submissions).
    try {
      const publicRole = await strapi.db.query('plugin::users-permissions.role').findOne({
        where: { type: 'public' },
      });

      if (publicRole) {
        const action = 'api::download-request.download-request.create';
        const existing = await strapi.db.query('plugin::users-permissions.permission').findOne({
          where: { action, role: publicRole.id },
        });

        if (!existing) {
          await strapi.db.query('plugin::users-permissions.permission').create({
            data: { action, role: publicRole.id },
          });
          strapi.log.info('Enabled public create for download-request');
        }
      }
    } catch (err) {
      strapi.log.warn(`Could not set download-request public permission: ${err.message}`);
    }
  },
};
