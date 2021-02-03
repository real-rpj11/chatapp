// const express = require('express');

// const app = express();
// const http = require('http').createServer(app);
// const io = require('socket.io')(http);

// const port = 4000;

// // app.use('/css', express.static('public'))

// app.get('/chat', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', (socket) => {
//     console.log('a user connected');
//     socket.on('disconnect', () => {
//         console.log('user disconnected');
//     });
// });

// io.on('connection', (socket) => {
//     socket.on('chat message', (msg) => {
//       console.log('message: ' + msg);
//     });
//   });

// app.listen(port, () => {
//     console.log(`listening to port ${port}`);
// })

const app = require('express');
const http = require('http').createServer(app);
const io = require('socket.io');
const {joinUser, removeruser} = require('/user.js');


