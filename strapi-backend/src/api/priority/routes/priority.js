'use strict';

/**
 * priority router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::priority.priority');
