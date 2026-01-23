const express = require("express");
const router = express.Router();                  // router - mini app inside a app with similar group of routes (user routes)
const user=["saran","ramen","lorem","ipsum"];
router.get("/",(req,res)=>{
    res.send(`heloo ${req.query.name}...`);
});
 
router.get("/user22",printer,(req,res)=>{
    res.send("heyy user22..!!");
});
 router.get("/:id",(req,res)=>{
    res.send(`welcome  ${user[req.params.id]}`);
 })
function printer (req,res,next){                  // middleware function 
    console.log("pinter - middleware..!!");
    next()
}
    module.exports= router ; 