const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// GET API - get all categories
router.get('/', (req, res) => {
  // find all categories including its associated Products
  Category.findAll({
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock']
      }
    ]
  })
  .then(dbUserData => res.json(dbUserData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// GET BY ID - get category by id provided by user
router.get('/:id', (req, res) => {
  // find one category by its `id` value including its associated Products
    Category.findOne({
      where: {
        id: req.params.id
      },
      include: [
        {
          model: Product,
          attributes: ['id', 'product_name', 'price', 'stock'],
        }
      ]
    })
    .then(dbData => {
      if (!dbData) {
        res.status(404).json({message: 'No category found for this id!'})
        return;
      }
      res.json(dbData)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err);
    });
  });

// POST API - add a new category
router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then(dbData => res.json(dbData))
  .catch(err => {
    console.log(err)
    res.status(400).json(err)
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;