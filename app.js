const express = require('express')
const app = express()

app.set('veiw engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send("HELLO")
})

server = app.listen(30000);

const io = require('socket.io')(server)

io.on('connect', (socket) =>{

    console.log('New user connected')
}) 