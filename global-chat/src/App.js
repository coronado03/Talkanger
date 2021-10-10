import React, { useState } from 'react';
import  io  from 'socket.io-client';
import Chat from './components/Chat.js'
import './App.css'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'



const socket = io.connect("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);


  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true)
    }
  }
  

  
  return (
    <div className="App">

      {!showChat ? (
        <Container className="border rounded-3 p-5 shadow-lg login-container">
          <div className="row mb-2">
          <h1 className="text-center title">TALKANGER</h1>
          <p className="text-center text-secondary ">Chat with Strangers</p>
          </div>
          <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          </svg>
          </span>
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Username..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          </div>
          <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key-fill" viewBox="0 0 16 16">
            <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
          </svg>
          </span>
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          </div>
          <div className="row">
          <button className="btn btn-outline-dark rounded-pill fs-3" onClick={joinRoom}>Join A Room</button>
          </div>
        </Container>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
      
    </div>
  );
}

export default App;