function middleware_url_printer(req,res,next){
    console.log(req.url)
    console.log(req.method)
    next()
}
module.exports= middleware_url_printer;