const path=require('path');
const express=require('express');
const router =express.Router();
const rootDir=require('./path');
const bodyParser = require('body-parser');
const prod=require('./products');
const respon=require('./formResp');

router.get('/', prod.getShop);

router.get('/form',respon.getForm);

router.get('/success',respon.getSuccess);
module.exports=router;