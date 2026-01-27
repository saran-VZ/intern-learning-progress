
const http=require("http");
const server = http.createServer((req,res)=> 
{
    
    res.writeHead(200,{"content-type":"text/html"});
    res.end('<h1 style="color:blue;text-align:center;"> this is Saran server...</h1>');
});
server.listen(3000,()=>
{
    console.log("server is running.....");
});
