'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CouponOrderSchema extends Schema {
  up() {
    this.create('coupon_orders', table => {
      table.increments()
      table.integer('coupon_id').unsigned()
      table.integer('order_id').unsigned()
      table.timestamps()
      table
        .foreign('order_id')
        .references('id')
        .inTable('orders')
        .onDelete('cascade')
      table
        .foreign('coupon_id')
        .references('id')
        .inTable('coupons')
        .onDelete('cascade')
    })
  }

  down() {
    this.drop('coupon_orders')
  }
}

module.exports = CouponOrderSchema
