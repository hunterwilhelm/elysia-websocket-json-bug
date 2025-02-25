import { Elysia } from "elysia";

new Elysia()
  .ws("/ws", {
    message(ws, message) {
      console.log(typeof message, JSON.stringify(message));
    },
  })
  .listen(3400);


  async function test() {
    const socket = new WebSocket("ws://localhost:3400/ws");
    socket.onopen = () => {
      socket.send('{"id":1}');
      socket.send('[{"id":1}]');
      socket.send('{id:1}');
      socket.send('[{id:1}]');
    };
  }
  test();
  