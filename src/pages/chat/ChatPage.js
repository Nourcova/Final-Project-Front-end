import React from 'react'
import Chat from '../../components/chat/Chat.js'
import { useLocation } from 'react-router-dom'
import Button from '../../components/Button/Button.js';
import logo from '../../assets/images/logo_pet_walkers.png'


function ChatPage({ socket, username, room }) {
  const location = useLocation();

  return (
    <>
      <div className='navbar mb-5'>
        <img src={logo} />

      </div>
      {location.state ? <Chat socket={socket} username={location.state.name} room={room} /> : <Chat socket={socket} username={username} room={room} />}
    </>
  )
}

export default ChatPage