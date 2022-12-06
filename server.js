if(process.env.NODE_ENV !== 'production'){
     require("dotenv").config()
}


const express = require("express")
const app = express()
const bcrypt = require("bcrypt")
const passport =require("passport")
const initializePassport = require("./passport-config")
const flash = require("express-flash")
const session= require("express-session")


initializePassport(
     passport,
     email => users.find(user => user.email===email)
     
     )

const users = []
app.use(express.urlencoded({extended: false}))
app.use(flash())
app.use(session({
     secret: process.env.SESSION_SECRET,
     resave : false,
     saveUninitialized : false

}))
app.use(passport.initialize())
app.use(passport.session())


//log
app.post("/login",passport.authenticate("local",{
     successRedirect:"/",
     failureRedirect: "/login",
     failureFlash: true
}))




//log





app.post("/register",async(req,res) => {
     try {
          const hashedPassword = await bcrypt.hash(req.body.password,10)
          users.push({
               id: Date.now().toString(),
               name: req.body.first_name,
               email: req.body.email,
               password: hashedPassword,

          })
           
          res.redirect("/login")
          console.log(users);
     } catch (e) {
          console.log(e);
          res.redirect("/register")
          
     }
})



app.use(express.static(__dirname + '/public'));
app.get('/',(req,res) => {

     res.render("index.ejs")
})
app.get('/clanguage',(req,res) => {

    res.render("clanguage.ejs")
})


app.get('/login',(req,res) => {

     res.render("login.ejs")
})
app.get('/register',(req,res) => {

     res.render("register.ejs")
})
app.get('/dsa',(req,res) => {

     res.render("dsa.ejs")
})
app.get('/java',(req,res) => {

     res.render("java.ejs")
})
app.get('/logout',(req,res) => {

     res.render("logout.ejs")
})
app.get('/nclanguage',(req,res) => {

     res.render("nclanguage.ejs")
})
app.get('/ndsa',(req,res) => {

     res.render("ndsa.ejs")
})
app.get('/njava',(req,res) => {

     res.render("njava.ejs")
})
app.get('/npython',(req,res) => {

     res.render("npython.ejs")
})
app.get('/nweb_dev',(req,res) => {

     res.render("nweb_dev.ejs")
})
app.get('/python',(req,res) => {

     res.render("python.ejs")
})
app.get('/vclanguage',(req,res) => {

     res.render("vclanguage.ejs")
})
app.get('/vdsa',(req,res) => {

     res.render("vdsa.ejs")
})
app.get('/vjava',(req,res) => {

     res.render("vjava.ejs")
})
app.get('/vpython',(req,res) => {

     res.render("vpython.ejs")
})
app.get('/vweb_dev',(req,res) => {

     res.render("vweb_dev.ejs")
})

app.get('/web_dev',(req,res) => {

     res.render("web_dev.ejs")
})









app.listen(3000)