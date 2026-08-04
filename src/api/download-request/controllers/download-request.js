'use strict';

/**
 * download-request controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// Notification recipients are configurable via .env (comma-separated).
const NOTIFY_TO = (process.env.DOWNLOAD_NOTIFY_TO || process.env.CONTACT_NOTIFY_TO || 'info@muvro.com')
    .split(',')
    .map((e) => e.trim())
    .filter(Boolean);

const AUTOREPLY_ENABLED = (process.env.DOWNLOAD_AUTOREPLY_ENABLED || 'true').toLowerCase() === 'true';

module.exports = createCoreController('api::download-request.download-request', ({ strapi }) => ({
    async create(ctx) {
        const ip = ctx.request.ip || ctx.request.header['x-forwarded-for'] || 'Unknown';

        ctx.request.body.data = {
            ...ctx.request.body.data,
            ipAddress: ip,
        };

        const response = await super.create(ctx);

        try {
            const data = ctx.request.body.data || {};
            const { email, catalogueTitle, catalogueFileName, catalogueUrl } = data;

            if (!email || !catalogueUrl) {
                return response;
            }

            const fileLabel = catalogueFileName || catalogueTitle || 'Catalogue';
            const downloadLink = catalogueUrl;

            // Internal notification to the team
            await strapi.plugin('email').service('email').send({
                to: NOTIFY_TO,
                replyTo: email,
                subject: `Catalogue download request: ${catalogueTitle || fileLabel}`,
                text:
                    `A catalogue download was requested:\n\n` +
                    `Email: ${email}\n` +
                    `Catalogue: ${catalogueTitle || '-'}\n` +
                    `File: ${fileLabel}\n` +
                    `URL: ${downloadLink}\n` +
                    `IP Address: ${ip}\n`,
                html:
                    `<h2>Catalogue Download Request</h2>` +
                    `<table cellpadding="6" style="border-collapse:collapse">` +
                    `<tr><td><strong>Email</strong></td><td>${email}</td></tr>` +
                    `<tr><td><strong>Catalogue</strong></td><td>${catalogueTitle || '-'}</td></tr>` +
                    `<tr><td><strong>File</strong></td><td>${fileLabel}</td></tr>` +
                    `<tr><td><strong>IP Address</strong></td><td>${ip}</td></tr>` +
                    `</table>` +
                    `<p><a href="${downloadLink}">${fileLabel}</a></p>`,
            });

            // Download link email to the user (matches "Your Free Download" format)
            if (AUTOREPLY_ENABLED) {
                await strapi.plugin('email').service('email').send({
                    to: email,
                    from: 'Muvro <info@muvro.com>',
                    subject: 'Your Free Download',
                    text:
                        `Hi,\n\n` +
                        `Thank you for subscribing.\n` +
                        `You can find your Free Download here: ${fileLabel}\n` +
                        `${downloadLink}\n\n` +
                        `Best regards,\nTeam Muvro`,
                    html:
                        `<p>Hi,</p>` +
                        `<p>Thank you for subscribing.</p>` +
                        `<p>You can find your Free Download here: ` +
                        `<a href="${downloadLink}">${fileLabel}</a></p>` +
                        `<p>Best regards,<br/>Team Muvro</p>`,
                });
            }
        } catch (err) {
            strapi.log.error(`Download request email failed: ${err.message}`);
        }

        return response;
    },
}));
