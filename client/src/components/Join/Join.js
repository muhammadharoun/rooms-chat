import React,{useState} from 'react';
import Chat from '../Chat/Chat';
import io  from "socket.io-client";
const ENDPOINT = 'http://localhost:3001';
const socket = io.connect(ENDPOINT);

const Join = () => {
    const [username, setUsername] = useState('')
    const [room, setRoom] = useState('')
    const JoinRoom = () => {
      socket.emit('join', { username, room }, (error) => {
          if(error) {
            alert(error);
          }                               
        });                             
    }

    return(                           
    <div >                                  
        <input value={username} placeholder='Enter username' onChange={(e) => {setUsername(e.target.value)}} />
        <input value={room} placeholder='Enter room' onChange={(e) => {setRoom(e.target.value)}} />
        <button onClick={JoinRoom}> submit</button>
        <Chat socket={socket} room={room} username={username} />
    </div>
    )
}

export default Join
