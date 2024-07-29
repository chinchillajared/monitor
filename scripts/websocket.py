#!/usr/bin/env python3

#import dependencies
import asyncio
import websockets
import json


#We will use this function to send and receive messages from the clients.
async def echo(websocket, path):

    #Receive the message from the client and reply with a confirmation message.
    async for message in websocket:
        print('Message received: ', message)
        print('Processing message...')
        
        # Send the response back to the client
        response = 'Message received: ' + message + '\nProcessing message...'
        await websocket.send(response)
        # data = json.loads(message)
        # if data.get('type') == 'temperature':
        #     temperature = data.get('value')

#Start the WebSocket server on the local IP address and port 8765.
start_server = websockets.serve(echo, "", 8765)

asyncio.get_event_loop().run_until_complete(start_server)
print("WebSocket server started on ws://192.168.1.111:8765")

#This will keep the server running indefinitely.
asyncio.get_event_loop().run_forever()




