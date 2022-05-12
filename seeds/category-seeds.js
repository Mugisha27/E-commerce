const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Suits',
  },
  {
    category_name: 'Pants',
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