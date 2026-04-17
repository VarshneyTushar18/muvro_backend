module.exports = ({ env }) => ({
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
        
      }
    }
  }
});
