import logo from './logo.svg';
import './App.css';
import Login_page from './pages/login/Login';
import PetWalkers from './pages/petWalkers/PetWalkers';
import  {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/home/Home';
import ChooseUser from './pages/chooseUser/ChooseUser';
import CreatePetWalker from './pages/createPetWalker/CreatePetWalker';
import Chat from './components/chat/Chat';
import ChatPage from './pages/chat/ChatPage';
import { useState } from 'react';

import io from "socket.io-client";
import Profile from './pages/profile/Profile';

const socket = io.connect("http://localhost:5000");

function App() {
  const [username, setUsername] = useState("Nour");
  const [room, setRoom] = useState("123");
  const [showChat, setShowChat] = useState(true);
  
  socket.emit("join_room", room);
  // const joinRoom = () => {
  //   if (username !== "" && room !== "") {
  //     socket.emit("join_room", room);
  //     setShowChat(true);
  //   }
  // };
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login_page/>}/>
      <Route path="/petwalkers" element={<PetWalkers/>}/>
      <Route path="/chooseuser" element={<ChooseUser/>}/>
      <Route path="/createpetwalker" element={<CreatePetWalker/>}/>
      <Route path="/chat" element={<ChatPage socket={socket} username={username} room={room}/>}/>
      <Route path="/profile/1" element = {<Profile/>}/>
      {/* <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route>
      </Route> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
