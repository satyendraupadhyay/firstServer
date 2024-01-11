const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

module.exports = router;



// const path = require('path');

// const express = require('express');

// // const rootDir = require('../util/path');
// const productsController = require('../controllers/admin');

// const router = express.Router();

// // /admin/add-product => GET
// router.get('/add-product', productsController.getAddProduct);

// // /admin/add-product => POST
// router.post('/add-product', productsController.postAddProduct);

// module.exports = router;
