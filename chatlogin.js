const express=require('express');
const router=express.Router();

router.get('/login',(req,res,next)=>
{
 res.send(`<form onSubmit="localStorage.setItem('username', document.getELementById('username').value)"
 action="/" method="GET"><input id="username" type="text" name="username">
 <button type="submit">login</button></form>`);
});

module.exports=router;