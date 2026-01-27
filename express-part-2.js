const express=require("express")
const app = express()
const middleware_url_printer=require("./middleware")                 //exported the middleware function
app.use(middleware_url_printer)                                     // universally applying middleware for every defined endpoints
let usernames=[]

app.use(express.static("./public"))                                //rendering static html templates in "public" folder
app.use(express.urlencoded({extended:true}))                       // directly parse the body contents from the form

const users=[
    {name:"saran",age:21,area:"chennai"},
    {name:"sumathi",age:20,area:"chennai"},
    {name:"srims",age:21,area:"cmbt"}
]
                   
app.post('/login',(req,res)=>{                                       // post method validating index.html form
    usernames.push(req.body.username)                                //pushing all the usernames to an array 
    console.log(usernames)
    res.send(`<h1 style="color:yellow;background-color: black; text-align:center;padding:460px;">welcomeeee ${req.body.username}</h1>`)
})

app.get("/",(req,res)=>{
    res.sendFile('/home/saran-st/Documents/back-nd/index.html')
});

app.get("/query",(req,res)=>{                                         //request query params
    const user22=users.find(user=>user.name===req.query.name)         //fetching data using query param
    if (user22 ===undefined)    {
           res.status(404).send("no users found")
    }     
    else{
           res.json(user22)
    }                            
    
})

const userrouter = require("./routes/users");                         //using route "users"
app.use("/users",userrouter);

app.listen("3000",()=>{
    console.log("server running...!!");
});