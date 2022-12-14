const express = require('express')
const app = express()

app.use('/public', express.static(__dirname + '/public'))
app.use('/styles', express.static(__dirname + '/styles'))

app.get('/', (req, res)=> {
    res.sendFile(__dirname + '/pages/index.html')
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/pages/about.html')
})
// freecodecamp project 



app.get('/api/:time', (req, res) => {
    let response = {}
let input = req.params.time    
// if time is on utc let say just to make sure it has name, okay!
if(input.includes('-')){
response['unix'] = new Date(input).getTime()
response['utc'] = new Date(input).toUTCString()
res.json(response)
}else {
    input = parseInt(input)
response['unix'] = new Date(input).getTime()
response['utc'] = new Date(input).toUTCString()
res.json(response)
}


})















let port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log('server-ready-on-port: ' + port)
})