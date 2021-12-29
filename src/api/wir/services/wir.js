'use strict';

/**
 * wir service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wir.wir');
