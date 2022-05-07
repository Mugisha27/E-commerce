const { Product } = require('../models');

const productData = [
  {
    product_name: 'T-Shirt',
    price: 14.99,
    stock: 10,
    category_id: 1,
  },
  {
    product_name: 'Running Shoes',
    price: 99.99,
    stock: 15,
    category_id: 5,
  },
  {
    product_name: 'Basketball jersey',
    price: 22.99,
    stock: 17,
    category_id: 4,
  },
  {
    product_name: 'Belts',
    price: 22.99,
    stock: 55,
    category_id: 3,
  },
  {
    product_name: 'Pants',
    price: 29.99,
    stock: 22,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;