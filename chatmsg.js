const express=require('express');
const router=express.Router();
const fs=require('fs');

router.get('/',(req,res,next)=>
{  
       fs.readFile('chats.txt', (err,data)=>{
                 if(err){console.log(err)
                data='no chat exist';}
            res.send(
                `${data}<html><head><title>LETs CHAT</title></head><body>
                <form onSubmit="document.getElementById('username').value=localStorage.getItem('username')" 
                action="/" method="POST"><input type="text" name="message" id="message"><input type="hidden" 
                name="username" id="username"><button type="submit">send</button></form></body></html>`);
           
       });
    });

router.post('/',(req,res,next)=>
{  
    let user=req.body.username;
    let msg=req.body.message;
    fs.writeFile('chats.txt',`${user}:${msg}`,{flag : 'a'},(err)=>
    err? console.log(err) : res.redirect('/')
    );
});

    module.exports=router;
