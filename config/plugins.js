module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.example.com'),
        port: env.int('SMTP_PORT', 587),
        secure: env.bool('SMTP_SECURE', false),
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
      },
      settings: {
        defaultFrom: env('SMTP_DEFAULT_FROM', 'no-reply@muvro.tech'),
        defaultReplyTo: env('SMTP_DEFAULT_REPLY_TO', 'no-reply@muvro.tech'),
      },
    },
  },
  tinymce: { enabled: true },
  'seo': {
    enabled: true,
  },
  'deep-populate': {
    enabled: true,
    config: {
      useCache: true,       // caches deep-populate results
      replaceWildcard: true, // allows * to populate all fields
      contentTypes: {
        // only enable deep-populate for this content type
        'api::product-pages.product-pages': {
          deny: {
            relations: [],   // list relations you want to skip (if any)
            components: []   // list components you want to skip (if any)
          }
        },
        'api::case-study.case-study': {
          deny: {
            relations: [],
            components: []
          }
        },
      }
    }
  }
});
