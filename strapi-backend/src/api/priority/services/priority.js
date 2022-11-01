'use strict';

/**
 * priority service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::priority.priority');
