import asyncio
import websockets

async def echo(websocket, path):
    async for message in websocket:
        print(f"Received message: {message}")
        response = f"Server received: {message}"
        await websocket.send(response)

start_server = websockets.serve(echo, "", 8765)

asyncio.get_event_loop().run_until_complete(start_server)
print("WebSocket server started on ws://192.168.1.111:8765")
asyncio.get_event_loop().run_forever()



