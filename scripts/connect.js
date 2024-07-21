let socket;

socket = new WebSocket('ws://192.168.1.111:8765');

socket.onopen = function (event) {
    console.log('WebSocket is open now.');
    document.getElementById('status').innerText += 'connected';
};



socket.onmessage = function (event) {
    console.log('Received from server: ' + event.data);
    document.getElementById('messages').innerText = ''; // clear the messages
    document.getElementById('messages').innerText += 'Received from server: ' + event.data + '\n';
};


socket.onclose = function (event) {
    console.log('WebSocket is closed now.');
    document.getElementById('messages').innerText = ''; // clear the messages
    document.getElementById('status').innerText += ' Not connected.';
};


socket.onerror = function (error) {
    console.log('WebSocket Error: ' + error);
};



document.getElementById('sendMessage').onclick = function () {
    const message = document.getElementById('message').value;
    socket.send(message);
};