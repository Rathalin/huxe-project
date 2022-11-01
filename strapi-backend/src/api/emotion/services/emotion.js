'use strict';

/**
 * emotion service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::emotion.emotion');
