function log(req,res,next){
    console.log('Logging...')
    next()
}

module.exports.logger=log