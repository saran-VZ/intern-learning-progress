//built-in modules - commonjs type
const path=require("path");
const upperCase= require("upper-case").upperCase;

console.log(path.resolve("/folder1","folder2","../__filename"));
const fs=require("fs");
const file=fs.readFile("./js.txt","utf-8",(error,data)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log(data);
    }
});
fs.writeFileSync("./java.txt","I am vengence");
fs.writeFileSync("./java.txt"," \nI am batman",{flag:"a"});
let a="sarannnn";
console.log(upperCase(a));
