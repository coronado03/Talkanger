import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import ChatHeader from './ChatHeader.js'
import ChatFooter from './ChatFooter.js'
import ChatBody from './ChatBody'


//Chat Component
function Chat({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);


  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);


  return (
    <Container fluid className="chat-window px-2 bg-dark text-light">
      <ChatHeader room={room} />

      <ChatBody socket={socket} room={room} username={username} messageList={messageList}/>

      <ChatFooter socket={socket} room={room} username={username} currentMessage={currentMessage} sendMessage={sendMessage} setCurrentMessage={setCurrentMessage} />

    </Container>
  );
}

export default Chat;
