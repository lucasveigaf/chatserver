/**
 * Types of messages that can be sent to the clients.
 */
const msgTypes = {
  USER: "USR",
  INFO: "INF"
};

/**
 * Message informing that a new user connected.
 * @param {String} username - the user's username.
 */
const userEnteredRoom = username => ({
  type: msgTypes.INFO,
  username,
  timestamp: new Date(),
  value: `${username} just entered the room!`
});

/**
 * A new user message
 * @param {String} username - the user's username.
 * @param {String} msg - the user's message.
 */
const newUserMessage = (username, msg) => ({
  type: msgTypes.USER,
  username,
  timestamp: new Date(),
  value: msg
});

/**
 * Message informing that a user disconnected.
 * @param {String} username - the user's username.
 * @param {Number} chatDuration - the length of the user's connection.
 */
const userLeftRoom = (username, chatDuration) => {
  const minuteString = chatDuration <= 1 ? "minute" : "minutes";
  return {
    type: msgTypes.INFO,
    username,
    timestamp: new Date(),
    value: `${username} just left the room! The chat lasted ${chatDuration} ${minuteString}.`
  };
};

module.exports = {
  msgTypes,
  userEnteredRoom,
  newUserMessage,
  userLeftRoom
};
