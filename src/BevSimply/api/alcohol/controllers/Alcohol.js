'use strict';

/**
 * Alcohol.js controller
 *
 * @description: A set of functions called "actions" for managing `Alcohol`.
 */

module.exports = {

  /**
   * Retrieve alcohol records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.alcohol.search(ctx.query);
    } else {
      return strapi.services.alcohol.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a alcohol record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.alcohol.fetch(ctx.params);
  },

  /**
   * Count alcohol records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.alcohol.count(ctx.query);
  },

  /**
   * Create a/an alcohol record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.alcohol.add(ctx.request.body);
  },

  /**
   * Update a/an alcohol record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.alcohol.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an alcohol record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.alcohol.remove(ctx.params);
  },

  /**
   * Add relation to a/an alcohol record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.alcohol.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an alcohol record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.alcohol.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an alcohol record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.alcohol.removeRelation(ctx.params, ctx.request.body);
  }
};
