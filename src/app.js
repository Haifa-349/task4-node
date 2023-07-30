

const express = require('express')
const app =express()
const port = process.env.PORT || 3000
const path = require("path")
const publicDirectory =path.join(__dirname , '../public')
app.use(express.static ('publicDirectory'))

//hbs//
var hbs=require('hbs')
app.set('view engine', 'hbs')
const viewsDirectory=path.join(__dirname,"../temp1/views")
app.set("views" , viewsDirectory)

const partialsPath = path.join (__dirname , "../temp1/partials")
hbs.registerPartials(partialsPath)

app.get('/', (req,res) => {
  res.render("index",{
    title:"home",
    desc:" wlecome this is home page"
  })
})
  
app.get('/weather', (req,res) => {
    res.render("weather",{
      title:"check wether",
      country: "egypt",
      longtitude:"26.4941832991",
      latitude:"29.8719034",
      currentweather:"clear",
      tempearture:"35"
    
    })
  })
//////////

app.listen(port , () => {
    console.log(`Example app listening on port ${port}`)
})
