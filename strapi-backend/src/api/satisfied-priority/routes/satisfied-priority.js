'use strict';

/**
 * satisfied-priority router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::satisfied-priority.satisfied-priority');
