const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
let socket = null;
const PORT = process.env.PORT || 5000
app.use(express.static('views'))

app.get('/', (req, res) => {
  res.send('index.html')
})

app.get('/pressed', (req, res) => {
  io.sockets.emit('buttonState', 'pressed')
  res.send('Button is pressed')
})

app.get('/released', (req, res) => {
  io.sockets.emit('buttonState', 'released')
  res.send('Button is released')
})

io.on('connection', (sock) => {
  socket = sock;

  socket.emit('connection_established')
    console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('a user disconnected');
  })

})

http.listen(PORT, () => console.log('port 5000'))
