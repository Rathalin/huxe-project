'use strict';

/**
 * mood controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::mood.mood');
