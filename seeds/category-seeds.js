const { Category } = require("../models");

const categoryData = [
  {
    category_name: "Tech Gadgets",
  },
  {
    category_name: "Artisanal Crafts",
  },
  {
    category_name: "Virtual Reality Experiences",
  },
  {
    category_name: "Eco-friendly Home Decor",
  },
  {
    category_name: "Customized Wearables",
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
