const express = require("express")
const path = require("path")
const app = express()
const hbs= require("hbs")
const collection = require("./mongodb")
const PORT = process.env.PORT || 3000;

const templatePath=path.join(__dirname,'../templates')

app.use(express.json())
app.set("view engine","hbs")
app.set("views",templatePath)
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('login')
})
app.get("/signup", (req, res) => {
    res.render("signup")
})
app.get("/logout",async(req,res)=>{
    res.render("login");
});


app.post("/signup",async(req,res)=>{

const data={ 
    name:req.body.name,
    password:req.body.password
}


await collection.insertMany([data])
res.render("home")
})
 

app.post("/login",async(req,res)=>{

  
    try{ 
        const check=await collection.findOne({name:req.body.name})
        if(check.password===req.body.password){
            res.render("home")
        }else{
        res.render("home")
    }}catch{
        res.send("wrong details")
    }
    

    })
   

app.listen(PORT, () => {
    console.log('port connected');
}) 