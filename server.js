var express = require('express')
var fs = require('fs');
var bodyParser = require('body-parser')

var app = express();

app.use(express.static('./scripts/build/'))
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

// app.post('/save', function(req, res) {
//     var result = ''
//     console.log(req.body[0])
//     for (var i = 0; i < req.body.length; i++) {
//         result += `${i+1}) ${req.body[i]}\n`
//     }
//     fs.writeFile('list.txt', result, function(err) {})
// })

app.listen(3000, function () {
    console.log("Listening on http://localhost:3000")
})