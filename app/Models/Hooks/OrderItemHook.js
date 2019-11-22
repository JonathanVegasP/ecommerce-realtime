'use strict'

const OrderItemHook = (exports = module.exports = {})

const Product = use('App/Models/Product')

OrderItemHook.updateSubtotal = async modelInstance => {
  let product = await Product.find(model.product_id)
  modelInstance.subTotal = modelInstance.quantity * product.price
}
