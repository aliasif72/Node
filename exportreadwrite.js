const fs=require('fs');
const requestHandler= (req,res)=>
{
    const url=req.url;
const method=req.method;
if(url==='/'){
res.setHeader('Content-Type', 'text/html');
fs.readFile('user.txt',{encoding:"utf-8"},(err,data)=>{
    if(err){console.log(err)
        if(data===undefined)
        {
            data='';
        };}
res.write(`<html><head><title>MY NODE.JS</title></head><body><h3>${data}</h3><form form action="/username" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body></html>`);
 res.end();
});
}

else if(url==='/username' && method==='POST'){
const body=[];
req.on('data',(chunk)=>
{
    body.push(chunk);
   })

req.on('end',()=>
{console.log(body);
    const parsedBody=Buffer.concat(body).toString().split('=')[1];
    console.log(parsedBody);
    fs.writeFileSync('user.txt',parsedBody);
});
res.statusCode=302; 
res.setHeader('Location', '/'); 
res.end();}
};
module.exports = requestHandler;
//module.exports = {help:requestHandler};
//module.exports.help=requestHandler;
//omit module use only exports.help=requestHandler