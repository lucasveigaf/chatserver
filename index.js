const io = require("socket.io")();
const messages = require("./messages");

io.on("connection", client => {
  /**
   * Called when a new user subscribes to the chat. It stores the user's username and join date,
   * then emits a newMessage informing other users that a new user connected.
   * @param {String} username - the user's username
   */
  client.on("subscribeToChat", username => {
    client.username = username;
    client.startDate = new Date();
    io.emit("newMessage", messages.userEnteredRoom(client.username));
  });

  /**
   * Called when a user sends a new message. It then emits it to all other users.
   * @param {String} msg - the user's message
   */
  client.on("insertNewMessage", msg => {
    io.emit("newMessage", messages.newUserMessage(client.username, msg));
  });

  /**
   * Called when a user disconnects from the server. It then emits a new message to all
   * other users informing them, along with the duration of the user's connection.
   */
  client.on("disconnect", () => {
    const chatDuration = client.startDate
      ? Math.floor(
          (new Date().getTime() - client.startDate.getTime()) / 1000 / 60
        )
      : 0;
    io.emit("newMessage", messages.userLeftRoom(client.username, chatDuration));
  });
});

const port = 8000;
io.listen(port);
/* eslint-disable no-console */
console.log("listening on port ", port);
/* eslint-disable no-console */
