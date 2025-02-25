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
      socket.send(JSON.stringify({"id":1}));
      socket.send(JSON.stringify([{"id":1}]));
      socket.send(JSON.stringify(true));
      socket.send(JSON.stringify(false));
      socket.send(JSON.stringify(0));
      socket.send(JSON.stringify(null));
      socket.send(JSON.stringify("Hello"));
    };
  }
  test();
  