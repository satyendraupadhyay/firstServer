const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;



// const path = require('path');

// const express = require('express');

// // const rootDir = require('../util/path');
// // const adminData = require('./admin');

// const productsController = require('../controllers/admin');

// const router = express.Router();

// router.get('/', productsController.getProducts);

// module.exports = router;
