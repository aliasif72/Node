const path=require('path');
const rootDir=require('./path');
exports.getForm= (req,res,next)=>
{
res.sendFile(path.join(rootDir,'contactusform.html'));
};

 exports.getSuccess=(req,res,next)=>
{
res.send('<h1>Form successfull submitted</h1>')
};