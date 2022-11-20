// create an express app
const axios = require("axios")
const express = require("express")
const bodyParser = require('body-parser')
const app = express()

// use the express-static middleware
app.use(express.static("public"))

const jsonParser = bodyParser.json();

// define the first route
app.post("/", jsonParser, function (req, res) {
  res.send("data redirected")
  axios.post(process.env.TARGET_URL, req.body)
})

const port = process.env.PORT || 3000;
// start the server listening for requests
app.listen(port, 
	() => console.log(`Server is running on port ${port}`));