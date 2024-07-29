let socket;

// Connect to the WebSocket server
socket = new WebSocket('https://websocket.chinchillajared.works/');

//Once the connection is open, confirm the status on the page
socket.onopen = function (event) {
    console.log('WebSocket is open now.');
    document.getElementById('status').innerText = ''; // clear the messages
    document.getElementById('status').innerText += 'Connected.';
    document.getElementById('simbol').innerText = '🟢';
};

//Once the connection is closed, confirm the status on the page
socket.onclose = function (event) {
    console.log('WebSocket is closed now.');
    document.getElementById('status').innerText = ''; // clear the messages
    document.getElementById('status').innerText += 'Dissconected.';
    document.getElementById('simbol').innerText = '🔴';
};

//If there is an error, log it to the console
socket.onerror = function (error) {
    console.log('WebSocket Error: ' + error);
};

// Log messages from the server
socket.onmessage = function (event) {
    console.log('Message from server ', event.data);
};
