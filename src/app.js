const path = require('path')
const express = require('express')
const hbs = require('hbs')


const app = express()
const port = process.env.PORT || 3000

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup handlebars engine and views location
app.set("view engine", "hbs")
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setup sttatic directory to serve
app.use(express.static(publicDirectoryPath))

app.get("", (req,res) =>
{
  res.render('index',{})
})

app.get("/portfolio", (req, res) =>
{
  res.render("portfolio",{})
})

app.get("/contact", (req, res) =>
{
  res.render("contact",{})
})

app.get('*', (req, res) =>
{
  res.render("404")
})

app.listen(port, () =>
{
  console.log("Server is up on port "+port)
})
