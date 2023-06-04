const path=require('path');
const express=require('express');
const router =express.Router();
const rootDir=require('./path');
const prod=require('./products');

router.get('/addProduct', prod.getProducts);
router.post('/addProduct', prod.postProducts);

module.exports=router;