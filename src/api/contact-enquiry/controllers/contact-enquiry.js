'use strict';

/**
 * contact-enquiry controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::contact-enquiry.contact-enquiry', ({ strapi }) => ({
    async create(ctx) {
        // Get IP
        const ip = ctx.request.ip || ctx.request.header['x-forwarded-for'] || 'Unknown';

        // Merge IP and device into request body
        ctx.request.body.data = {
            ...ctx.request.body.data,
            ipAddress: ip,
        };

        // Call default core create controller
        const response = await super.create(ctx);

        return response;
    }
}));

