'use strict';

/**
 * satisfied-priority service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::satisfied-priority.satisfied-priority');
