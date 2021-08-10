const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// GET API - Get all tags
router.get('/', (req, res) => {
  // find all tags including the associated Products
  Tag.findAll({
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock'],
        through: ProductTag
      }
    ]
  })
  .then(dbData => res.json(dbData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// GET BY ID API - get tags by id provided by user
router.get('/:id', (req, res) => {
  // find a single tag by its `id` including associted Product
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock'],
        through: ProductTag,
      }
    ]
  })
  .then(dbData => res.json(dbData))
  .catch(err => {
    console.log(err);
    res.status(404).json({message: 'No tag was found with this id'});
  });
});

// POST API - Add a new tag
router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
  .then(dbData => res.json(dbData))
  .catch(err => {
    console.log(err);
    res.status(400).json(err);
  });
});

// PUT API - update a tag
router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    }
  })
  .then(dbData => {
    if (!dbData) {
      res.status(404).json({message: 'No tag found for this id!'});
      return;
    }
    res.json(dbData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

// DELETE API - delete a tag
router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    }
  })
  .then(dbTagData => {
    if (!dbTagData) {
      res.status(404).json({message: 'No tag found for this id!'});
      return;
    }
    res.json(dbTagData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

module.exports = router;