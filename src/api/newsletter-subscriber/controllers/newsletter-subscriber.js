'use strict';

/**
 * newsletter-subscriber controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// Notification recipients are configurable via .env (comma-separated).
const NOTIFY_TO = (process.env.NEWSLETTER_NOTIFY_TO || process.env.CONTACT_NOTIFY_TO || 'sales@muvro.com')
    .split(',')
    .map((e) => e.trim())
    .filter(Boolean);

const AUTOREPLY_ENABLED = (process.env.NEWSLETTER_AUTOREPLY_ENABLED || 'true').toLowerCase() === 'true';

module.exports = createCoreController('api::newsletter-subscriber.newsletter-subscriber', ({ strapi }) => ({
    async create(ctx) {
        const response = await super.create(ctx);

        try {
            const data = ctx.request.body.data || {};
            const email = data.emailAddress || data.email;

            if (!email) {
                return response;
            }

            // Internal notification to the team
            await strapi.plugin('email').service('email').send({
                to: NOTIFY_TO,
                replyTo: email,
                subject: `New newsletter subscriber: ${email}`,
                text:
                    `New newsletter subscription:\n\n` +
                    `Email: ${email}\n` +
                    `Status: ${data.subscriberStatus || 'subscribed'}\n`,
                html:
                    `<h2>New Newsletter Subscriber</h2>` +
                    `<p><strong>Email:</strong> ${email}</p>` +
                    `<p><strong>Status:</strong> ${data.subscriberStatus || 'subscribed'}</p>`,
            });

            // Thank-you auto-reply to the subscriber
            if (AUTOREPLY_ENABLED) {
                await strapi.plugin('email').service('email').send({
                    to: email,
                    subject: 'Thank you for subscribing to Muvro',
                    text:
                        `Hi,\n\n` +
                        `Thank you for subscribing to Muvro updates. ` +
                        `You'll receive the latest insights and announcements from us.\n\n` +
                        `Best regards,\nTeam Muvro`,
                    html:
                        `<p>Hi,</p>` +
                        `<p>Thank you for subscribing to <strong>Muvro</strong> updates. ` +
                        `You'll receive the latest insights and announcements from us.</p>` +
                        `<p>Best regards,<br/>Team Muvro</p>`,
                });
            }
        } catch (err) {
            strapi.log.error(`Newsletter subscriber email failed: ${err.message}`);
        }

        return response;
    },
}));
