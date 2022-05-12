const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'R&B music',
  },
  {
    tag_name: 'Country music',
  },
  {
    tag_name: 'purple',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'yellow',
  },
  {
    tag_name: 'yellow',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'soul music',
  },
  {
    tag_name: 'jazz music',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;