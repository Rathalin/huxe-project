'use strict';

/**
 * daily-mood service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::daily-mood.daily-mood');
