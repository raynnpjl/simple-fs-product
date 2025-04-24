const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.get('/', productController.listProducts);
router.post('/', productController.createProduct);
router.put('/:product_id', productController.updateProduct);
router.delete('/:product_id', productController.deleteProduct);

module.exports = router;