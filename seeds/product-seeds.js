const { Product } = require("../models");

const productData = [
  {
    product_name: "Smart Home Assistant Device",
    price: 129.99,
    stock: 10,
    category_id: 1,
  },
  {
    product_name: "Handcrafted Wooden Sculpture",
    price: 69.0,
    stock: 15,
    category_id: 2,
  },
  {
    product_name: "Immersive Virtual Reality Kit",
    price: 299.99,
    stock: 8,
    category_id: 3,
  },
  {
    product_name: "Recycled Material Wall Art",
    price: 45.99,
    stock: 20,
    category_id: 4,
  },
  {
    product_name: "Customizable Wearable Tech",
    price: 149.99,
    stock: 18,
    category_id: 5,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
