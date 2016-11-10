'use strict'
let express = require('express')
let path = require('path')
const PORT = process.env.PORT || 5000

let app = express()

app.use( express.static(__dirname) )

app.get('*', (req,res) => {
	res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen( PORT, () => {
	console.log(`server started on port ${PORT}`)
})