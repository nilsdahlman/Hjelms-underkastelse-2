const express = require('express')
const app = express()
const port = 3000

var cldr = __dirname + '\\client\\'

app.get('/', (req, res) => {
  res.sendFile( cldr + 'index.html')
})
app.listen(port, () => console.log(`Example app listening on port port!`))