const { Category } = require('../models');

const categoryData = [
  {
    category_name: '  Casual Shirts',
  },
  {
    category_name: 'Pants%Shorts',
  },
  {
    category_name: 'Songs',
  },
  {
    category_name: 'Beannies',
  },
  {
    category_name: 'Sneakers',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;