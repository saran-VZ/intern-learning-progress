const express = require("express");
const app = express();
app.use(express.static("public"))                       // to handle static HTML templates 
app.use(express.urlencoded({extended:true}))           // to access the body param directly
app.use(express.json())                               // to parse json response wile using "fetch"
app.set("view engine","ejs");                        // view engine to handle dynamic HTML files
app.get("/", (req, res) => {
 // console.log("downloadinggg..");
  //res.writeHead(200, { "content-type": "text/html" });
  //res.download("module.js");
  //res.end(
    //'<h1 style="color:yellow;background-color: black; text-align:center;padding:400px;"> This is Saran server...</h1>'
  //);
  res.json({name:"saran"});
  //res.render("ind",{name:"sarann",pos:"Mr"});

});

const userrouter = require("./routes/users");
app.use("/users",userrouter);

app.listen(3000);