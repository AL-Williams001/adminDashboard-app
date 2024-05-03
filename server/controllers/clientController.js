import Product from "../models/productModel.js";
import ProductStat from "../models/productStat.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    const productsWithStats = await Promise.all(
      products.map(async (product) => {
        const stat = await ProductStat.find({
          productId: product._id,
        });
        return {
          ...product._doc,
          stat,
        };
      })
    );
    res.status(200).json({ productsWithStats });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return res.status(500).json({ message: "Server error" });
  }
};
