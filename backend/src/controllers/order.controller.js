const Order = require("../models/order.model");
const Product = require("../models/products.model");

const createorder = async (req, res) => {
  try {
    const userId = req.user.id;

    const { products, paymentMode } = req.body;

    if (!products || products.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Cart is empty",
      });
    }

    const productIds = products.map((item) => item.productId);

    const dbProducts = await Product.find({
      _id: { $in: productIds },
    });

    let totalCost = 0;

    const orderProducts = products.map((item) => {
      const matchedProduct = dbProducts.find(
        (p) => p._id.toString() === item.productId
      );

      if (!matchedProduct) {
        throw new Error(`Product not found: ${item.productId}`);
      }

      totalCost += matchedProduct.price * item.quantity;

      return {
        productId: matchedProduct._id,
        quantity: item.quantity,
        price: matchedProduct.price,
      };
    });

    const order = await Order.create({
      userId,
      products: orderProducts,
      totalCost,
      paymentMode,
    });

    res.status(201).json({
      success: true,
      message: "Order created successfully",
      order,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createorder,
};