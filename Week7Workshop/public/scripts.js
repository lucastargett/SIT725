// Connect to the server socket
const socket = io();

// Listen to 'number' event
socket.on('number', (msg) => {
    console.log('Random number:', msg);
    document.getElementById('number').innerText = msg;
});