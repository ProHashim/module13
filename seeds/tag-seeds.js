const { Tag } = require("../models");

const tagData = [
  {
    tag_name: "Smart Tech",
  },
  {
    tag_name: "Handcrafted Art",
  },
  {
    tag_name: "Virtual Reality",
  },
  {
    tag_name: "Eco-friendly",
  },
  {
    tag_name: "Wearable Tech",
  },
  {
    tag_name: "Colorful Decor",
  },
  {
    tag_name: "Precious Metals",
  },
  {
    tag_name: "Tech Trends",
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
