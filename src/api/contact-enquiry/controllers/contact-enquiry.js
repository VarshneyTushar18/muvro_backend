'use strict';

/**
 * contact-enquiry controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// Notification recipients are configurable via .env (comma-separated).
// Falls back to the client + internal address if not set.
const NOTIFY_TO = (process.env.CONTACT_NOTIFY_TO || 'info@muvro.com,tushar.varshney@tech2globe.net')
    .split(',')
    .map((e) => e.trim())
    .filter(Boolean);

// Toggle the thank-you auto-reply to the submitter via .env ("true"/"false").
const AUTOREPLY_ENABLED = (process.env.CONTACT_AUTOREPLY_ENABLED || 'true').toLowerCase() === 'true';

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

        // Send notification + auto-reply emails. Wrapped in try/catch so an
        // email failure never breaks the form submission itself.
        try {
            const data = ctx.request.body.data || {};
            const { fullName, phone, email, enquiryType, message } = data;

            const detailsText =
                `New contact enquiry received:\n\n` +
                `Name: ${fullName || '-'}\n` +
                `Email: ${email || '-'}\n` +
                `Phone: ${phone || '-'}\n` +
                `Enquiry Type: ${enquiryType || '-'}\n` +
                `IP Address: ${ip}\n\n` +
                `Message:\n${message || '-'}\n`;

            const detailsHtml =
                `<h2>New Contact Enquiry</h2>` +
                `<table cellpadding="6" style="border-collapse:collapse">` +
                `<tr><td><strong>Name</strong></td><td>${fullName || '-'}</td></tr>` +
                `<tr><td><strong>Email</strong></td><td>${email || '-'}</td></tr>` +
                `<tr><td><strong>Phone</strong></td><td>${phone || '-'}</td></tr>` +
                `<tr><td><strong>Enquiry Type</strong></td><td>${enquiryType || '-'}</td></tr>` +
                `<tr><td><strong>IP Address</strong></td><td>${ip}</td></tr>` +
                `</table>` +
                `<p><strong>Message:</strong></p><p>${(message || '-').replace(/\n/g, '<br/>')}</p>`;

            // Internal notification to the team
            await strapi.plugin('email').service('email').send({
                to: NOTIFY_TO,
                replyTo: email || undefined,
                subject: `New Contact Enquiry from ${fullName || 'Website'}`,
                text: detailsText,
                html: detailsHtml,
            });

            // Auto-reply / thank-you to the person who submitted the form
            if (AUTOREPLY_ENABLED && email) {
                await strapi.plugin('email').service('email').send({
                    to: email,
                    subject: 'Thank you for contacting Muvro',
                    text:
                        `Hi ${fullName || 'there'},\n\n` +
                        `Thank you for reaching out to Muvro. We have received your enquiry ` +
                        `and our team will get back to you shortly.\n\n` +
                        `Here is a copy of what you sent us:\n\n` +
                        `${message || '-'}\n\n` +
                        `Best regards,\nTeam Muvro`,
                    html:
                        `<p>Hi ${fullName || 'there'},</p>` +
                        `<p>Thank you for reaching out to <strong>Muvro</strong>. ` +
                        `We have received your enquiry and our team will get back to you shortly.</p>` +
                        `<p><strong>Here is a copy of what you sent us:</strong></p>` +
                        `<p>${(message || '-').replace(/\n/g, '<br/>')}</p>` +
                        `<p>Best regards,<br/>Team Muvro</p>`,
                });
            }
        } catch (err) {
            strapi.log.error(`Contact enquiry email failed: ${err.message}`);
        }

        return response;
    }
}));
