const path=require('path');
const rootDir=require('./path');
exports.getProducts= (req,res,next)=>
{
res.sendFile(path.join(rootDir,'views','addProduct.html'));
};


exports.postProducts= (req,res,next)=>
{
    res.redirect('/');
};

exports.getShop=(req,res,next)=>
{
console.log(req.body.title);
res.sendFile(path.join(rootDir,'views','shop.html'));
};