const path=require('path');
exports.getError404 =(req,res,next)=>
{
    res.status(404).sendFile(path.join(__dirname,'views','error.html'));  
};