const express = require('express');
const app = express();
const http = require('http').Server(app);
// const io = require('socket.io')(http);
let socket = null;

app.use(express.static('views'))

app.get('/', (req, res) => {
  res.send('index.html')
})

app.get('/pressed', (req, res) => {
  socket.emit('buttonState', 'pressed')
})

app.get('/released', (req, res) => {
  socket.emit('buttonState', 'released')
})

// io.on('connection', (sock) => {
//   socket = sock;
//
//   socket.emit('connection_established')
//     console.log('a user connected');
//
//   socket.on('disconnect', () => {
//     console.log('a user disconnected');
//   })
//
// })

http.listen(3000, () => console.log('port 3000'))
