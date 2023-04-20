const jwt=require('jsonwebtoken')

function auth(req,res,next){
    const token=req.header('Authorization')
    if (!token){
        return res.status(401).send('JWT Not Found')
    }
    try{
        const decoded=jwt.verify(token,'jwtKey')//this function will return jwt payload if jwt is valid otherwise raise exp.
        req.user=decoded
        next()
    }
    catch(ex){
        res.status(400).send('Invalid Token.')
    }
}

module.exports=auth