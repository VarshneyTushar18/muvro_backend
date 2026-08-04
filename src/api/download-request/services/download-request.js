'use strict';

/**
 * download-request service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::download-request.download-request');
